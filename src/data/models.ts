export interface Model {
  slug: string;
  name: string;
  description: string;
  earning: string;
  difficulty: 'Beginner' | 'Gemiddeld';
  timeToStart: string;
  color: string;
  icon: string;
  benefits: string[];
  steps: { title: string; description: string }[];
  idealFor: string[];
  notFor: string[];
}

export const models: Model[] = [
  {
    slug: 'dropshipping',
    name: 'Dropshipping',
    description: 'Verkoop producten zonder voorraad',
    earning: '€500 - €5.000/mnd',
    difficulty: 'Beginner',
    timeToStart: '1-2 weken',
    color: 'from-emerald-500 to-teal-400',
    icon: '📦',
    benefits: [
      'Geen voorraad nodig — producten worden direct verzonden',
      'Laag startkapitaal — begin met minder dan €100',
      'Werk vanuit huis op je eigen tempo',
    ],
    steps: [
      { title: 'Kies je niche', description: 'Vind een winstgevend productcategorie met bewezen vraag.' },
      { title: 'Bouw je webshop', description: 'Zet een professionele Shopify winkel op in één dag.' },
      { title: 'Lanceer & verkoop', description: 'Start met adverteren en ontvang je eerste bestellingen.' },
    ],
    idealFor: ['Beginners zonder ervaring', 'Mensen die snel willen starten', 'Ondernemers met beperkt budget'],
    notFor: ['Wie niet van online marketing houdt', 'Wie direct hoge marges verwacht'],
  },
  {
    slug: 'smma',
    name: 'SMMA',
    description: 'Social Media Marketing Agency',
    earning: '€2.000 - €10.000/mnd',
    difficulty: 'Gemiddeld',
    timeToStart: '2-4 weken',
    color: 'from-blue-500 to-cyan-400',
    icon: '📱',
    benefits: [
      'Hoge marges — bijna geen kosten',
      'Schaalbaar — neem meer klanten aan',
      'Bedrijven hebben altijd social media nodig',
    ],
    steps: [
      { title: 'Leer de basis', description: 'Begrijp social media strategie en advertenties.' },
      { title: 'Vind je eerste klant', description: 'Benader lokale bedrijven met een onweerstaanbaar aanbod.' },
      { title: 'Lever resultaat', description: 'Laat zien dat je waarde toevoegt en groei door referrals.' },
    ],
    idealFor: ['Mensen die goed zijn met social media', 'Communicatieve ondernemers', 'Wie graag met bedrijven werkt'],
    notFor: ['Wie niet van klantcontact houdt', 'Wie geen geduld heeft voor leerproces'],
  },
  {
    slug: 'ugc-content',
    name: 'UGC Content',
    description: 'Betaald voor korte video\'s',
    earning: '€50 - €500/video',
    difficulty: 'Beginner',
    timeToStart: '1 week',
    color: 'from-pink-500 to-rose-400',
    icon: '🎬',
    benefits: [
      'Geen groot volgersaantal nodig',
      'Merken betalen goed voor authentieke content',
      'Creatief en flexibel werk',
    ],
    steps: [
      { title: 'Bouw je portfolio', description: 'Maak 3-5 voorbeeldvideo\'s voor fictieve merken.' },
      { title: 'Benader merken', description: 'Stuur je portfolio naar bedrijven die UGC zoeken.' },
      { title: 'Lever & herhaal', description: 'Maak content, ontvang betaling, bouw relaties op.' },
    ],
    idealFor: ['Creatieve mensen', 'Comfortabel voor de camera', 'Wie flexibel wil werken'],
    notFor: ['Wie camera-schuw is', 'Wie geen creatieve aanleg heeft'],
  },
  {
    slug: 'high-ticket-sales',
    name: 'High Ticket Sales',
    description: 'Sluit dure deals via Zoom',
    earning: '€3.000 - €15.000/mnd',
    difficulty: 'Gemiddeld',
    timeToStart: '2-3 weken',
    color: 'from-amber-500 to-yellow-400',
    icon: '💰',
    benefits: [
      'Hoge commissies per deal',
      'Werk volledig remote via Zoom',
      'Ontwikkel waardevolle salesvaardigheden',
    ],
    steps: [
      { title: 'Leer high ticket sellen', description: 'Begrijp de psychologie achter dure aankopen.' },
      { title: 'Vind een offer owner', description: 'Werk samen met iemand die een premium product verkoopt.' },
      { title: 'Sluit deals', description: 'Voer salesgesprekken en verdien commissie per close.' },
    ],
    idealFor: ['Overtuigende sprekers', 'Resultaatgerichte mensen', 'Wie hoge inkomens nastreeft'],
    notFor: ['Wie niet van bellen houdt', 'Introvert zonder ambitie om te groeien'],
  },
  {
    slug: 'info-operator',
    name: 'IPO Info Operator',
    description: 'Informatieproducten & diensten',
    earning: '€1.500 - €10.000/mnd',
    difficulty: 'Gemiddeld',
    timeToStart: '3-4 weken',
    color: 'from-violet-500 to-purple-400',
    icon: '🧠',
    benefits: [
      'Schaalbaar digitaal business model',
      'Eenmaal bouwen, herhaaldelijk verkopen',
      'Positioneer jezelf als expert',
    ],
    steps: [
      { title: 'Kies je expertise', description: 'Bepaal waarin je kennis of ervaring hebt.' },
      { title: 'Bouw je aanbod', description: 'Creëer een cursus, coaching of digitaal product.' },
      { title: 'Verkoop & schaal', description: 'Gebruik funnels en ads om klanten aan te trekken.' },
    ],
    idealFor: ['Mensen met specifieke kennis', 'Wie graag lesgeeft', 'Langetermijndenkers'],
    notFor: ['Wie geen expertise heeft om te delen', 'Wie snel geld wil zonder investering'],
  },
  {
    slug: 'webdesign',
    name: 'Webdesign',
    description: 'Websites bouwen met Framer/Webflow',
    earning: '€1.500 - €8.000/project',
    difficulty: 'Gemiddeld',
    timeToStart: '2-4 weken',
    color: 'from-cyan-500 to-blue-400',
    icon: '🎨',
    benefits: [
      'Hoge projectprijzen mogelijk',
      'No-code tools maken het toegankelijk',
      'Elk bedrijf heeft een website nodig',
    ],
    steps: [
      { title: 'Leer Framer/Webflow', description: 'Beheers een modern no-code platform.' },
      { title: 'Bouw een portfolio', description: 'Maak 3 indrukwekkende demo-websites.' },
      { title: 'Vind klanten', description: 'Benader bedrijven met verouderde websites.' },
    ],
    idealFor: ['Visueel ingestelde mensen', 'Wie van design houdt', 'Detail-georiënteerde werkers'],
    notFor: ['Wie geen oog voor design heeft', 'Wie niet van klantwerk houdt'],
  },
  {
    slug: 'digitale-producten',
    name: 'Digitale Producten',
    description: 'E-books, cursussen, gidsen',
    earning: '€2.000 - €20.000/mnd',
    difficulty: 'Gemiddeld',
    timeToStart: '2-6 weken',
    color: 'from-emerald-400 to-green-400',
    icon: '📚',
    benefits: [
      'Passief inkomen — verkoop terwijl je slaapt',
      'Geen voorraad of verzending',
      'Onbeperkt schaalbaar',
    ],
    steps: [
      { title: 'Kies je onderwerp', description: 'Vind een probleem dat mensen willen oplossen.' },
      { title: 'Maak je product', description: 'Schrijf een e-book, bouw een cursus, of maak templates.' },
      { title: 'Zet je funnel op', description: 'Automatiseer verkoop met landingspagina\'s en e-mail.' },
    ],
    idealFor: ['Contentmakers', 'Experts in een vakgebied', 'Wie passief inkomen wil'],
    notFor: ['Wie niet kan schrijven of presenteren', 'Wie instant resultaat verwacht'],
  },
  {
    slug: 'appointment-setting',
    name: 'Appointment Setting',
    description: 'Verkoopgesprekken boeken',
    earning: '€100 - €500/afspraak',
    difficulty: 'Beginner',
    timeToStart: '1 week',
    color: 'from-orange-500 to-amber-400',
    icon: '📅',
    benefits: [
      'Snel eerste inkomen mogelijk',
      'Geen technische skills nodig',
      'Leer waardevolle communicatievaardigheden',
    ],
    steps: [
      { title: 'Vind een opdrachtgever', description: 'Werk samen met een coach of agency die leads nodig heeft.' },
      { title: 'Leer het script', description: 'Beheers de outreach en kwalificatie technieken.' },
      { title: 'Boek afspraken', description: 'Bereik prospects en plan gekwalificeerde calls in.' },
    ],
    idealFor: ['Communicatieve starters', 'Wie snel wil beginnen', 'Mensen die van structuur houden'],
    notFor: ['Wie niet van bellen/DM\'en houdt', 'Wie zelfstandig een bedrijf wil runnen'],
  },
  {
    slug: 'social-media-manager',
    name: 'Social Media Manager',
    description: 'Content plannen & beheren',
    earning: '€800 - €3.000/klant/mnd',
    difficulty: 'Beginner',
    timeToStart: '1-2 weken',
    color: 'from-fuchsia-500 to-pink-400',
    icon: '📲',
    benefits: [
      'Terugkerend maandelijks inkomen',
      'Creatief en afwisselend werk',
      'Groeiende vraag naar social media hulp',
    ],
    steps: [
      { title: 'Bouw je skills', description: 'Leer content creatie, planning en analytics.' },
      { title: 'Start met 1 klant', description: 'Bied een gratis proefmaand aan een lokaal bedrijf.' },
      { title: 'Groei je portfolio', description: 'Gebruik resultaten om meer klanten aan te trekken.' },
    ],
    idealFor: ['Social media enthousiastelingen', 'Organisatorische mensen', 'Creatieve starters'],
    notFor: ['Wie social media haat', 'Wie geen consistentie kan bieden'],
  },
  {
    slug: 'belasting-academy',
    name: 'Belasting Academy',
    description: 'Belastingen optimaliseren',
    earning: 'Variabel',
    difficulty: 'Beginner' as const,
    timeToStart: '1-2 weken',
    color: 'from-slate-400 to-gray-400',
    icon: '🏛️',
    benefits: [
      'Bespaar duizenden euro\'s per jaar',
      'Kennis die je levenslang gebruikt',
      'Essentieel voor elke ondernemer',
    ],
    steps: [
      { title: 'Leer de basics', description: 'Begrijp hoe het Nederlands belastingstelsel werkt.' },
      { title: 'Optimaliseer je situatie', description: 'Pas aftrekposten en regelingen toe op jouw situatie.' },
      { title: 'Automatiseer', description: 'Zet systemen op zodat je altijd optimaal betaalt.' },
    ],
    idealFor: ['Elke ondernemer', 'Freelancers en ZZP\'ers', 'Wie belasting wil besparen'],
    notFor: ['Wie al een ervaren boekhouder heeft', 'Wie geen eigen inkomen genereert'],
  },
];

export const testimonials = [
  {
    name: 'Sjoerd Broeders',
    model: 'E-commerce',
    result: 'Eerste 4 sales op één dag',
    text: 'Na de training van HIBOO had ik op mijn eerste dag al 4 verkopen. De stap-voor-stap aanpak werkt echt.',
  },
  {
    name: 'Imanuel Mensah',
    model: 'Appointment Setting',
    result: 'Eerste high-ticket klant',
    text: 'Dankzij de sales training van HIBOO kon ik mijn eerste high-ticket klant binnenhalen.',
  },
  {
    name: 'Isa Noa Roode',
    model: 'Appointment Setting',
    result: 'Eerste klantgesprek geboekt',
    text: 'Binnen een week had ik mijn eerste gekwalificeerde gesprek ingepland. De scripts en begeleiding zijn top.',
  },
  {
    name: 'Demi Steentjec',
    model: 'Appointment Setting',
    result: '€9.080 gesloten',
    text: 'Mijn grootste deal tot nu toe: €9.080 gesloten in één gesprek. HIBOO heeft me geleerd hoe.',
  },
  {
    name: 'Yvette',
    model: 'Appointment Setting',
    result: 'Eerste klant binnengehaald',
    text: 'Als complete beginner had ik nooit gedacht zo snel mijn eerste klant te vinden. HIBOO maakt het mogelijk.',
  },
  {
    name: 'Fenna van der Burgt',
    model: 'E-commerce',
    result: 'Eerste online verkoop',
    text: 'Van nul ervaring naar mijn eerste online verkoop. De community en begeleiding van HIBOO zijn onmisbaar.',
  },
];

export const CALENDLY_URL = 'https://calendly.com/hiboo-nl/kickstart-igo';
