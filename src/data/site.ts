export const site = {
  name: 'Honeycomb International',
  shortName: 'Honeycomb',
  tagline: 'Cloth made by many hands.',
  description:
    'Honeycomb International is an Ahmedabad-based design, product development, manufacturing and export house for handcrafted home textiles, established in 1969. Hand block print, hand embroidery, appliqué and patchwork, hand weaving, tie-dye, batik and hand painting, made with artisan families across Gujarat and Rajasthan for Caravane, Zara Home, Cost Plus World Market and design-led homes worldwide.',
  url: 'https://honeycombint.com',
  email: 'info@honeycombint.com',
  city: 'Ahmedabad',
  region: 'Gujarat, India',
  address: 'Cama Hotel, Khanpur, Ahmedabad 380 001, India',
  founder: 'Nazir Weldingwala',
  md: 'Sohel Weldingwala',
  founded: '1969',
  instagram: '', // add handle when available
  nav: [
    { label: 'Crafts', href: '/#crafts' },
    { label: 'Products', href: '/products' },
    { label: 'Archive', href: '/archive' },
    { label: 'Story', href: '/about' },
    { label: 'Enquire', href: '/contact' },
  ],
  clients: ['Caravane, Paris', 'Zara Home', 'Cost Plus World Market'],
};

export const crafts = [
  {
    slug: 'block-print',
    n: '01',
    name: 'Hand Block Print',
    short: 'Block print',
    line: 'Carved teak, mineral colour, and a printer’s steady strike.',
    hero: 'blockprint-05',
    cover: 'blockprint-2026-dia',
    intro:
      'A wooden block, carved by hand, pressed by hand, one impression at a time. Every metre carries the faint drift of the human hand that made it. That drift is the point.',
    story: [
      'Hand block printing in Gujarat and Rajasthan is older than any of the tables it is done on. A pattern is drawn, then carved in reverse into seasoned teak. The printer dips the block into a tray of colour, sets it on the cloth by eye, and strikes it once with the heel of the hand. Then again, a fraction to the right, for as long as the cloth runs.',
      'We print on hand-loomed and mill cotton, on linen and on silk, in traditional mineral and vegetable colours as well as fast modern pigments. Ajrakh-style resist prints in indigo and madder, fine Sanganeri florals, bold geometrics of our own design, and exact reproductions of a client’s artwork. Natural-dyed block print, as our first catalogue put it, actually looks more beautiful with every wash.',
      'After printing, the cloth is washed in open tanks, dried in the sun, and often printed again for a second and third colour. Nothing about it is quick. Everything about it shows.',
    ],
    process: ['blockprint-2026-line', 'blockprint-09', 'block-carving', 'artisan-dye-02', 'washing-2026', 'blockprint-2026-dia', 'blockprint-cloth-01', 'blockprint-26'],
    products: ['Bed linen & quilts', 'Curtains & panels', 'Table covers & linen', 'Cushions', 'Fabric by the metre', 'Scarves'],
    gallery: ['prod-ajrakh-table-1', 'prod-bedcover-indigo', 'prod-cushion-print-2', 'prod-print-swatch-3'],
  },
  {
    slug: 'embroidery',
    n: '02',
    name: 'Hand Embroidery',
    short: 'Embroidery',
    line: 'Kantha, zardozi, mirror-work and the running stitch of Bengal.',
    hero: 'frame-stitch-02',
    cover: 'arch-kantha-13',
    intro:
      'Thread through cloth, a million times over. From the humble running stitch of a kantha quilt to the metal-and-velvet richness of zardozi, embroidery is where our artisans are most themselves.',
    story: [
      'India has more living embroidery traditions than anywhere on earth, and our home in Gujarat sits at the heart of several of them. Mochi and aari chain-stitch from Kutch. Mirror-work from the desert villages. Zardozi metal-thread work descended from the Mughal courts. And kantha, the layered running stitch from Bengal that turns old saris into new quilts.',
      'Our embroidery is worked on frames in the workshop and in artisans’ homes, mostly by women, often in the hours between other work. A single quilt can hold weeks of stitching. We pay by the piece, fairly, and we wait as long as it takes.',
      'For clients we develop original motifs, colourways and stitch densities, sampled in the workshop until they are right and then reproduced with remarkable consistency across a production run.',
    ],
    process: ['frame-stitch-01', 'kutch-embroidery-02', 'beadwork-01', 'beadwork-03', 'zardozi-red', 'quilting-02', 'frame-stitch-04', 'sample-knots'],
    products: ['Cushion covers', 'Kantha quilts & throws', 'Bed runners', 'Wall hangings', 'Table runners', 'Bags & accessories'],
    gallery: ['prod-kantha-quilt-1', 'prod-cushion-zardozi-1', 'prod-kantha-animal-cushions', 'prod-bag-5'],
  },
  {
    slug: 'patchwork',
    n: '03',
    name: 'Patchwork & Appliqué',
    short: 'Patchwork',
    line: 'Cut-work, canopies and the pieced quilts of Saurashtra.',
    hero: 'applique-cut-01',
    cover: 'prod-bedcover-applique-1',
    intro:
      'Small pieces of cloth, cut freehand and sewn into something larger than themselves. Appliqué is the great needle art of Gujarat, and Honeycomb has been making it for the world’s homes for more than fifty years.',
    story: [
      'Appliqué and patchwork are the arts of the scrap. In the villages of Saurashtra and Kutch, offcuts of red, indigo and white cotton were pieced into canopies, door hangings (toran), wall panels (chakla) and quilts, worked with peacocks, elephants, riders and sun-wheels. Our own mark, the horse and rider, comes from this tradition.',
      'Our craftsmen cut the motifs with heavy iron shears, without templates, then turn under the edges and stitch them invisibly to the ground. Reverse appliqué, where the top layer is cut away to reveal colour beneath, gives our white-on-white cutwork bedcovers and curtains their translucent, snowflake quality.',
      'We work in both traditional vocabularies and clean contemporary forms: a tree of life in cotton with brigades of riders on camels and elephants, or a single spiral on charcoal linen.',
    ],
    process: ['applique-cut-02', 'applique-cut-03', 'applique-lay-01', 'applique-lay-02', 'spiral-01', 'cutwork-table', 'sample-spiral', 'sample-rings'],
    products: ['Quilts & bedcovers', 'Cutwork curtains', 'Cushions', 'Wall hangings', 'Canopies & torans', 'Tablecloths'],
    gallery: ['prod-cutwork-1', 'prod-treeoflife-1', 'prod-bedcover-applique-1', 'prod-hanging-sohel'],
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
    process: ['cat-process-weaving', 'artisan-loom-01', 'arch-patola-loom', 'artisan-loom-02', 'prod-print-swatch-3', 'cat-dhurrie', 'artisan-stitching', 'cat-quilts'],
    products: ['Cotton dhurries', 'Handloom yardage', 'Khadi bed & table linen', 'Wool throws', 'Stoles', 'Upholstery cloth'],
    gallery: ['cat-dhurrie', 'artisan-loom-01', 'arch-patola-04', 'arch-patola-loom'],
  },
  {
    slug: 'tie-dye',
    n: '05',
    name: 'Tie & Dye',
    short: 'Tie & dye',
    line: 'Bandhani, shibori, leheria and the deep vats of indigo and madder.',
    hero: 'dyeing-01',
    cover: 'prod-crinkle-blue',
    intro:
      'Cloth is pinched, bound with thread, and plunged into the vat. Where the thread was, the cloth stays pale. Bandhani, the tie-dye of Gujarat and Rajasthan, is that idea repeated ten thousand times.',
    story: [
      'The finest bandhani has dots so small and so close that the finished cloth reads as texture rather than pattern. It is tied by women in Kutch and Jamnagar, dyed by families who have kept vats for generations, and untied in a single sudden pull that reveals the design. Hand-knotted and hand-dyed, as our brochure said, several hundred times.',
      'Beyond bandhani we work with leheria (diagonal wave stripes), clamp-resist, stitched-resist shibori and crumpled crinkle silks, and with plain dyeing in natural indigo, madder, pomegranate and iron. Our dyers work in copper cauldrons and sunken tanks, washing the cloth in open water between dips.',
      'The results are scarves, stoles and dupattas in silk, bedcovers and quilts, and the softly variegated plain-dyed cloth we use across all our other work.',
    ],
    process: ['dyeing-04', 'dyeing-05', 'dyeing-08', 'dyeing-13', 'dyeing-02', 'washing-08', 'washing-09', 'dyeing-12'],
    products: ['Silk scarves & stoles', 'Crinkle silk shawls', 'Bandhani dupattas', 'Silk quilts & bedcovers', 'Cushions', 'Plain-dyed yardage'],
    gallery: ['prod-crinkle-blue', 'prod-bandhani-black', 'prod-quilt-zara-1', 'prod-scarf-crinkle-1'],
  },
] as const;

export type Craft = (typeof crafts)[number];

/** The four collections from our 2012 brochure, Inspirations from Nature. */
export const collections = [
  {
    key: 'splendour',
    title: 'A Trail of Royal Splendour',
    muse: 'The peacock',
    text: 'Waves of green and ripples of sheer peacock blue, poured into a six-foot length of gleaming, glistening silk. A crumpled, tie-dyed shawl with its own inimitable style: a burst of colour on a sun-swept morning.',
    what: 'Crumpled silk shawls and scarves, tie-and-dye, 44 × 80 in.',
    photo: 'prod-crinkle-blue',
    alt: 'prod-scarf-crinkle-1',
  },
  {
    key: 'diamonds',
    title: 'Thousands of Shimmering Diamonds',
    muse: 'The full moon',
    text: 'Bandhani in sheer black, dappled with stars of white: a whole sheet of stars plucked, polished and pinned to a warm night. Hand-knotted several hundred times, in pure silk.',
    what: 'Bandhani silk shawls and dupattas, black and white, 44 × 108 in.',
    photo: 'prod-bandhani-black',
    alt: 'prod-bandhani-paisley',
  },
  {
    key: 'crystals',
    title: 'Like Crystals in the Wind',
    muse: 'The snowflake',
    text: 'Angelic works of art, falling softly. White-on-white hand appliqué, as individual as a fingerprint or a snowflake, dexterously put together and finely sewn by our artisans.',
    what: 'Cushions, curtains, drapes, bed covers and table covers in white cutwork appliqué.',
    photo: 'prod-cutwork-bed',
    alt: 'prod-cutwork-polaroids',
  },
  {
    key: 'warmth',
    title: 'A Promise of Warmth',
    muse: 'Freshly hewn wood',
    text: 'Block-printed quilts, hand-quilted by traditional village women artisans, wrapping you in an affectionate embrace despite the howling winds outside. Layers of elegantly patterned cotton sandwiching cotton batting, all hand-stitched in the classiest manner possible.',
    what: 'Cotton and silk quilts in natural and other dyes. Single, queen and king.',
    photo: 'prod-kantha-quilt-1',
    alt: 'prod-quilt-caravane',
  },
];

export const processSteps = [
  { n: '01', title: 'Carve & print', text: 'A pattern is carved in reverse into teak. The printer strikes it onto cloth by eye, repeat after repeat.', photo: 'blockprint-2026-dia' },
  { n: '02', title: 'Wash', text: 'The printed cloth is rinsed in open tanks so that only the fast colour stays.', photo: 'washing-2026' },
  { n: '03', title: 'Dye', text: 'Indigo and madder in copper cauldrons. Cloth is dipped, aired, and dipped again for depth.', photo: 'dyeing-05' },
  { n: '04', title: 'Cut & stitch', text: 'Appliqué is cut freehand with iron shears and sewn down with invisible stitches.', photo: 'artisan-stitching' },
  { n: '05', title: 'Quilt', text: 'Village women layer, tack and hand-quilt each piece, working outdoors in good light.', photo: 'village-quilting-07' },
  { n: '06', title: 'Finish', text: 'Every piece is checked, pressed, folded by hand and packed for its journey.', photo: 'prod-kantha-quilt-1' },
];

/** Product categories for the Products page and the home-page list. */
export const productCategories = [
  { key: 'new', name: 'New for 2026', photo: 'prod-quilt-2026-indigo', prefix: ['prod-quilt-2026'] },
  { key: 'quilts', name: 'Quilts & bedcovers', photo: 'prod-kantha-quilt-1', prefix: ['prod-quilt', 'prod-kantha-quilt', 'prod-bedcover', 'prod-printed-quilts', 'prod-cutwork-bed'] },
  { key: 'cushions', name: 'Cushions', photo: 'prod-cushion-print-2', prefix: ['prod-cushion', 'prod-kantha-animal', 'prod-milan-applique', 'prod-print-cushions'] },
  { key: 'applique', name: 'Cutwork & appliqué', photo: 'prod-cutwork-1', prefix: ['prod-cutwork', 'prod-treeoflife', 'prod-curtain', 'prod-tree-cutwork', 'prod-pieced', 'prod-cutwork-polaroids'] },
  { key: 'table', name: 'Table covers & linen', photo: 'prod-ajrakh-table-1', prefix: ['prod-ajrakh-table', 'prod-tablecloth', 'prod-tablelinen', 'prod-print-swatch', 'prod-print-patch'] },
  { key: 'scarves', name: 'Scarves, stoles & shawls', photo: 'prod-scarf-crinkle-1', prefix: ['prod-scarf', 'prod-shibori', 'prod-bandhani', 'prod-tiedye', 'prod-crinkle'] },
  { key: 'bags', name: 'Bags & accessories', photo: 'prod-bag-5', prefix: ['prod-bag', 'prod-papier'] },
  { key: 'hangings', name: 'Wall hangings', photo: 'prod-hanging-sohel', prefix: ['prod-hanging', 'prod-embroidery'] },
];

export const products = productCategories.filter((c) => c.key !== 'new').map((c) => ({ name: c.name, photo: c.photo, key: c.key }));

export const newDesigns = ['prod-quilt-2026-indigo', 'prod-quilt-2026-four', 'prod-quilt-2026-terracotta', 'prod-quilt-2026-trio', 'prod-quilt-2026-stone', 'prod-quilt-2026-teal'];

export const archiveCategories = [
  { key: 'kantha', label: 'Kantha', region: 'Bengal', prefix: 'arch-kantha' },
  { key: 'applique', label: 'Appliqué & embroidered hangings', region: 'Gujarat', prefix: ['arch-applique', 'arch-frieze', 'arch-toran', 'arch-canopy', 'arch-palkhi', 'arch-embroidered-square', 'trad-'] },
  { key: 'patola', label: 'Patola & ikat', region: 'Patan', prefix: ['arch-patola', 'arch-ikat'] },
  { key: 'kashmir', label: 'Kashmir shawls', region: 'Kashmir', prefix: ['arch-kashmir', 'arch-shawl'] },
  { key: 'phulkari', label: 'Phulkari', region: 'Punjab', prefix: 'arch-phulkari' },
  { key: 'bandhani', label: 'Bandhani & block print', region: 'Kutch & Rajasthan', prefix: ['arch-bandhani', 'arch-blockprint', 'arch-chintz'] },
  { key: 'mochi', label: 'Mochi, mirror & beadwork', region: 'Kutch & Saurashtra', prefix: ['arch-mochi', 'arch-mirror', 'arch-embroidered-border', 'arch-beadwork'] },
  { key: 'kalamkari', label: 'Kalamkari & painted cloth', region: 'South India & Rajasthan', prefix: ['arch-kalamkari', 'arch-painted'] },
  { key: 'zardozi', label: 'Zardozi & brocade', region: 'Lucknow & Banaras', prefix: ['arch-zardozi', 'arch-brocade', 'arch-zari'] },
  { key: 'jewellery', label: 'Silver jewellery', region: 'Gujarat & Rajasthan', prefix: 'arch-jewel' },
];
