/**
 * Site-wide motion: smooth scroll, reveals, parallax, nav, cursor, preloader,
 * and the interactive sections on the home page.
 */
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const desktop = () => window.matchMedia('(min-width: 901px)').matches;

/* ------------------------------------------------------------------ */
/* Smooth scroll                                                        */
/* ------------------------------------------------------------------ */
let lenis: Lenis | null = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  // anchor links
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"], a[href^="/#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const hash = a.getAttribute('href')!.replace(/^\//, '');
      const target = document.querySelector(hash);
      if (target && location.pathname === '/' ) {
        e.preventDefault();
        closeMenu();
        lenis!.scrollTo(target as HTMLElement, { offset: -20, duration: 1.4 });
      }
    });
  });
}

/* ------------------------------------------------------------------ */
/* Preloader                                                            */
/* ------------------------------------------------------------------ */
const loader = document.querySelector<HTMLElement>('[data-loader]');
if (loader) {
  const seen = sessionStorage.getItem('hc-seen');
  if (seen || reduced) {
    loader.classList.add('is-skipped');
    document.body.classList.remove('no-scroll');
  } else {
    document.body.classList.add('no-scroll');
    lenis?.stop();
    window.setTimeout(() => {
      loader.classList.add('is-done');
      document.body.classList.remove('no-scroll');
      lenis?.start();
      sessionStorage.setItem('hc-seen', '1');
      window.setTimeout(() => loader.remove(), 1000);
      heroIn();
    }, 1700);
  }
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */
function heroIn() {
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;
  hero.querySelectorAll('.lines').forEach((el) => el.classList.add('is-in'));
  hero.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
}
if (!loader || loader.classList.contains('is-skipped')) window.setTimeout(heroIn, 120);

// Hero video: rotate between clips, fade on switch
const heroVideo = document.querySelector<HTMLVideoElement>('[data-hero-video]');
if (heroVideo && !reduced) {
  const clips = (heroVideo.dataset.clips || '').split(',').filter(Boolean);
  let i = 0;
  const next = () => {
    i = (i + 1) % clips.length;
    heroVideo.style.opacity = '0';
    window.setTimeout(() => {
      heroVideo.src = clips[i];
      heroVideo.play().catch(() => {});
      heroVideo.style.opacity = '1';
    }, 600);
  };
  if (clips.length > 1) heroVideo.addEventListener('ended', next);
  // hero parallax
  const media = document.querySelector('[data-hero-media]');
  if (media) {
    gsap.to(media, { yPercent: 18, ease: 'none', scrollTrigger: { trigger: '[data-hero]', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('[data-hero-copy]', { yPercent: -10, opacity: 0, ease: 'none', scrollTrigger: { trigger: '[data-hero]', start: '30% top', end: 'bottom top', scrub: true } });
  }
}

/* ------------------------------------------------------------------ */
/* Reveals                                                              */
/* ------------------------------------------------------------------ */
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    }
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
);
document.querySelectorAll('[data-reveal], .lines').forEach((el) => {
  if (el.closest('[data-hero]')) return;
  io.observe(el);
});

// stagger children
document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
  const kids = Array.from(group.children) as HTMLElement[];
  kids.forEach((k, i) => {
    k.setAttribute('data-reveal', '');
    k.style.transitionDelay = `${i * 0.08}s`;
    io.observe(k);
  });
});

/* ------------------------------------------------------------------ */
/* Parallax images                                                      */
/* ------------------------------------------------------------------ */
if (!reduced) {
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((wrap) => {
    const img = wrap.querySelector('img');
    if (!img) return;
    gsap.fromTo(img, { yPercent: -7 }, { yPercent: 7, ease: 'none', scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
}

/* ------------------------------------------------------------------ */
/* Word-by-word manifesto                                               */
/* ------------------------------------------------------------------ */
document.querySelectorAll<HTMLElement>('[data-words]').forEach((el) => {
  const words = el.textContent!.trim().split(/\s+/);
  el.innerHTML = words.map((w) => `<span class="w"><span>${w}</span></span>`).join(' ');
  const spans = el.querySelectorAll('.w > span');
  if (reduced) return;
  gsap.set(spans, { opacity: 0.18 });
  gsap.to(spans, { opacity: 1, stagger: 0.04, ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: 0.6 } });
});

/* ------------------------------------------------------------------ */
/* Marquee                                                              */
/* ------------------------------------------------------------------ */
document.querySelectorAll<HTMLElement>('[data-marquee]').forEach((m) => {
  const track = m.querySelector<HTMLElement>('[data-marquee-track]');
  if (!track || reduced) return;
  const speed = parseFloat(m.dataset.speed || '40');
  const tween = gsap.to(track, { xPercent: -50, ease: 'none', duration: speed, repeat: -1 });
  ScrollTrigger.create({
    trigger: m, start: 'top bottom', end: 'bottom top',
    onUpdate: (self) => { tween.timeScale(1 + Math.min(Math.abs(self.getVelocity()) / 600, 3) * (self.direction || 1)); },
  });
});

/* ------------------------------------------------------------------ */
/* Crafts: horizontal scroll on desktop                                 */
/* ------------------------------------------------------------------ */
const craftsSection = document.querySelector<HTMLElement>('[data-crafts]');
if (craftsSection) {
  const track = craftsSection.querySelector<HTMLElement>('[data-crafts-track]')!;
  const progress = craftsSection.querySelector<HTMLElement>('[data-crafts-progress]');
  ScrollTrigger.matchMedia({
    '(min-width: 901px) and (prefers-reduced-motion: no-preference)': () => {
      const getDist = () => track.scrollWidth - window.innerWidth;
      const tween = gsap.to(track, {
        x: () => -getDist(),
        ease: 'none',
        scrollTrigger: {
          trigger: craftsSection,
          start: 'top top',
          end: () => `+=${getDist()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => { if (progress) progress.style.transform = `scaleX(${self.progress})`; },
        },
      });
      // per-panel image parallax
      track.querySelectorAll<HTMLElement>('[data-craft-img]').forEach((img) => {
        gsap.fromTo(img, { xPercent: -8 }, { xPercent: 8, ease: 'none', scrollTrigger: { trigger: img, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } });
      });
      return () => tween.kill();
    },
  });
}

/* ------------------------------------------------------------------ */
/* Process: pinned image stack                                          */
/* ------------------------------------------------------------------ */
const proc = document.querySelector<HTMLElement>('[data-process]');
if (proc) {
  const steps = proc.querySelectorAll<HTMLElement>('[data-step]');
  const imgs = proc.querySelectorAll<HTMLElement>('[data-step-img]');
  const thread = proc.querySelector<SVGPathElement>('[data-thread]');
  const setActive = (i: number) => {
    steps.forEach((s, j) => s.classList.toggle('is-active', i === j));
    imgs.forEach((im, j) => im.classList.toggle('is-active', i === j));
  };
  setActive(0);
  steps.forEach((s, i) => {
    ScrollTrigger.create({ trigger: s, start: 'top 55%', end: 'bottom 55%', onEnter: () => setActive(i), onEnterBack: () => setActive(i) });
  });
  if (thread && !reduced) {
    const len = thread.getTotalLength();
    thread.style.strokeDasharray = `${len}`;
    thread.style.strokeDashoffset = `${len}`;
    gsap.to(thread, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: proc.querySelector('[data-steps]'), start: 'top 60%', end: 'bottom 60%', scrub: 0.5 } });
  }
}

/* ------------------------------------------------------------------ */
/* Products list with floating preview                                  */
/* ------------------------------------------------------------------ */
const plist = document.querySelector<HTMLElement>('[data-products]');
if (plist && finePointer && !reduced) {
  const preview = plist.querySelector<HTMLElement>('[data-products-preview]')!;
  const imgs = preview.querySelectorAll<HTMLElement>('[data-product-img]');
  gsap.set(preview, { xPercent: -50, yPercent: -50, rotation: -3, scale: 0.9 });
  const xTo = gsap.quickTo(preview, 'x', { duration: 0.5, ease: 'power3' });
  const yTo = gsap.quickTo(preview, 'y', { duration: 0.5, ease: 'power3' });
  plist.addEventListener('pointermove', (e) => {
    const r = plist.getBoundingClientRect();
    xTo(e.clientX - r.left);
    yTo(e.clientY - r.top);
  });
  plist.querySelectorAll<HTMLElement>('[data-product]').forEach((item) => {
    item.addEventListener('pointerenter', () => {
      const key = item.dataset.product!;
      imgs.forEach((im) => im.classList.toggle('is-active', im.dataset.productImg === key));
      preview.classList.add('is-visible');
      gsap.to(preview, { scale: 1, duration: 0.6, ease: 'power3.out' });
    });
  });
  plist.addEventListener('pointerleave', () => { preview.classList.remove('is-visible'); gsap.to(preview, { scale: 0.9, duration: 0.4 }); });
}

/* ------------------------------------------------------------------ */
/* Nav behaviour + menu                                                 */
/* ------------------------------------------------------------------ */
const nav = document.querySelector<HTMLElement>('[data-nav]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
const burger = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
let lastY = 0;
const onScroll = () => {
  const y = window.scrollY;
  if (!nav) return;
  nav.classList.toggle('is-scrolled', y > 40);
  nav.classList.toggle('is-hidden', y > lastY && y > 300 && !menu?.classList.contains('is-open'));
  lastY = y;
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

function closeMenu() {
  if (!menu || !menu.classList.contains('is-open')) return;
  menu.classList.remove('is-open');
  menu.setAttribute('aria-hidden', 'true');
  burger?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-menu-open');
  document.body.classList.remove('no-scroll');
  lenis?.start();
}
function openMenu() {
  if (!menu) return;
  menu.classList.add('is-open');
  menu.setAttribute('aria-hidden', 'false');
  burger?.setAttribute('aria-expanded', 'true');
  nav?.classList.add('is-menu-open');
  document.body.classList.add('no-scroll');
  lenis?.stop();
}
burger?.addEventListener('click', () => (menu?.classList.contains('is-open') ? closeMenu() : openMenu()));
document.querySelectorAll('[data-menu-link]').forEach((a) => a.addEventListener('click', closeMenu));
window.addEventListener('keydown', (e) => e.key === 'Escape' && closeMenu());

/* ------------------------------------------------------------------ */
/* Cursor                                                               */
/* ------------------------------------------------------------------ */
const cursor = document.querySelector<HTMLElement>('[data-cursor]');
if (cursor && finePointer && !reduced) {
  document.body.classList.add('has-cursor');
  const label = cursor.querySelector<HTMLElement>('[data-cursor-label]')!;
  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3' });
  window.addEventListener('pointermove', (e) => { xTo(e.clientX); yTo(e.clientY); }, { passive: true });
  window.addEventListener('pointerdown', () => cursor.classList.add('is-down'));
  window.addEventListener('pointerup', () => cursor.classList.remove('is-down'));
  const hoverables = 'a, button, [data-hover], label, input, textarea, select';
  document.addEventListener('pointerover', (e) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor-text]');
    if (t) { label.textContent = t.dataset.cursorText || ''; cursor.classList.add('is-label'); return; }
    if ((e.target as HTMLElement).closest(hoverables)) cursor.classList.add('is-hover');
  });
  document.addEventListener('pointerout', (e) => {
    const t = (e.target as HTMLElement).closest('[data-cursor-text]');
    if (t) cursor.classList.remove('is-label');
    if ((e.target as HTMLElement).closest(hoverables)) cursor.classList.remove('is-hover');
  });
  document.addEventListener('mouseleave', () => (cursor.style.opacity = '0'));
  document.addEventListener('mouseenter', () => (cursor.style.opacity = '1'));
}

/* ------------------------------------------------------------------ */
/* Lightbox (archive & galleries)                                       */
/* ------------------------------------------------------------------ */
const lb = document.querySelector<HTMLElement>('[data-lightbox]');
if (lb) {
  const img = lb.querySelector<HTMLImageElement>('img')!;
  const cap = lb.querySelector<HTMLElement>('[data-lightbox-caption]')!;
  const count = lb.querySelector<HTMLElement>('[data-lightbox-count]')!;
  let items: HTMLElement[] = [];
  let idx = 0;
  const visibleItems = () => Array.from(document.querySelectorAll<HTMLElement>('[data-lightbox-item]')).filter((el) => !el.hidden && el.offsetParent !== null);
  const show = (i: number) => {
    idx = (i + items.length) % items.length;
    const el = items[idx];
    img.src = el.dataset.full!;
    img.alt = el.dataset.caption || '';
    cap.textContent = el.dataset.caption || '';
    count.textContent = `${idx + 1} / ${items.length}`;
  };
  const open = (el: HTMLElement) => {
    items = visibleItems();
    show(items.indexOf(el));
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    lenis?.stop();
  };
  const close = () => {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    lenis?.start();
  };
  document.addEventListener('click', (e) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>('[data-lightbox-item]');
    if (t) { e.preventDefault(); open(t); }
  });
  lb.querySelector('[data-lightbox-close]')?.addEventListener('click', close);
  lb.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => show(idx - 1));
  lb.querySelector('[data-lightbox-next]')?.addEventListener('click', () => show(idx + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
  window.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') show(idx + 1);
    if (e.key === 'ArrowLeft') show(idx - 1);
  });
}

/* ------------------------------------------------------------------ */
/* Archive filters                                                      */
/* ------------------------------------------------------------------ */
const filters = document.querySelector<HTMLElement>('[data-filters]');
if (filters) {
  const grid = document.querySelector<HTMLElement>('[data-archive-grid]')!;
  filters.querySelectorAll<HTMLButtonElement>('button').forEach((b) => {
    b.addEventListener('click', () => {
      filters.querySelectorAll('button').forEach((x) => x.classList.remove('is-active'));
      b.classList.add('is-active');
      const key = b.dataset.filter!;
      grid.querySelectorAll<HTMLElement>('[data-cat]').forEach((item) => {
        const on = key === 'all' || item.dataset.cat === key;
        item.hidden = !on;
      });
      ScrollTrigger.refresh();
    });
  });
}

/* ------------------------------------------------------------------ */
/* Refresh after fonts/images                                           */
/* ------------------------------------------------------------------ */
window.addEventListener('load', () => ScrollTrigger.refresh());
document.fonts?.ready.then(() => ScrollTrigger.refresh());
