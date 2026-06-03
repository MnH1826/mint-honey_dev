// ── Product images — copy all into src/assets/ ───────────────
import mnhMaizeMeal        from "@/assets/mnh_maize_meal.webp";
import mnhSoyaFlour        from "@/assets/mnh_soya_flour.webp";
import mnhSoyaMince_beef   from "@/assets/mnh_soya_mince_beef.webp";
import mnhSoyaMince_chicken from "@/assets/mnh_soya_mince_chicken.webp";
import mnhSoyaMince_oxtail from "@/assets/mnh_soya_mince_ox_tail.webp";
import mnhVuma             from "@/assets/mnh_vuma_instant_porrige.webp";
import mnhCornSoya         from "@/assets/mnh_corn_soya.webp";

export interface PricingOption {
  size: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  description: string;
  shortDescription: string;
  benefits: string[];
  ingredients: string;
  intendedUse: string;
  category: "cereal" | "porridge" | "flour" | "protein" | "soya";
  type: "retail" | "bulk" | "both";
  pricing: PricingOption[];
  image: string;
  featured: boolean;
  badges?: string[];   // e.g. ["Halaal", "Non-GMO", "Not for Resale"]
  weight?: string;     // primary / most common pack size label
}

export const products: Product[] = [
  // ── RETAIL ────────────────────────────────────────────────
  {
    id: "vuma-instant-porridge",
    name: "M&H Vuma Instant Porridge",
    shortName: "Vuma Instant Porridge",
    description:
      "A vanilla-flavoured instant porridge that nourishes growing bodies with 12 essential vitamins and minerals. Energy-rich, high in fibre and protein — a complete balanced meal that's easy to prepare and loved by kids and families alike.",
    shortDescription: "Vanilla-flavoured instant porridge — complete balanced meal",
    benefits: [
      "12 essential vitamins & minerals",
      "Energy-rich & high in fibre",
      "High in protein",
      "Easy to prepare — just add hot water",
      "Non-GMO certified",
      "Great taste kids love",
    ],
    ingredients: "Fortified maize, soya, vanilla flavouring, vitamin & mineral premix",
    intendedUse: "Daily breakfast, school feeding programmes, quick nutritious meals",
    category: "porridge",
    type: "retail",
    pricing: [
      { size: "75g",  price: 12  },
      { size: "1kg",  price: 55  },
      { size: "5kg",  price: 240 },
    ],
    image: mnhVuma,
    featured: true,
    badges: ["Non-GMO"],
    weight: "75g",
  },
  {
    id: "corn-soya-blend",
    name: "M&H Super Cereal — Corn Soya Blend (CSB++)",
    shortName: "Super Cereal (CSB++)",
    description:
      "A specially formulated Corn Soya Blend (CSB++) designed for infants and young children from 6 months and above. Fortified with essential vitamins and minerals to support healthy growth, development, and recovery from malnutrition. Supplied to NGOs and humanitarian organisations — not for retail resale.",
    shortDescription: "Fortified corn soya blend for infants & young children 6m+",
    benefits: [
      "Formulated for infants & young children 6m+",
      "Fortified with essential vitamins & minerals",
      "High in protein",
      "Supports growth & development",
      "WHO/WFP aligned CSB++ formula",
      "Suitable for humanitarian feeding programmes",
    ],
    ingredients: "Maize, soya, vitamin & mineral premix (CSB++ specification)",
    intendedUse: "NGO feeding programmes, humanitarian relief, ECD nutrition support",
    category: "cereal",
    type: "bulk",
    pricing: [
      { size: "1.5kg", price: 95  },
      { size: "25kg",  price: 980 },
    ],
    image: mnhCornSoya,
    featured: true,
    badges: ["Not for Resale", "NGO Supply"],
    weight: "1.5kg",
  },

  // ── BULK BAGS ─────────────────────────────────────────────
  {
    id: "maize-meal",
    name: "M&H Fortified Maize Meal",
    shortName: "Maize Meal",
    description:
      "An enriched and fortified maize meal of superior quality — natural, nutritious, and versatile. Boosted with vitamins and minerals, this staple is ideal for households, institutional catering, and large-scale feeding programmes. Halaal certified, non-GMO.",
    shortDescription: "Enriched & fortified maize meal — superior quality · natural",
    benefits: [
      "Enriched with vitamins & minerals",
      "Non-GMO certified",
      "Zero chemical additives",
      "Versatile — pap, porridge, baking",
      "Halaal certified",
      "Long shelf life",
    ],
    ingredients: "Fortified maize, vitamin & mineral premix",
    intendedUse: "Household cooking, institutional catering, school feeding, food manufacturers",
    category: "flour",
    type: "bulk",
    pricing: [
      { size: "5kg",  price: 95  },
      { size: "10kg", price: 180 },
      { size: "25kg", price: 420 },
    ],
    image: mnhMaizeMeal,
    featured: true,
    badges: ["Halaal", "Non-GMO"],
    weight: "25kg",
  },
  {
    id: "soya-flour",
    name: "M&H Soya Flour",
    shortName: "Soya Flour",
    description:
      "A high-protein, non-GMO  soya flour of superior quality. Plant-based and naturally rich in protein, this flour is a versatile ingredient for baking, porridge blending, and nutrition enrichment programmes. An excellent plant-based protein source for food manufacturers and institutional buyers.",
    shortDescription: "Non-GMO  soya flour — high protein · plant-based",
    benefits: [
      "improved digestibility",
      "Non-GMO certified",
      "Plant-based protein source",
      "Superior quality & natural",
      "Halaal certified",
      "Ideal for food manufacturers",
    ],
    ingredients: "100% non-GMO defatted soya beans",
    intendedUse: "Baking, porridge blending, food manufacturing, nutrition enrichment",
    category: "flour",
    type: "bulk",
    pricing: [
      { size: "5kg",  price: 175  },
      { size: "10kg", price: 330  },
      { size: "25kg", price: 760  },
    ],
    image: mnhSoyaFlour,
    featured: true,
    badges: ["Halaal", "Non-GMO"],
    weight: "25kg",
  },
  {
    id: "soya-mince-chicken",
    name: "M&H Soya Mince — Chicken Flavour",
    shortName: "Soya Mince (Chicken)",
    description:
      "A non-GMO chicken-flavoured soya mince of superior quality — plant-based, high in protein, and a great food source of soya. Versatile and economical, this product is ideal for feeding programmes, food manufacturers, and households looking for a nutritious, affordable protein alternative.",
    shortDescription: "Non-GMO chicken-flavoured soya mince — high protein · plant-based",
    benefits: [
      "Non-GMO certified",
      "High in protein",
      "Plant-based & meat-free",
      "Rich chicken flavour",
      "Halaal certified",
      "Cost-effective protein source",
    ],
    ingredients: "Non-GMO textured soya protein, chicken flavouring, seasoning",
    intendedUse: "Feeding programmes, food manufacturing, household meals, stews",
    category: "soya",
    type: "bulk",
    pricing: [
      { size: "1kg",  price: 85  },
      { size: "5kg",  price: 380 },
      { size: "10kg", price: 720 },
    ],
    image: mnhSoyaMince_chicken,
    featured: false,
    badges: ["Halaal", "Non-GMO"],
    weight: "10kg",
  },
  {
    id: "soya-mince-beef",
    name: "M&H Soya Mince — Beef Flavour",
    shortName: "Soya Mince (Beef)",
    description:
      "A non-GMO beef-flavoured soya mince of superior quality — plant-based, high in protein, and a great food source of soya. Rich, hearty beef flavour makes this an excellent and affordable substitute for minced meat in stews, bolognaise, and bulk feeding applications.",
    shortDescription: "Non-GMO beef-flavoured soya mince — high protein · plant-based",
    benefits: [
      "Non-GMO certified",
      "High in protein",
      "Plant-based & meat-free",
      "Hearty beef flavour",
      "Halaal certified",
      "Excellent meat substitute",
    ],
    ingredients: "Non-GMO textured soya protein, beef flavouring, seasoning",
    intendedUse: "Stews, feeding programmes, food manufacturing, meat substitute",
    category: "soya",
    type: "bulk",
    pricing: [
      { size: "1kg",  price: 85  },
      { size: "5kg",  price: 380 },
      { size: "10kg", price: 720 },
    ],
    image: mnhSoyaMince_beef,
    featured: false,
    badges: ["Halaal", "Non-GMO"],
    weight: "10kg",
  },
  {
    id: "soya-mince-oxtail",
    name: "M&H Soya Mince — Oxtail Flavour",
    shortName: "Soya Mince (Oxtail)",
    description:
      "A non-GMO oxtail-flavoured soya mince of superior quality — plant-based, high in protein, and rich in flavour. The bold oxtail seasoning makes this a satisfying, affordable protein for bulk cooking, institutional feeding, and everyday household meals.",
    shortDescription: "Non-GMO oxtail-flavoured soya mince — high protein · plant-based",
    benefits: [
      "Non-GMO certified",
      "High in protein",
      "Plant-based & meat-free",
      "Bold oxtail flavour",
      "Halaal certified",
      "Great for bulk cooking",
    ],
    ingredients: "Non-GMO textured soya protein, oxtail flavouring, seasoning",
    intendedUse: "Bulk cooking, feeding programmes, stews, household meals",
    category: "soya",
    type: "bulk",
    pricing: [
      { size: "1kg",  price: 85  },
      { size: "5kg",  price: 380 },
      { size: "10kg", price: 720 },
    ],
    image: mnhSoyaMince_oxtail,
    featured: false,
    badges: ["Halaal", "Non-GMO"],
    weight: "10kg",
  },
];

// ── Helpers ───────────────────────────────────────────────────
export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

export const getFeaturedProducts = (): Product[] =>
  products.filter((p) => p.featured);

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
};

export const formatPrice = (price: number): string =>
  `R${price.toLocaleString()}`;