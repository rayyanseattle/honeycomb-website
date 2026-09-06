export const site = {
  name: 'Honeycomb International',
  shortName: 'Honeycomb',
  tagline: 'Cloth made by many hands.',
  description:
    'Honeycomb International is an Ahmedabad-based maker and exporter of hand block-printed, hand-embroidered, patchwork, hand-woven and tie-dyed home textiles, working with artisan families across Gujarat and Rajasthan since the 1990s.',
  url: 'https://honeycombint.com',
  email: 'info@honeycombint.com',
  city: 'Ahmedabad',
  region: 'Gujarat, India',
  founder: 'Sohel Weldingwala',
  founded: '1990s',
  instagram: '', // add handle when available
  nav: [
    { label: 'Crafts', href: '/#crafts' },
    { label: 'Process', href: '/#process' },
    { label: 'Archive', href: '/archive' },
    { label: 'Story', href: '/about' },
    { label: 'Enquire', href: '/contact' },
  ],
};

export const crafts = [
  {
    slug: 'block-print',
    n: '01',
    name: 'Hand Block Print',
    short: 'Block print',
    line: 'Carved teak, mineral colour, and a printer’s steady strike.',
    hero: 'blockprint-05',
    cover: 'blockprint-07',
    intro:
      'A wooden block, carved by hand, pressed by hand, one impression at a time. Every metre carries the faint drift of the human hand that made it. That drift is the point.',
    story: [
      'Hand block printing in Gujarat and Rajasthan is older than any of the tables it is done on. A pattern is drawn, then carved in reverse into seasoned teak. The printer dips the block into a tray of colour, sets it on the cloth by eye, and strikes it once with the heel of the hand. Then again, a fraction to the right, for as long as the cloth runs.',
      'We print on hand-loomed and mill cotton, on linen and on silk, in traditional mineral and vegetable colours as well as fast modern pigments. Ajrakh-style resist prints in indigo and madder, fine Sanganeri florals, bold geometrics of our own design, and exact reproductions of a client’s artwork.',
      'After printing, the cloth is washed in open tanks, dried in the sun, and often printed again for a second and third colour. Nothing about it is quick. Everything about it shows.',
    ],
    process: ['blockprint-01', 'blockprint-09', 'blockprint-11', 'blockprint-13', 'washing-02', 'dyeing-02', 'blockprint-cloth-01', 'blockprint-21'],
    products: ['Bed linen & quilts', 'Curtains & panels', 'Table linen', 'Cushions', 'Fabric by the metre', 'Scarves'],
    gallery: ['blockprint-10', 'blockprint-19', 'blockprint-cloth-02', 'cat-blockprint-bed'],
  },
  {
    slug: 'embroidery',
    n: '02',
    name: 'Hand Embroidery',
    short: 'Embroidery',
    line: 'Kantha, zardozi, mirror-work and the running stitch of Bengal.',
    hero: 'frame-stitch-02',
    cover: 'beadwork-02',
    intro:
      'Thread through cloth, a million times over. From the humble running stitch of a kantha quilt to the metal-and-velvet richness of zardozi, embroidery is where our artisans are most themselves.',
    story: [
      'India has more living embroidery traditions than anywhere on earth, and our home in Gujarat sits at the heart of several of them. Mochi and aari chain-stitch from Kutch. Mirror-work from the desert villages. Zardozi metal-thread work descended from the Mughal courts. And kantha, the layered running stitch from Bengal that turns old saris into new quilts.',
      'Our embroidery is worked on frames in the workshop and in artisans’ homes, mostly by women, often in the hours between other work. A single quilt can hold weeks of stitching. We pay by the piece, fairly, and we wait as long as it takes.',
      'For clients we develop original motifs, colourways and stitch densities, sampled in the workshop until they are right and then reproduced with remarkable consistency across a production run.',
    ],
    process: ['frame-stitch-01', 'frame-stitch-03', 'beadwork-01', 'beadwork-03', 'zardozi-red', 'quilting-02', 'frame-stitch-04', 'sample-knots'],
    products: ['Cushion covers', 'Kantha quilts & throws', 'Bed runners', 'Wall panels', 'Table runners', 'Garments & accessories'],
    gallery: ['zardozi-flower', 'sample-circles', 'cat-embroidered-cushions', 'arch-kantha-13'],
  },
  {
    slug: 'patchwork',
    n: '03',
    name: 'Patchwork & Appliqué',
    short: 'Patchwork',
    line: 'Cut-work, canopies and the pieced quilts of Saurashtra.',
    hero: 'applique-cut-01',
    cover: 'spiral-02',
    intro:
      'Small pieces of cloth, cut freehand and sewn into something larger than themselves. Appliqué is the great needle art of Gujarat, and we have been making it for the world’s homes for thirty years.',
    story: [
      'Appliqué and patchwork are the arts of the scrap. In the villages of Saurashtra and Kutch, offcuts of red, indigo and white cotton were pieced into canopies, door hangings (toran), wall panels (chakla) and quilts, worked with peacocks, elephants, riders and sun-wheels.',
      'Our craftsmen cut the motifs with heavy iron shears, without templates, then turn under the edges and stitch them invisibly to the ground. Reverse appliqué, where the top layer is cut away to reveal colour beneath, gives our spiral and circle designs their graphic depth.',
      'We work in both traditional vocabularies and clean contemporary forms: a single spiral on charcoal linen, or a riot of animals on a child’s quilt.',
    ],
    process: ['applique-cut-02', 'applique-cut-03', 'applique-lay-01', 'applique-lay-02', 'spiral-01', 'spiral-03', 'sample-spiral', 'sample-rings'],
    products: ['Quilts & bedcovers', 'Cushions', 'Wall hangings', 'Curtains', 'Canopies & torans', 'Table linen'],
    gallery: ['cat-wallhanging', 'cat-patchwork-bed', 'arch-applique-01', 'arch-applique-09'],
  },
  {
    slug: 'weaving',
    n: '04',
    name: 'Hand Weaving',
    short: 'Weaving',
    line: 'Cotton dhurries, khadi and the pit-looms of Kutch.',
    hero: 'cat-process-weaving',
    cover: 'cat-dhurrie',
    intro:
      'Warp and weft, by foot and by hand. We weave flat-woven dhurries, hand-loomed cotton and wool, and the textured khadi that makes such honest bed and table linen.',
    story: [
      'Hand weaving survives in India on a scale found nowhere else. Our weavers work on pit-looms and frame looms in villages across Kutch and north Gujarat, producing flat-woven cotton dhurries, soft handloom yardage and heavier wool for throws.',
      'Dhurries are woven in interlocking tapestry technique, with the pattern built by the weaver as she goes: stripes, chevrons, diamonds and the stepped geometry of the region. They are reversible, durable and lie flat, which is why the world’s best interiors keep coming back to them.',
      'Handloom cotton and khadi carry a faint slub and irregularity that no mill can reproduce. We use them as the base for our block prints and embroidery, and as beautiful plain cloth in their own right.',
    ],
    process: ['cat-process-weaving', 'cat-dhurrie', 'arch-patola-loom', 'blockprint-cloth-02', 'washing-06', 'cat-quilts', 'village-quilting-06', 'quilting-hands'],
    products: ['Cotton dhurries', 'Handloom yardage', 'Khadi bed & table linen', 'Wool throws', 'Rugs & runners', 'Upholstery cloth'],
    gallery: ['cat-dhurrie', 'cat-quilts', 'arch-patola-04', 'arch-patola-loom'],
  },
  {
    slug: 'tie-dye',
    n: '05',
    name: 'Tie & Dye',
    short: 'Tie & dye',
    line: 'Bandhani, shibori and the deep vats of indigo and madder.',
    hero: 'dyeing-01',
    cover: 'dyeing-03',
    intro:
      'Cloth is pinched, bound with thread, and plunged into the vat. Where the thread was, the cloth stays pale. Bandhani, the tie-dye of Gujarat and Rajasthan, is that idea repeated ten thousand times.',
    story: [
      'The finest bandhani has dots so small and so close that the finished cloth reads as texture rather than pattern. It is tied by women in Kutch and Jamnagar, dyed by families who have kept vats for generations, and untied in a single sudden pull that reveals the design.',
      'Beyond bandhani we work with clamp-resist and stitched-resist (shibori-style) techniques, and with plain dyeing in natural indigo, madder, pomegranate and iron. Our dyers work in copper cauldrons and sunken tanks, washing the cloth in open water between dips.',
      'The results are scarves, sarongs and dupattas, bedcovers and cushions, and the softly variegated plain-dyed cloth we use across all our other work.',
    ],
    process: ['dyeing-04', 'dyeing-05', 'dyeing-08', 'dyeing-09', 'dyeing-02', 'washing-08', 'dyeing-11', 'dyeing-12'],
    products: ['Scarves & stoles', 'Bedcovers', 'Cushions', 'Sarongs & dupattas', 'Plain-dyed yardage', 'Indigo linen'],
    gallery: ['cat-tiedye-scarves', 'cat-tiedye-wine', 'arch-bandhani-02', 'arch-bandhani-06'],
  },
] as const;

export type Craft = (typeof crafts)[number];

export const processSteps = [
  { n: '01', title: 'Carve & print', text: 'A pattern is carved in reverse into teak. The printer strikes it onto cloth by eye, repeat after repeat.', photo: 'blockprint-06' },
  { n: '02', title: 'Wash', text: 'The printed cloth is rinsed in open tanks so that only the fast colour stays.', photo: 'washing-03' },
  { n: '03', title: 'Dye', text: 'Indigo and madder in copper cauldrons. Cloth is dipped, aired, and dipped again for depth.', photo: 'dyeing-05' },
  { n: '04', title: 'Cut & stitch', text: 'Appliqué is cut freehand with iron shears and sewn down with invisible stitches.', photo: 'applique-cut-01' },
  { n: '05', title: 'Quilt', text: 'Village women layer, tack and hand-quilt each piece, working outdoors in good light.', photo: 'village-quilting-02' },
  { n: '06', title: 'Finish', text: 'Every piece is checked, pressed, folded by hand and packed for its journey.', photo: 'sample-spiral' },
];

export const products = [
  { name: 'Bed linen', photo: 'cat-blockprint-bed' },
  { name: 'Quilts & throws', photo: 'cat-quilts' },
  { name: 'Cushions', photo: 'cat-patchwork-cushions' },
  { name: 'Curtains', photo: 'cat-patchwork-bed' },
  { name: 'Table linen', photo: 'blockprint-cloth-01' },
  { name: 'Wall hangings', photo: 'cat-wallhanging' },
  { name: 'Dhurries & rugs', photo: 'cat-dhurrie' },
  { name: 'Scarves & stoles', photo: 'cat-tiedye-scarves' },
  { name: 'Fabric by the metre', photo: 'blockprint-cloth-02' },
];

export const archiveCategories = [
  { key: 'kantha', label: 'Kantha', region: 'Bengal', prefix: 'arch-kantha' },
  { key: 'applique', label: 'Appliqué & patchwork', region: 'Gujarat', prefix: 'arch-applique' },
  { key: 'patola', label: 'Patola & ikat', region: 'Patan', prefix: ['arch-patola', 'arch-ikat'] },
  { key: 'kashmir', label: 'Kashmir shawls', region: 'Kashmir', prefix: ['arch-kashmir', 'arch-shawl'] },
  { key: 'bandhani', label: 'Bandhani', region: 'Kutch & Rajasthan', prefix: 'arch-bandhani' },
  { key: 'mochi', label: 'Mochi & mirror-work', region: 'Kutch', prefix: ['arch-mochi', 'arch-mirror', 'arch-embroidered'] },
  { key: 'kalamkari', label: 'Kalamkari', region: 'South India', prefix: ['arch-kalamkari', 'arch-painted'] },
  { key: 'brocade', label: 'Brocade & zari', region: 'Banaras', prefix: ['arch-brocade', 'arch-zari'] },
];
