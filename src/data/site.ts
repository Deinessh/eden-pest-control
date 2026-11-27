export const SITE = {
  name: "EDEN PEST CONTROL SERVICES",
  shortName: "EDEN",
  tagline: "SPECIALIST TERMITE CONTROL",
  subTagline: "Protecting Homes & Businesses from Pests",
  tamilMotto: "உங்கள் வீடு எங்கள் பாதுகாப்பு!",
  tamilMottoEn: "Your Home, Our Protection!",
  phoneDisplay: "+91 72999 79072",
  phoneRaw: "+917299979072",
  whatsappNumber: "917299979072",
  whatsappUrl:
    "https://wa.me/917299979072?text=Hello%20Eden%20Pest%20Control%20Services%2C%20I%20would%20like%20to%20book%20a%20pest%20control%20inspection.",
  hours: "Mon – Sun: 10:00 AM – 10:00 PM",
  hoursShort: "Mon–Sun (10AM – 10PM)",
  experience: "15+ Years",
  guarantee: "5+ Years",
  address:
    "11, Flat No. 4, Thirumalai Appan Street, Cholambedu Salai, Netaji Nagar, Thirumullaivoyal, Chennai, Tamil Nadu 600062",
  addressFull:
    "EDEN PEST CONTROL SERVICES, 11, Flat No. 4, Thirumalai Appan Street, Cholambedu Salai, Netaji Nagar, Thirumullaivoyal, Chennai, Tamil Nadu 600062",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=EDEN%20PEST%20CONTROL%20SERVICES,%2011,%20Flat%20No.%204,%20Thirumalai%20Appan%20Street,%20Cholambedu%20Salai,%20Netaji%20Nagar,%20Thirumullaivoyal,%20Chennai,%20Tamil%20Nadu%20600062&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapDirectUrl:
    "https://www.google.com/maps/search/?api=1&query=EDEN+PEST+CONTROL+SERVICES,+11,+Flat+No.+4,+Thirumalai+Appan+Street,+Cholambedu+Salai,+Netaji+Nagar,+Thirumullaivoyal,+Chennai,+Tamil+Nadu+600062",
};

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Contact", href: "/contact" },
];

export interface PestService {
  id: string;
  slug: string;
  name: string;
  tamilName: string;
  category: "Specialized" | "Residential & Commercial";
  badge?: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  methods: string[];
  warranty: string;
  safeFor: string;
}

export const SERVICES: PestService[] = [
  {
    id: "termite",
    slug: "termite-control",
    name: "Termite Control (ATT)",
    tamilName: "கரையான் கட்டுப்பாடு",
    category: "Specialized",
    badge: "5+ Years Guarantee",
    image: "/images/Termite Control (ATT).png",
    shortDesc:
      "Pre-construction & post-construction anti-termite barrier treatments to safeguard wooden furniture, doors, and building foundations.",
    fullDesc:
      "As Chennai's Specialist Termite Control experts, we use precision Drill-Fill-Seal chemical barrier technology and soil injection to eliminate subterranean and drywood termites at the colony level without damaging your interiors.",
    methods: [
      "Drill-Fill-Seal perimeter & wall-floor junction barrier",
      "Pre-construction soil & foundation treatment",
      "Wood & furniture protective infusion",
      "Odorless, government-approved termiticides",
    ],
    warranty: "5+ Years Written Guarantee",
    safeFor: "Homes, Villas, Apartments & Commercial Buildings",
  },
  {
    id: "cockroach",
    slug: "cockroach-control",
    name: "Cockroach Control",
    tamilName: "கரப்பான் பூச்சி கட்டுப்பாடு",
    category: "Residential & Commercial",
    badge: "Odorless Gel",
    image: "/images/Cockroach Control.png",
    shortDesc:
      "Targeted herbal gel baiting and crevice treatment for kitchens, drains, pantries, and commercial food areas.",
    fullDesc:
      "Our multi-stage cockroach eradication combines precision gel baiting in cabinets and appliances with safe residual sprays in drainage lines — zero kitchen emptying required and completely safe for families.",
    methods: [
      "Odorless gel baiting in hinges, cabinets & appliances",
      "Drain & sink pipeline flushing treatment",
      "Crack and crevice residual barrier",
      "Follow-up inspection for complete colony control",
    ],
    warranty: "Long-Lasting Protection Plan",
    safeFor: "Kitchens, Restaurants, Bakeries & Apartments",
  },
  {
    id: "rodent",
    slug: "rodent-control",
    name: "Rodent & Rat Control",
    tamilName: "எலி கட்டுப்பாடு",
    category: "Residential & Commercial",
    badge: "Tamper-Proof",
    image: "/images/rodent control.png",
    shortDesc:
      "Safe bait stations, humane trapping, and entry-point sealing to protect wiring, inventory, and hygiene.",
    fullDesc:
      "Rats and mice damage electrical wiring, contaminate food, and spread disease. We map rodent runways, deploy locked tamper-resistant bait stations, and advise on structural proofing to stop re-entry.",
    methods: [
      "Tamper-resistant exterior & interior bait stations",
      "Non-toxic glue boards & mechanical traps",
      "Burrow & entry-point inspection",
      "Warehouse & false-ceiling protection",
    ],
    warranty: "AMC & One-Time Plans",
    safeFor: "Warehouses, Homes, Offices & Retail",
  },
  {
    id: "ant",
    slug: "ant-control",
    name: "Ant Control",
    tamilName: "எறும்பு கட்டுப்பாடு",
    category: "Residential & Commercial",
    badge: "Colony Source Kill",
    image: "/images/ant control.png",
    shortDesc:
      "Colony-eliminating baiting and perimeter barrier treatment to stop red ants, black ants, and carpenter ants.",
    fullDesc:
      "Surface sprays only scatter ant trails. We use targeted colony-transfer baits and exterior perimeter barriers that eliminate the nest at its source.",
    methods: [
      "Colony-transfer sweet & protein gel baits",
      "Window sill & wall-crack barrier treatment",
      "Garden & courtyard nest drenching",
      "Child & pet-friendly indoor application",
    ],
    warranty: "Long-Lasting Relief",
    safeFor: "Homes, Kitchens, Offices & Play Areas",
  },
  {
    id: "lizard-spider",
    slug: "lizard-spider-control",
    name: "Lizard & Spider Control",
    tamilName: "பல்லி & சிலந்தி கட்டுப்பாடு",
    category: "Residential & Commercial",
    badge: "Safe Repellent",
    image: "/images/Lizard & Spider Control.png",
    shortDesc:
      "Eco-friendly repellent spray and cobweb clearing for ceilings, balconies, garages, and commercial halls.",
    fullDesc:
      "Keep walls, lights, and ceilings spotless with our safe botanical & residual repellent treatment that deters lizards and clears spider webs while cutting off their insect food supply.",
    methods: [
      "Cobweb removal & ceiling corner treatment",
      "Botanical & safe repellent around light fixtures",
      "Window, ventilator & balcony perimeter shield",
      "Combined insect-prey reduction",
    ],
    warranty: "Seasonal Maintenance Available",
    safeFor: "Apartments, Showrooms, Offices & Factories",
  },
  {
    id: "bedbug",
    slug: "bed-bug-control",
    name: "Bed Bug Treatment",
    tamilName: "மூட்டைப் பூச்சி கட்டுப்பாடு",
    category: "Specialized",
    badge: "Deep Eradication",
    image: "/images/bedbug-service.jpg",
    shortDesc:
      "Thorough mattress, sofa, bed-frame, and crevice treatment eliminating adults, nymphs, and hidden eggs.",
    fullDesc:
      "Bed bugs hide deep inside mattress seams, wooden cots, and wall cracks. Our two-round precision treatment targets every life stage so you can sleep peacefully again.",
    methods: [
      "High-precision seam & tufting treatment",
      "Bed frame, headboard & upholstery coverage",
      "Scheduled 14-day follow-up to break egg cycles",
      "Low-odor, skin-safe formulation after drying",
    ],
    warranty: "Guaranteed 2-Visit Eradication",
    safeFor: "Bedrooms, Hostels, Hotels & Guest Houses",
  },
  {
    id: "mosquito",
    slug: "mosquito-control",
    name: "Mosquito Control",
    tamilName: "கொசு கட்டுப்பாடு",
    category: "Residential & Commercial",
    badge: "Dengue & Malaria Shield",
    image: "/images/mosquito-service.jpg",
    shortDesc:
      "Thermal fogging, ULV misting, and larvicidal treatments for compounds, gardens, apartments, and water stagnation zones.",
    fullDesc:
      "Protect your family and employees from vector-borne diseases with our dual-action adulticide fogging and breeding-source larvicide program tailored for Chennai's coastal climate.",
    methods: [
      "Thermal & cold ULV fogging for outdoor perimeters",
      "Larvicidal treatment for drains & stagnant water",
      "Indoor residual wall resting-zone spray",
      "Scheduled community & villa coverage",
    ],
    warranty: "Monthly / Seasonal Coverage",
    safeFor: "Gated Communities, Villas, Schools & Parks",
  },
];

export const TRUST_PILLARS = [
  {
    title: "5+ Years Termite Guarantee",
    tamil: "5+ ஆண்டுகள் உத்தரவாதம்",
    desc: "Backed by our written service warranty for long-lasting structural protection.",
  },
  {
    title: "15+ Years Experience",
    tamil: "15+ ஆண்டுகள் அனுபவம்",
    desc: "Proven expertise across thousands of homes, apartments, and businesses in Chennai.",
  },
  {
    title: "Safe for Kids & Pets",
    tamil: "குழந்தைகள் & செல்லப்பிராணிகளுக்கு பாதுகாப்பு",
    desc: "Government-approved, low-odor eco-friendly formulations applied with strict safety protocols.",
  },
  {
    title: "Open Mon – Sun (10AM – 10PM)",
    tamil: "திங்கள் – ஞாயிறு (10AM – 10PM)",
    desc: "Flexible scheduling all 7 days a week, including weekends and urgent inspections.",
  },
];

export const SERVICE_AREAS = [
  "Thirumullaivoyal",
  "Ambattur",
  "Avadi",
  "Padi",
  "Mogappair",
  "Anna Nagar",
  "Korattur",
  "Villivakkam",
  "Kolathur",
  "Red Hills",
  "Porur",
  "Poonamallee",
  "Madhavaram",
  "Greater Chennai & Nearby Areas",
];
