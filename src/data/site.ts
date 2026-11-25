// Everything the site says lives here. Change the text, prices, bakes and hours
// in this file and every page picks it up. No component needs editing.

export const site = {
  name: "Pell & Daughter",
  legalName: "Pell & Daughter Bakery",
  tagline: "Bakery on Alder Street",
  description:
    "A neighborhood bakery on Alder Street baking sourdough, croissants and layer cakes in small batches. Bread out of the oven from six, cakes made to order.",
  founded: 2009,
  phone: "(541) 555-0142",
  phoneHref: "+15415550142",
  email: "hello@pellanddaughter.example",
  wholesaleEmail: "wholesale@pellanddaughter.example",
  address: {
    street: "2214 Alder Street",
    city: "Harrow Bend",
    region: "OR",
    postal: "97339",
    country: "US",
  },
  mapNote: "On the corner of Alder and 22nd, across from the library. Street parking on 22nd, bike racks out front.",
  nav: [
    { label: "Menu", href: "/menu" },
    { label: "Cakes to order", href: "/cakes" },
    { label: "Wholesale", href: "/wholesale" },
    { label: "Visit", href: "/visit" },
  ],
  instagram: "https://www.instagram.com/",
};

// Opening hours. `day` is 0 for Sunday through 6 for Saturday.
// `open` is in the morning and `close` in the afternoon (6:00 to 3:00 means 6 am to 3 pm).
export const hours = [
  { day: 2, label: "Tuesday", open: "6:00", close: "3:00", note: "" },
  { day: 3, label: "Wednesday", open: "6:00", close: "3:00", note: "" },
  { day: 4, label: "Thursday", open: "6:00", close: "3:00", note: "" },
  { day: 5, label: "Friday", open: "6:00", close: "4:00", note: "Pizza bread from 11" },
  { day: 6, label: "Saturday", open: "7:00", close: "4:00", note: "Busiest before 9" },
  { day: 0, label: "Sunday", open: "7:00", close: "1:00", note: "Until sold out" },
  { day: 1, label: "Monday", open: "", close: "", note: "Closed, the ovens get a rest" },
];

// The board on the home page. Update it each morning (or wire it to a sheet later).
// `out` is when the batch came out of the oven. `soldOut: true` strikes it through.
export const todaysBakes = {
  title: "Today's bakes",
  day: "Thursday",
  updated: "9:40",
  items: [
    { name: "Country sourdough", out: "6:10", price: 9, soldOut: false },
    { name: "Seeded rye", out: "6:25", price: 10, soldOut: false },
    { name: "Plain croissant", out: "6:40", price: 4.5, soldOut: false },
    { name: "Ham and gruyere croissant", out: "7:05", price: 6.5, soldOut: true },
    { name: "Cardamom buns", out: "7:20", price: 4.75, soldOut: false },
    { name: "Marionberry hand pies", out: "8:15", price: 5.5, soldOut: true },
    { name: "Olive fougasse", out: "9:30", price: 7, soldOut: false },
  ],
  note: "Second batch of croissants out at 11:30",
};

export const intro = {
  headline: "Bread from the oven at six, every day but Monday",
  lede: "Sourdough, croissants and buns baked in small batches on Alder Street since 2009, and layer cakes made to order for birthdays, weddings and Tuesdays.",
};

// Allergen codes shown on the menu.
export const allergens = {
  G: "Gluten",
  D: "Dairy",
  E: "Egg",
  N: "Tree nuts",
  S: "Sesame",
  V: "Vegan",
} as const;

type Code = keyof typeof allergens;

export const menu: { title: string; note?: string; items: { name: string; desc: string; price: number; tags: Code[] }[] }[] = [
  {
    title: "Bread",
    note: "Whole loaves. Ask and we'll slice it for you.",
    items: [
      { name: "Country sourdough", desc: "Our everyday loaf, 20% whole wheat, long cold proof", price: 9, tags: ["G", "V"] },
      { name: "Seeded rye", desc: "Dense, dark, sunflower and flax, keeps for a week", price: 10, tags: ["G", "V"] },
      { name: "Sesame semolina", desc: "Golden crumb, rolled in toasted sesame", price: 9.5, tags: ["G", "S", "V"] },
      { name: "Olive fougasse", desc: "Leaf-shaped, Castelvetrano olives and rosemary", price: 7, tags: ["G", "V"] },
      { name: "Milk bread", desc: "Soft pullman loaf for toast and sandwiches", price: 8, tags: ["G", "D", "E"] },
      { name: "Baguette", desc: "Out twice a day, at 6:50 and 11:30", price: 4.5, tags: ["G", "V"] },
    ],
  },
  {
    title: "Viennoiserie and buns",
    items: [
      { name: "Plain croissant", desc: "Three days from dough to oven", price: 4.5, tags: ["G", "D"] },
      { name: "Pain au chocolat", desc: "Two batons of dark chocolate", price: 5, tags: ["G", "D"] },
      { name: "Ham and gruyere croissant", desc: "With grain mustard", price: 6.5, tags: ["G", "D"] },
      { name: "Almond croissant", desc: "Day-old croissant, frangipane, baked again", price: 5.75, tags: ["G", "D", "E", "N"] },
      { name: "Cardamom bun", desc: "Swedish-style knot, pearl sugar", price: 4.75, tags: ["G", "D", "E"] },
      { name: "Morning bun", desc: "Croissant dough, orange sugar, cinnamon", price: 4.75, tags: ["G", "D"] },
    ],
  },
  {
    title: "Cakes and tarts by the slice",
    note: "From 10 each morning, while they last.",
    items: [
      { name: "Brown butter honey cake", desc: "Six layers, honey buttercream", price: 7, tags: ["G", "D", "E"] },
      { name: "Chocolate stout cake", desc: "Dark and not too sweet, cream cheese frosting", price: 7, tags: ["G", "D", "E"] },
      { name: "Lemon olive oil cake", desc: "With a sharp lemon glaze", price: 5.5, tags: ["G", "E"] },
      { name: "Seasonal fruit galette", desc: "Pears through winter, berries from June", price: 6, tags: ["G", "D"] },
      { name: "Walnut brown butter blondie", desc: "Chewy at the middle", price: 4, tags: ["G", "D", "E", "N"] },
    ],
  },
  {
    title: "Coffee and tea",
    note: "Beans roasted across town by a friend of the family.",
    items: [
      { name: "Drip coffee", desc: "Refills are free while you sit", price: 3, tags: [] },
      { name: "Espresso", desc: "Single origin, changes monthly", price: 3.25, tags: [] },
      { name: "Cappuccino", desc: "Oat milk on request", price: 4.75, tags: ["D"] },
      { name: "Black tea", desc: "Assam, in a pot", price: 3.5, tags: [] },
      { name: "Hot chocolate", desc: "Made with the same chocolate as the pain au chocolat", price: 4.5, tags: ["D"] },
    ],
  },
];

// Cakes to order. `art` picks the drawing: layer, bundt, tart or loaf.
// Colors are the drawing's sponge, frosting and topping.
export const cakes = [
  {
    slug: "honey",
    name: "Brown butter honey cake",
    desc: "Six thin layers of brown butter sponge with honey buttercream. Our most ordered birthday cake.",
    art: "layer",
    colors: { sponge: "#d9a95f", frosting: "#f3e6cc", topping: "#c9862f" },
  },
  {
    slug: "chocolate-stout",
    name: "Chocolate stout cake",
    desc: "Three layers of dark chocolate stout sponge, cream cheese frosting, cocoa nibs on top.",
    art: "layer",
    colors: { sponge: "#4a2c22", frosting: "#f4ece0", topping: "#2f1c16" },
  },
  {
    slug: "strawberry",
    name: "Strawberry shortcake",
    desc: "Vanilla chiffon, whipped cream and macerated strawberries. Best from May to July.",
    art: "layer",
    colors: { sponge: "#f0d9a4", frosting: "#fbf5ea", topping: "#b8343f" },
  },
  {
    slug: "lemon-bundt",
    name: "Lemon olive oil bundt",
    desc: "A dairy-free bundt with a sharp lemon glaze that sets like frost.",
    art: "bundt",
    colors: { sponge: "#e3b65a", frosting: "#fbf3df", topping: "#e8d27a" },
  },
  {
    slug: "pear-tart",
    name: "Pear and almond tart",
    desc: "Frangipane and poached pears in a sweet pastry shell. Serves 10, one size only.",
    art: "tart",
    colors: { sponge: "#c98b45", frosting: "#e9cf98", topping: "#cdb46a" },
  },
  {
    slug: "carrot",
    name: "Carrot walnut loaf",
    desc: "A tall loaf cake with toasted walnuts and a thick cream cheese top. Good for offices.",
    art: "loaf",
    colors: { sponge: "#b8743a", frosting: "#f6efe1", topping: "#7a5233" },
  },
] as const;

export const cakeFlavors = [
  "Brown butter honey",
  "Chocolate stout",
  "Strawberry shortcake",
  "Lemon olive oil",
  "Pear and almond tart",
  "Carrot walnut",
  "Something else (tell us below)",
];

export const cakeSizes = [
  { id: "6in", label: "6 inch round", serves: "8 to 10", price: 48 },
  { id: "8in", label: "8 inch round", serves: "14 to 18", price: 68 },
  { id: "10in", label: "10 inch round", serves: "24 to 30", price: 96 },
  { id: "sheet", label: "Half sheet", serves: "36 to 40", price: 135 },
];

export const cakeOrders = {
  leadHours: 72,
  pickupWindows: ["7:00 to 9:00", "9:00 to 12:00", "12:00 to 3:00"],
  messageMax: 40,
  notes: [
    "Order at least 72 hours ahead. For weddings and anything over 40 servings, give us two weeks.",
    "We confirm by email within one working day with the total. Pay at pickup, card or cash.",
    "Candles and a cake box are included. Writing on the cake is free, up to 40 letters.",
    "Our kitchen handles wheat, nuts, dairy, eggs and sesame, so we can't promise any cake is allergen free.",
  ],
};

export const wholesale = {
  headline: "Bread and pastry for cafes, restaurants and grocers",
  lede: "We bake for about twenty kitchens around Harrow Bend. Orders go in by 2pm, and we deliver before 7 the next morning in our own van.",
  deliveryDays: [
    { day: "Tuesday to Saturday", detail: "Delivery 5:30 to 7:00am" },
    { day: "Sunday", detail: "Pickup at the back door from 6:00am" },
    { day: "Monday", detail: "No deliveries" },
  ],
  terms: [
    { label: "Minimum order", value: "$60 a delivery" },
    { label: "Order by", value: "2pm the day before" },
    { label: "Delivery area", value: "Within 8 miles of Alder Street" },
    { label: "Payment", value: "Invoiced every two weeks, net 14" },
  ],
  products: [
    { name: "Country sourdough, 900 g", price: 6.5 },
    { name: "Seeded rye, 1 kg", price: 7 },
    { name: "Baguette", price: 2.75 },
    { name: "Milk bread pullman", price: 5.5 },
    { name: "Croissant, baked", price: 2.6 },
    { name: "Croissant, frozen to bake", price: 1.9 },
    { name: "Cardamom bun", price: 2.75 },
    { name: "Loaf cake, 12 slices", price: 24 },
  ],
  steps: [
    "Tell us what you'd like and how often with the form below.",
    "We bring a tasting box to your kitchen, usually within the week.",
    "You get a standing order sheet you can change by 2pm any day.",
  ],
};

export const story = {
  title: "Two generations, one oven",
  paragraphs: [
    "Ray Pell opened the bakery in 2009 in a former shoe repair shop on Alder Street, with a secondhand deck oven and a single sourdough. His daughter June started on the morning shift at sixteen and now runs the kitchen.",
    "We still mix by hand in the early hours, bake in the same oven and sell what's left at half price after two.",
  ],
};

export const contactTopics = ["A cake order", "Wholesale", "Something else"];
