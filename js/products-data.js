/* products-data.js — Products dataset for Keshuji Sweets */

const PRODUCTS = [
  // Signature Heritage
  {
    id: "peda-keshuji-special",
    name: "Peda (Keshuji Signature)",
    hindiName: "पेड़ा",
    category: "Signature Heritage",
    description: "Our legendary heirloom creation since 1965. Slow-cooked caramelized mawa fudge spiced with fragrant green cardamom and pure saffron strands.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/peda-keshuji-special.jpg",
    ingredients: "Pure Mawa, Organic Cane Sugar, Desi Ghee, Saffron, Green Cardamom"
  },
  {
    id: "moong-ki-barfi",
    name: "Moong Dal Barfi",
    hindiName: "मूंग की बर्फी",
    category: "Signature Heritage",
    description: "Rich golden roasted yellow lentil fudge prepared with pure desi ghee, khoya, and crunchy slivered pistachio and almonds.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/moong-ki-barfi.jpg",
    ingredients: "Moong Dal, Desi Ghee, Khoya, Raw Sugar, Pistachio, Cardamom"
  },
  {
    id: "rabri-ghevar",
    name: "Rabdi Ghevar",
    hindiName: "रबड़ी घेवर",
    category: "Signature Heritage",
    description: "Iconic Rajasthani golden honeycomb ghevar steeped in saffron syrup, crowned with slow-reduced malai rabdi and silver vark.",
    sizes: ["Single Piece", "500g Box", "1kg Box"],
    image: "assets/rabri-ghevar.jpg",
    ingredients: "Flour, Pure Desi Ghee, Reduced Rabdi Milk, Saffron, Green Cardamom, Silver Leaf"
  },
  {
    id: "plain-ghevar",
    name: "Plain / Mitha Ghevar",
    hindiName: "सादा घेवर",
    category: "Signature Heritage",
    description: "Crisp, porous honeycomb delicacy fried to perfection in pure cow ghee and delicately glazed with aromatic cardamom sugar nectar.",
    sizes: ["Single Piece", "500g Box", "1kg Box"],
    image: "assets/plain-ghevar-1.jpg",
    ingredients: "Wheat Flour, Pure Desi Ghee, Sugar Syrup, Saffron, Cardamom"
  },
  {
    id: "kalakand",
    name: "Kalakand",
    hindiName: "कलाकन्द",
    category: "Signature Heritage",
    description: "Traditional soft, granular milk cake gently simmered from farm-fresh full-cream milk and cottage cheese, finished with crushed pistachios.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/kalakand.jpg",
    ingredients: "Fresh Cow Milk, Chhena, Sugar, Pistachio, Cardamom"
  },

  // Royal Kaju
  {
    id: "kaju-anjeer-chakra",
    name: "Kaju Anjeer Chakra",
    hindiName: "काजू अंजीर चक्र",
    category: "Royal Kaju",
    description: "Intricate spiral pinwheel marrying silky Goan cashew marzipan with organic sun-dried Turkish figs and roasted almond slivers.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/kaju-anjeer-chakra.jpg",
    ingredients: "Selected Cashews, Premium Dried Figs, Honey, Pure Desi Ghee"
  },
  {
    id: "kaju-pista-roll",
    name: "Kaju Pista Roll",
    hindiName: "काजू पिस्ता रोल",
    category: "Royal Kaju",
    description: "Silky cashew sheet wrapped around an aromatic core of emerald Afghani pistachios, lightly flavored with cardamom.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/kaju-pista-roll.jpg",
    ingredients: "Cashews, Pistachios, Cardamom, Cane Sugar"
  },
  {
    id: "kaju-paan",
    name: "Kaju Paan",
    hindiName: "काजू पान",
    category: "Royal Kaju",
    description: "Artisan cashew dough folded in the form of royal betel leaves, stuffed with fragrant gulkand, fennel, and assorted roasted nut bits.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/kaju-paan.jpg",
    ingredients: "Cashews, Rose Petal Gulkand, Fennel, Cardamom, Assorted Nuts"
  },
  {
    id: "kaju-bite",
    name: "Kaju Bite",
    hindiName: "काजू बाइट",
    category: "Royal Kaju",
    description: "Crunchy toasted cashew cubes blended with honey, cocoa hints, and assorted dry fruits for a modern luxury indulgence.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/kaju-bite.jpg",
    ingredients: "Cashews, Almonds, Pistachio, Honey, Desi Ghee"
  },
  {
    id: "kaju-samosa",
    name: "Kaju Samosa",
    hindiName: "काजू समोसा",
    category: "Royal Kaju",
    description: "Mini triangular cashew confections filled with a delicate stuffing of crushed mawa, pistachios, and saffron.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/kaju-samosa.jpg",
    ingredients: "Cashews, Khoya, Saffron, Pistachio, Cardamom"
  },
  {
    id: "kaju-cassata",
    name: "Kaju Cassata",
    hindiName: "काजू कैसाटा",
    category: "Royal Kaju",
    description: "Multi-layered cashew slice layered with pistachio and almond marzipan, presenting a stunning pastel tri-color cross-section.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/kaju-cassata.jpg",
    ingredients: "Cashews, Pistachios, Almonds, Saffron, Sugar"
  },
  {
    id: "silver-vark-kaju-samosa",
    name: "Silver Vark Kaju Samosa",
    hindiName: "काजू समोसा वर्क",
    category: "Royal Kaju",
    description: "Our signature cashew samosas dressed in certified 100% vegetarian pure silver leaf for banquets and regal gifting.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/silver-vark-kaju-samosa.jpg",
    ingredients: "Cashews, Khoya, Edible Silver Leaf (Vark), Pistachio, Saffron"
  },
  {
    id: "gulab-katli",
    name: "Gulab Katli",
    hindiName: "गुलाब कतली",
    category: "Royal Kaju",
    description: "Tender diamond-shaped cashew fudge infused with fresh damask rose extract and real rose petals.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/gulab-katli.jpg",
    ingredients: "Cashews, Damask Rose Extract, Cane Sugar, Rose Petals"
  },

  // Bengali Sweets
  {
    id: "rasmalai",
    name: "Rasmalai",
    hindiName: "रस मलाई",
    category: "Bengali Sweets",
    description: "Feather-light fresh cottage cheese dumplings poached in sugar water and soaked in chilled saffron-pistachio thickened milk.",
    sizes: ["2 Pieces", "4 Pieces", "Bulk Tub"],
    image: "assets/rasmalai.jpg",
    ingredients: "Fresh Cow Milk Chhena, Saffron, Cardamom, Pistachio, Milk"
  },
  {
    id: "chamcham",
    name: "Cham Cham",
    hindiName: "चमचम",
    category: "Bengali Sweets",
    description: "Elongated succulent chhena rolls glazed in light syrup and delicately dusted with dry fruit slivers and mawa shavings.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/chamcham.jpg",
    ingredients: "Chhena, Sugar Syrup, Khoya, Pistachio, Saffron"
  },
  {
    id: "matka-kesar-rasmalai",
    name: "Matka Kesar Rasmalai",
    hindiName: "केसर रसमलाई",
    category: "Bengali Sweets",
    description: "Chilled rasmalai served in natural terracotta earthen pots that impart a distinct earthy aroma to the saffron cream.",
    sizes: ["2 Pieces", "4 Pieces"],
    image: "assets/matka-kesar-rasmalai.jpg",
    ingredients: "Chhena, Whole Milk, Kashmiri Saffron, Pistachio, Earthen Pot"
  },
  {
    id: "fruit-sandesh",
    name: "Fruit Sandesh Cups",
    hindiName: "फ्रूट संदेश",
    category: "Bengali Sweets",
    description: "Light, melt-in-the-mouth artisanal sandesh cups filled with natural fruit essences and micro diced nuts.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/fruit-sandesh-cups.jpg",
    ingredients: "Fresh Chhena, Cane Sugar, Seasonal Fruit Extracts, Almonds"
  },
  {
    id: "kheer-kadam",
    name: "Kheer Kadam",
    hindiName: "खीर कदम",
    category: "Bengali Sweets",
    description: "A juicy miniature rasgulla enclosed within a velvety outer shell of sweetened condensed milk fudge and rolled in poppy seeds.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/kheer-kadam.jpg",
    ingredients: "Chhena, Mawa, Sugar, Poppy Seeds, Cardamom"
  },
  {
    id: "assorted-bengali",
    name: "Assorted Bengali Platter",
    hindiName: "बंगाली मिठाई थाली",
    category: "Bengali Sweets",
    description: "A royal festive assortment of Rasgulla, Chamcham, Sandesh, and Chenna Rasbhari prepared fresh every morning.",
    sizes: ["500g Platter", "1kg Platter"],
    image: "assets/assorted-bengali-sweets.jpg",
    ingredients: "Chhena, Whole Milk, Saffron, Pistachio, Rose Water, Sugar"
  },

  // Laddus & Halwa
  {
    id: "motichoor-laddu",
    name: "Desi Ghee Motichoor Laddu",
    hindiName: "मोतीचूर लड्डू",
    category: "Laddus",
    description: "Microscopic pearls of roasted gram flour fried slowly in pure golden cow ghee, bathed in saffron syrup and shaped warm.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/motichoor-laddu.jpg",
    ingredients: "Gram Flour, Pure Desi Ghee, Saffron, Cardamom, Melon Seeds"
  },
  {
    id: "kesar-malai-laddu",
    name: "Kesar Malai Laddu",
    hindiName: "केसर मलाई लड्डू",
    category: "Laddus",
    description: "Creamy whole milk spheres delicately scented with saffron threads and green cardamom. Soft, rich, and unforgettable.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/kesar-malai-laddu.jpg",
    ingredients: "Fresh Malai, Paneer, Saffron, Khoya, Pistachio"
  },
  {
    id: "dry-fruit-mewa-laddu",
    name: "Royal Mewa Laddu",
    hindiName: "मेवा लड्डू",
    category: "Laddus",
    description: "Nutritious traditional Rajasthani laddu prepared with roasted almonds, cashews, pistachios, edible gum (gond), and desi ghee.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/dry-fruit-mewa-laddu.jpg",
    ingredients: "Almonds, Cashews, Gond, Desi Ghee, Whole Wheat Flour, Jaggery"
  },
  {
    id: "guliya",
    name: "Shahi Gujiya",
    hindiName: "गुलिया",
    category: "Laddus",
    description: "Crispy golden flaky pastry hand-pinched and stuffed with cardamom-spiced sweetened khoya, dried coconut, and toasted almonds.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/guliya.jpg",
    ingredients: "Flour, Pure Desi Ghee, Khoya, Coconut, Almonds, Cardamom"
  },
  {
    id: "moong-dal-halwa",
    name: "Moong Dal Halwa",
    hindiName: "मूंग दाल हलवा",
    category: "Laddus",
    description: "Rich, slow-cooked coarse yellow lentil halwa drenched in fragrant pure ghee, saffron syrup, and slivered cashews.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/moong-dal-halwa-vark-thal.jpg",
    ingredients: "Moong Dal, Pure Desi Ghee, Whole Milk, Saffron, Cashews, Cardamom"
  },
  {
    id: "rajasthani-malpua",
    name: "Rajasthani Mawa Malpua",
    hindiName: "राजस्थानी मालपुआ",
    category: "Laddus",
    description: "Tender, melt-in-the-mouth mawa pancakes pan-fried in ghee and steeped in cardamom saffron syrup.",
    sizes: ["Plate (2 Pcs)", "Party Box (6 Pcs)"],
    image: "assets/rajasthani-mawa-malpua.jpg",
    ingredients: "Mawa, Milk, Flour, Desi Ghee, Saffron Syrup, Pistachio"
  },

  // Artisanal Barfi
  {
    id: "gulab-halwa-ki-barfi",
    name: "Gulab Halwa Barfi",
    hindiName: "गुलाब हलवा की बर्फी",
    category: "Artisanal Barfi",
    description: "A signature Rajasthani delicacy cooked slowly from full-cream milk fudge infused with natural organic rose petals.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/gulab-halwa-ki-barfi.jpg",
    ingredients: "Milk Khoya, Damask Rose Petals, Ghee, Sugar, Pistachio"
  },
  {
    id: "kaju-dry-fruit-barfi",
    name: "Kaju Dry Fruit Barfi",
    hindiName: "काजू ड्रायफ्रूट बर्फी",
    category: "Artisanal Barfi",
    description: "Dense, smooth cashew fudge layered with crunchy roasted California almonds and pistachios.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/kaju-dry-fruit-barfi.jpg",
    ingredients: "Cashews, Roasted Almonds, Pistachio, Desi Ghee, Sugar"
  },
  {
    id: "anjeer-barfi",
    name: "Anjeer Barfi",
    hindiName: "अंजीर बर्फी",
    category: "Artisanal Barfi",
    description: "Naturally sweet, wholesome dried fig barfi packed with toasted dry fruits and prepared without artificial sugar.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/anjeer-barfi.jpg",
    ingredients: "Turkish Figs, Roasted Cashews, Almonds, Ghee"
  },
  {
    id: "kesar-kalakand",
    name: "Kesar Kalakand",
    hindiName: "केसर कलाकंद",
    category: "Artisanal Barfi",
    description: "Soft grainy kalakand enriched with natural Kashmiri saffron, offering a gentle golden hue and delicate aromatics.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/kesar-kalakand.jpg",
    ingredients: "Milk, Chhena, Kashmiri Kesar, Sugar, Cardamom"
  },

  // Dry Fruit
  {
    id: "dry-fruit-laddu",
    name: "Sugarfree Dry Fruit Laddu",
    hindiName: "ड्रायफ्रूट लड्डू",
    category: "Dry Fruit",
    description: "Pure energetic indulgence handcrafted from Medjool dates, roasted cashews, almonds, walnuts, and chia seeds. No added refined sugar.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/dry-fruit-laddu.jpg",
    ingredients: "Dates, Almonds, Cashews, Walnuts, Pistachios, Cardamom"
  },
  {
    id: "anjeer-dry-fruit-roll",
    name: "Anjeer Dry Fruit Roll",
    hindiName: "अंजीर रोल",
    category: "Dry Fruit",
    description: "Hand-rolled logs of minced sun-dried Turkish figs embedded with crunchy nuts and sliced into tender coin rounds.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/anjeer-dry-fruit-roll.jpg",
    ingredients: "Organic Dried Figs, Almonds, Cashews, Pistachios"
  },
  {
    id: "assorted-dry-fruit-bites",
    name: "Assorted Dry Fruit Bites",
    hindiName: "ड्रायफ्रूट बाइट्स",
    category: "Dry Fruit",
    description: "Miniature cubes of gourmet nuts bound with wild honey and natural fruit essences — an exceptional modern treat.",
    sizes: ["250g", "500g", "1kg"],
    image: "assets/assorted-dry-fruit-bites.jpg",
    ingredients: "Assorted Premium Nuts, Honey, Natural Fruit Pulp"
  },
  {
    id: "premium-dry-fruits-box",
    name: "Imperial Dry Fruits Box",
    hindiName: "प्रीमियम ड्रायफ्रूट बॉक्स",
    category: "Dry Fruit",
    description: "Hand-sorted jumbo Mamra almonds, royal cashews, Afghan green raisins, and Persian pistachios in a regal presentation box.",
    sizes: ["500g Gift Box", "1kg Gift Box"],
    image: "assets/premium-dry-fruits-box-purple.jpg",
    ingredients: "Mamra Almonds, Jumbo Cashews, Afghani Pistachio, Green Raisins"
  },

  // Gift Boxes
  {
    id: "kaju-mix-box-fancy",
    name: "Royal Kaju Assortment Box",
    hindiName: "काजू मिक्स बॉक्स फैन्सी",
    category: "Gift Boxes",
    description: "A luxury curation of our finest cashew creations: Kaju Chakra, Kaju Paan, Kaju Roll, and Kaju Cassata in bespoke gold packaging.",
    sizes: ["500g Luxury Box", "1kg Royal Box"],
    image: "assets/kaju-mix-box-fancy.jpg",
    ingredients: "Curated Selection of Keshuji Kaju Specialities"
  },
  {
    id: "mix-mithai",
    name: "Classic Festive Mithai Box",
    hindiName: "मिक्स मिठाई",
    category: "Gift Boxes",
    description: "Our bestselling festive collection combining traditional favourites: Motichoor Laddu, Peda, Moong Barfi, and Kalakand.",
    sizes: ["500g Box", "1kg Box", "Custom Hamper"],
    image: "assets/mix-mithai.jpg",
    ingredients: "Assorted Heritage & Milk Delicacies"
  },
  {
    id: "chhappan-bhog-thali",
    name: "Chhappan Bhog Grand Thali",
    hindiName: "छप्पन भोग थाली",
    category: "Gift Boxes",
    description: "The pinnacle of royal Rajasthani celebratory gifting. An opulent round thali presenting a panoramic spectrum of Keshuji sweets.",
    sizes: ["Grand Festive Thali (1.5kg)", "Royal Celebration Thali (2.5kg)"],
    image: "assets/chhappan-bhog-thali.jpg",
    ingredients: "Pan-selection of 56 artisanal sweets & dry fruit confections"
  }
];
