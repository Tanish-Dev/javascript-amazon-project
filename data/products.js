import formatcurrency from "../scripts/utils/money.js";

// Function to normalize ratings to 0.5 increments
function normalizeRating(rating) {
  // Round to nearest 0.5
  return Math.round(rating * 2) / 2;
}

export function getProduct(productsId) {
  if (!productsId) {
    console.error("Invalid product ID requested");
    return null;
  }

  let matchingitem;

  try {
    products.forEach((product) => {
      if (product.id === productsId) {
        matchingitem = product;
      }
    });

    if (!matchingitem) {
      console.error(`Product not found with ID: ${productsId}`);
    }
  } catch (error) {
    console.error(`Error finding product with ID: ${productsId}`, error);
  }

  return matchingitem;
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;
  keywords;
  constructor(productdetails) {
    this.id = productdetails.id;
    this.image = productdetails.image;
    this.name = productdetails.name;
    // Normalize rating to 0.5 increments
    this.rating = {
      stars: normalizeRating(productdetails.rating.stars),
      count: productdetails.rating.count,
    };
    this.priceCents = productdetails.priceCents;
    this.keywords = productdetails.keywords;
  }

  getStarsUrl() {
    `images/ratings/rating-${this.rating.stars * 10}.png`;
  }
  getPrice() {
    return `$${formatcurrency(this.priceCents)}`;
  }
}

const product1 = new Product({
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  image: "images/products/athletic-cotton-socks-6-pairs.jpg",
  name: "TnsH Signature Monochrome Athletic Socks - Limited 6 Pack Collection",
  rating: {
    stars: 4.5,
    count: 87,
  },
  priceCents: 1090,
  keywords: ["socks", "sports", "apparel"],
});
console.log(product1);

// Featured products using premium high-quality lifestyle imagery
export const products = [
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    name: "Premium Woven Cotton Shirt - Signature Series",
    rating: {
      stars: 4.5,
      count: 363,
    },
    priceCents: 6499,
    keywords: ["shirt", "button-down", "apparel", "mens", "fashion"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    name: "Minimalist Chronograph - Heritage Collection",
    rating: {
      stars: 4.7,
      count: 193,
    },
    priceCents: 12110,
    keywords: ["watch", "leather", "accessories", "unisex", "fashion"],
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/knit-athletic-sneakers-pink.webp",
    name: "Agility Performance Knit Trainers - Blush Pink",
    rating: {
      stars: 4,
      count: 89,
    },
    priceCents: 3390,
    keywords: ["shoes", "running shoes", "footwear", "womens"],
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&auto=format&fit=crop&w=770&q=80",
    name: "Cashmere Blend Oversized Scarf - Winter Luxe Collection",
    rating: {
      stars: 4.8,
      count: 312,
    },
    priceCents: 10747,
    keywords: [
      "scarf",
      "cashmere",
      "winter",
      "accessories",
      "womens",
      "fashion",
    ],
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=770&q=80",
    name: "TnsH Satin Finish Evening Clutch - Noir Collection",
    rating: {
      stars: 5,
      count: 679,
    },
    priceCents: 3899,
    keywords: ["bags", "clutch", "evening", "accessories", "womens", "fashion"],
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image:
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-1.2.1&auto=format&fit=crop&w=770&q=80",
    name: "Woven Straw Tote Bag - Summer Essential Collection",
    rating: {
      stars: 4.5,
      count: 1045,
    },
    priceCents: 5799,
    keywords: [
      "bags",
      "tote",
      "summer",
      "beach",
      "accessories",
      "womens",
      "fashion",
    ],
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Alpine Comfort Full-Zip Hoodie - Ruby Red Edition",
    rating: {
      stars: 4.5,
      count: 3157,
    },
    priceCents: 2400,
    keywords: ["sweaters", "hoodies", "apparel", "mens"],
  },
  {
    id: "f0f8c2b4-6ac0-4a37-9b45-d5a165a1a92c",
    image:
      "https://images.unsplash.com/photo-1542295669297-4d352b042bca?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    name: "TnsH Oversized Linen Button-Up Shirt - Ivory Collection",
    rating: {
      stars: 4.8,
      count: 423,
    },
    priceCents: 4999,
    keywords: ["shirts", "linen", "apparel", "womens"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "e9c5d6b2-0134-4c39-9352-5186c0e5d370",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80",
    name: "Signature Pleated Midi Skirt - Ivory White",
    rating: {
      stars: 4.7,
      count: 289,
    },
    priceCents: 6999,
    keywords: ["skirts", "womens", "apparel", "fashion"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "d4b8c5a7-9f30-42eb-8d47-41f2b8a74839",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
    name: "TnsH Premium Leather Biker Jacket - Vintage Black",
    rating: {
      stars: 4.9,
      count: 352,
    },
    priceCents: 19999,
    keywords: ["jackets", "leather", "outerwear", "apparel", "mens"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "b7a9c4e2-3d56-48f1-90c8-76d2e5a91f83",
    image:
      "https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=770&q=80",
    name: "Designer Tortoise Shell Sunglasses - Urban Collection",
    rating: {
      stars: 4.6,
      count: 178,
    },
    priceCents: 5999,
    keywords: ["sunglasses", "accessories", "eyewear", "fashion"],
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image:
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    name: "Premium Athletic Collection - Set of 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
    keywords: ["socks", "sports", "apparel"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    name: "Professional Indoor/Outdoor Basketball",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image:
      "https://images.unsplash.com/photo-1512327428889-607eeb19efe8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    name: "Pure Cotton Essential Tees - Premium 2-Pack",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
    keywords: ["tshirts", "apparel", "mens"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "TnsH Home Collection Matte Black Toaster - Designer Series",
    rating: {
      stars: 5,
      count: 2197,
    },
    priceCents: 1899,
    keywords: ["toaster", "kitchen", "appliances"],
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "TnsH Home Minimalist Porcelain Dining Set - Winter White Collection",
    rating: {
      stars: 4,
      count: 37,
    },
    priceCents: 2067,
    keywords: ["plates", "kitchen", "dining"],
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "Culinary Elite Carbon Steel Bakeware Collection - Artisanal 6 Piece Set",
    rating: {
      stars: 4.5,
      count: 175,
    },
    priceCents: 3499,
    keywords: ["kitchen", "cookware"],
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Sunshine Organic Cotton Hoodie - Heritage Collection",
    rating: {
      stars: 4.5,
      count: 317,
    },
    priceCents: 2400,
    keywords: ["hoodies", "sweaters", "apparel"],
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Serene Spa Turkish Cotton Towel Collection - Graphite Grey",
    rating: {
      stars: 4.5,
      count: 144,
    },
    priceCents: 3599,
    keywords: ["bathroom", "washroom", "restroom", "towels", "bath towels"],
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "TnsH Living Botanical Laundry Cleanser - Garment Protection Formula",
    rating: {
      stars: 4.5,
      count: 305,
    },
    priceCents: 2899,
    keywords: ["bathroom", "cleaning"],
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Cloud Step Performance Knit Trainers - Slate Grey Edition",
    rating: {
      stars: 4,
      count: 89,
    },
    priceCents: 3390,
    keywords: ["shoes", "running shoes", "footwear"],
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Ethereal Silk Chiffon Resort Coverup - Midnight Black",
    rating: {
      stars: 4.5,
      count: 235,
    },
    priceCents: 2070,
    keywords: ["robe", "swimsuit", "swimming", "bathing", "apparel"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/round-sunglasses-black.jpg",
    name: "Urbane Circular Polarized Sunglasses - Onyx Collection",
    rating: {
      stars: 4.5,
      count: 30,
    },
    priceCents: 1560,
    keywords: ["accessories", "shades"],
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/women-beach-sandals.jpg",
    name: "Mediterranean Leather Strap Sandals - Caramel Tan",
    rating: {
      stars: 4.5,
      count: 562,
    },
    priceCents: 2499,
    keywords: ["footwear", "sandals", "womens", "beach", "summer"],
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/blackout-curtain-set-beige.webp",
    name: "TnsH Living Privacy Drapes - Champagne Beige Collection",
    rating: {
      stars: 4.5,
      count: 232,
    },
    priceCents: 4599,
    keywords: ["bedroom", "curtains", "home"],
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/men-slim-fit-summer-shorts-gray.jpg",
    name: "Modern Tailored Stretch Cotton Shorts - Charcoal",
    rating: {
      stars: 4,
      count: 160,
    },
    priceCents: 1699,
    keywords: ["shorts", "apparel", "mens"],
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Architect Series Glass & Brushed Steel Electric Kettle",
    rating: {
      stars: 5,
      count: 846,
    },
    priceCents: 3074,
    keywords: ["water boiler", "appliances", "kitchen"],
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/facial-tissue-2-ply-18-boxes.jpg",
    name: "TnsH Home Aloe-Infused Facial Tissues - Premium Collection",
    rating: {
      stars: 4,
      count: 99,
    },
    priceCents: 2374,
    keywords: ["kleenex", "tissues", "kitchen", "tissues box", "napkins"],
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/straw-sunhat.webp",
    name: "Artisanal Hand-Woven Resort Sun Hat - Natural Collection",
    rating: {
      stars: 4,
      count: 215,
    },
    priceCents: 2200,
    keywords: ["hats", "straw hats", "summer", "apparel"],
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/sky-flower-stud-earrings.webp",
    name: "TnsH Jewelry Celestial Blossom Sterling Silver Earrings",
    rating: {
      stars: 4.5,
      count: 52,
    },
    priceCents: 1799,
    keywords: ["jewelry", "accessories", "womens"],
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/women-stretch-popover-hoodie-black.jpg",
    name: "Luxe Comfort Popover Hoodie - Obsidian Black",
    rating: {
      stars: 4.5,
      count: 2465,
    },
    priceCents: 1374,
    keywords: ["hooded", "hoodies", "sweaters", "womens", "apparel"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/bathroom-rug.jpg",
    name: "Plush Microfiber Spa Bath Mat - Fog Grey",
    rating: {
      stars: 4.5,
      count: 119,
    },
    priceCents: 1250,
    keywords: ["bathmat", "bathroom", "home"],
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/women-knit-ballet-flat-black.jpg",
    name: "Parisian Comfort Knit Ballet Flats - Noir Edition",
    rating: {
      stars: 4,
      count: 326,
    },
    priceCents: 2640,
    keywords: ["shoes", "flats", "womens", "footwear"],
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/men-golf-polo-t-shirt-blue.jpg",
    name: "Executive Performance Quick-Dry Polo - Ocean Blue",
    rating: {
      stars: 4.5,
      count: 2556,
    },
    priceCents: 1599,
    keywords: ["tshirts", "shirts", "apparel", "mens"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
    name: "TnsH Home Brushed Steel Pedal Waste Bin - Designer Series",
    rating: {
      stars: 4.5,
      count: 2286,
    },
    priceCents: 8300,
    keywords: ["garbage", "bins", "cans", "kitchen"],
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/duvet-cover-set-blue-twin.jpg",
    name: "Coastal Blue Egyptian Cotton Duvet Set - Signature Collection",
    rating: {
      stars: 4,
      count: 456,
    },
    priceCents: 2399,
    keywords: ["bedroom", "bed sheets", "sheets", "covers", "home"],
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/women-chunky-beanie-gray.webp",
    name: "Nordic Cable Knit Merino Wool Beanie - Heather Grey",
    rating: {
      stars: 5,
      count: 83,
    },
    priceCents: 1250,
    keywords: ["hats", "winter hats", "beanies", "tuques", "apparel", "womens"],
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/men-chino-pants-beige.jpg",
    name: "Heritage Cotton Pleated Chinos - Sand Collection",
    rating: {
      stars: 4.5,
      count: 9017,
    },
    priceCents: 2290,
    keywords: ["pants", "apparel", "mens"],
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/men-athletic-shoes-green.jpg",
    name: "Alpine Performance Athletic Sneakers - Forest Green",
    rating: {
      stars: 4,
      count: 229,
    },
    priceCents: 3890,
    keywords: ["shoes", "running shoes", "footwear", "mens"],
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/men-navigator-sunglasses-brown.jpg",
    name: "Vintage Inspired Aviator Sunglasses - Amber Gradient",
    rating: {
      stars: 3.5,
      count: 42,
    },
    priceCents: 1690,
    keywords: ["sunglasses", "glasses", "accessories", "shades"],
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/non-stick-cooking-set-15-pieces.webp",
    name: "Professional Grade Non-Stick Culinary Collection - 15 Piece Set",
    rating: {
      stars: 4.5,
      count: 511,
    },
    priceCents: 6797,
    keywords: ["cooking set", "kitchen"],
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/vanity-mirror-silver.jpg",
    name: "TnsH Living Polished Chrome Vanity Mirror - Luxury Edition",
    rating: {
      stars: 4.5,
      count: 130,
    },
    priceCents: 1649,
    keywords: ["bathroom", "washroom", "mirrors", "home"],
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
    name: "Athleisure French Terry Jogger - Urban Camo Edition",
    rating: {
      stars: 4.5,
      count: 248,
    },
    priceCents: 2400,
    keywords: ["pants", "sweatpants", "jogging", "apparel", "womens"],
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Parisian Twisted Oval Drop Earrings - 18K Gold Vermeil",
    rating: {
      stars: 4.5,
      count: 117,
    },
    priceCents: 2400,
    keywords: ["accessories", "womens"],
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/round-airtight-food-storage-containers.jpg",
    name: "TnsH Home Hermetically Sealed Storage Collection - 5 Piece Set",
    rating: {
      stars: 4,
      count: 126,
    },
    priceCents: 2899,
    keywords: ["boxes", "food containers", "kitchen"],
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "Barista Series Glass Carafe Coffee Brewer - Matte Noir Edition",
    rating: {
      stars: 4.5,
      count: 1211,
    },
    priceCents: 2250,
    keywords: ["coffeemakers", "kitchen", "appliances"],
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/blackout-curtains-black.jpg",
    name: "TnsH Living Blackout Privacy Drapes - Onyx Collection",
    rating: {
      stars: 4.5,
      count: 363,
    },
    priceCents: 3099,
    keywords: ["bedroom", "home"],
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/cotton-bath-towels-teal.webp",
    name: "TnsH Living Premium Pima Cotton Bath Towels - Aegean Teal",
    rating: {
      stars: 4.5,
      count: 93,
    },
    priceCents: 2110,
    keywords: ["bathroom", "home", "towels"],
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/knit-athletic-sneakers-pink.webp",
    name: "Agility Performance Knit Trainers - Blush Pink",
    rating: {
      stars: 4,
      count: 89,
    },
    priceCents: 3390,
    keywords: ["shoes", "running shoes", "footwear", "womens"],
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/countertop-blender-64-oz.jpg",
    name: "TnsH Home Professional-Grade Culinary Blender - High-Power Series",
    rating: {
      stars: 4,
      count: 3,
    },
    priceCents: 10747,
    keywords: ["food blenders", "kitchen", "appliances"],
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/floral-mixing-bowl-set.jpg",
    name: "Botanical Garden Ceramic Mixing Collection - 10-Piece Set",
    rating: {
      stars: 5,
      count: 679,
    },
    priceCents: 3899,
    keywords: ["mixing bowls", "baking", "cookware", "kitchen"],
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/kitchen-paper-towels-30-pack.jpg",
    name: "TnsH Home Premium Absorbent Kitchen Towels - Eco Collection",
    rating: {
      stars: 4.5,
      count: 1045,
    },
    priceCents: 5799,
    keywords: ["kitchen", "kitchen towels", "tissues"],
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Alpine Comfort Full-Zip Hoodie - Ruby Red Edition",
    rating: {
      stars: 4.5,
      count: 3157,
    },
    priceCents: 2400,
    keywords: ["sweaters", "hoodies", "apparel", "mens"],
  },
].map((productDetails) => {
  return new Product(productDetails);
});

// Test to verify normalization is working
console.log("Rating normalization examples:");
console.log("4.1 -> ", normalizeRating(4.1)); // Should round to 4
console.log("4.2 -> ", normalizeRating(4.2)); // Should round to 4
console.log("4.3 -> ", normalizeRating(4.3)); // Should round to 4.5
console.log("4.7 -> ", normalizeRating(4.7)); // Should round to 4.5
console.log("4.8 -> ", normalizeRating(4.8)); // Should round to 5

console.log(products);
