import productCereal from "@/assets/product-cereal.jpg";
import productPorridge from "@/assets/product-porridge.jpg";
import productMaize from "@/assets/product-maize.jpg";
import productSoy from "@/assets/product-soy.jpg";
import productTvp from "@/assets/product-tvp.jpg";

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
  category: "cereal" | "porridge" | "flour" | "protein";
  type: "retail" | "bulk" | "both";
  pricing: PricingOption[];
  image: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "super-cereal-plus",
    name: "Super Cereal Plus (CSB+)",
    shortName: "Super Cereal Plus",
    description: "A fortified maize and soya blend developed to support child nutrition and recovery from malnutrition. Ideal for feeding schemes, NGOs, and institutional use. This nutritionally enhanced cereal provides essential vitamins and minerals needed for healthy growth and development.",
    shortDescription: "Fortified maize & soya blend for child nutrition support",
    benefits: [
      "High protein content",
      "Fortified with essential vitamins & minerals",
      "Easy to prepare",
      "Suitable for children and adults"
    ],
    ingredients: "Maize, soy, vitamin & mineral premix",
    intendedUse: "School feeding schemes, NGOs, community kitchens",
    category: "cereal",
    type: "both",
    pricing: [
      { size: "5kg", price: 120 },
      { size: "10kg", price: 230 },
      { size: "25kg", price: 520 }
    ],
    image: productCereal,
    featured: true
  },
  {
    id: "vuma-instant-porridge",
    name: "Vuma Instant Porridge",
    shortName: "Vuma Porridge",
    description: "An instant, nutrient-dense porridge designed for fast preparation while delivering essential energy and nutrients. Perfect for busy mornings or institutional meal programs where time efficiency is crucial without compromising on nutrition.",
    shortDescription: "Instant nutrient-dense porridge for daily nutrition",
    benefits: [
      "Instant preparation",
      "Fortified for daily nutrition",
      "Affordable and filling",
      "Great taste"
    ],
    ingredients: "Maize, vitamins, minerals",
    intendedUse: "Daily breakfast, feeding programs, quick meals",
    category: "porridge",
    type: "both",
    pricing: [
      { size: "1kg", price: 45 },
      { size: "5kg", price: 210 },
      { size: "10kg", price: 395 }
    ],
    image: productPorridge,
    featured: true
  },
  {
    id: "fortified-maize-meal",
    name: "Fortified Maize Meal",
    shortName: "Fortified Maize",
    description: "A staple fortified maize meal suitable for households and institutional feeding, supporting balanced nutrition. This versatile product can be used to prepare traditional dishes while ensuring essential nutrient intake.",
    shortDescription: "Staple fortified maize meal for balanced nutrition",
    benefits: [
      "Versatile cooking options",
      "Fortified with vitamins",
      "Affordable staple food",
      "Long shelf life"
    ],
    ingredients: "Fortified maize, vitamin premix",
    intendedUse: "Household cooking, institutional catering",
    category: "flour",
    type: "both",
    pricing: [
      { size: "2.5kg", price: 55 },
      { size: "5kg", price: 100 },
      { size: "25kg", price: 460 }
    ],
    image: productMaize,
    featured: true
  },
  {
    id: "soy-flour",
    name: "Soy Flour",
    shortName: "Soy Flour",
    description: "High-protein soy flour ideal for baking, porridge blends, and nutrition programs. This versatile ingredient boosts the protein content of any meal and is an excellent plant-based protein source.",
    shortDescription: "High-protein soy flour for baking and nutrition",
    benefits: [
      "High protein content",
      "Plant-based nutrition",
      "Versatile ingredient",
      "Enhances meal nutrition"
    ],
    ingredients: "100% defatted soybeans",
    intendedUse: "Baking, porridge blends, nutrition programs",
    category: "flour",
    type: "both",
    pricing: [
      { size: "1kg", price: 60 },
      { size: "5kg", price: 280 },
      { size: "25kg", price: 1250 }
    ],
    image: productSoy,
    featured: true
  },
  {
    id: "textured-vegetable-protein",
    name: "Textured Vegetable Protein (TVP)",
    shortName: "TVP",
    description: "Plant-based protein alternative suitable for stews and bulk feeding programs. An economical and nutritious meat substitute that provides high-quality protein while being shelf-stable and easy to prepare.",
    shortDescription: "Plant-based protein for stews and feeding programs",
    benefits: [
      "High protein content",
      "Meat alternative",
      "Long shelf life",
      "Cost-effective"
    ],
    ingredients: "Defatted soy flour",
    intendedUse: "Stews, feeding programs, meat replacement",
    category: "protein",
    type: "both",
    pricing: [
      { size: "1kg", price: 75 },
      { size: "5kg", price: 350 },
      { size: "25kg", price: 1600 }
    ],
    image: productTvp,
    featured: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter(p => p.category === category);
};

export const formatPrice = (price: number): string => {
  return `R${price.toLocaleString()}`;
};
