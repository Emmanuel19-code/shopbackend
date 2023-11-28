const cakesData = [
  {
    name: "Chocolate Fudge Cake",
    price: 25,
    description: "Decadent chocolate cake with rich fudge filling.",
    image: {
      public_id: "classic_vanilla_cake_id",
      url: "/uploads/classic_vanilla_cake.jpg",
    },
    averageRating: 4.5,
    numOfReviews: 120,
    AdditionalFlavors: [
      { flavorName: "Vanilla", extraPrice: 5 },
      { flavorName: "Strawberry", extraPrice: 7 },
    ],
  },
  {
    name: "Red Velvet Cake",
    price: 30,
    description: "Classic red velvet cake with cream cheese frosting.",
    image: {
      public_id: "classic_vanilla_cake_id",
      url: "/uploads/classic_vanilla_cake.jpg",
    },
    averageRating: 4.8,
    numOfReviews: 95,
    AdditionalFlavors: [
      { flavorName: "Blueberry", extraPrice: 6 },
      { flavorName: "Raspberry", extraPrice: 8 },
    ],
  },
  {
    name: "Carrot Cake",
    price: 28,
    description: "Moist carrot cake with walnuts and cream cheese icing.",
    image: {
      public_id: "classic_vanilla_cake_id",
      url: "/uploads/classic_vanilla_cake.jpg",
    },
    averageRating: 4.7,
    numOfReviews: 105,
    AdditionalFlavors: [
      { flavorName: "Pineapple", extraPrice: 6 },
      { flavorName: "Coconut", extraPrice: 7 },
    ],
  },
  {
    name: "Red Velvet Cake",
    price: 25,
    discountprice: 20,
    discountpercent: 20,
    description:
      "A classic cake with layers of red velvet sponge and cream cheese frosting.",
    image: {
      public_id: "classic_vanilla_cake_id",
      url: "/uploads/classic_vanilla_cake.jpg",
    },
    averageRating: 4.5,
    numOfReviews: 120,
    reviews: [],
    AdditionalFlavors: [
      { flavorName: "Vanilla", extraPrice: 7 },
      { flavorName: "Chocolate", extraPrice: 7 },
    ],
  },
  {
    name: "Chocolate Fudge Cake",
    price: 30,
    discountprice: 0,
    discountpercent: 0,
    description:
      "Rich chocolate cake layered with fudge and chocolate ganache.",
    image: {
      public_id: "classic_vanilla_cake_id",
      url: "/uploads/classic_vanilla_cake.jpg",
    },
    averageRating: 4.8,
    numOfReviews: 90,
    reviews: [],
    AdditionalFlavors: [
      { flavorName: "Caramel", extraPrice: 7 },
      { flavorName: "Raspberry", extraPrice: 7 },
    ],
  },
  {
    name: "Classic Vanilla Cake",
    price: 20,
    discountprice: 18,
    discountpercent: 10,
    description:
      "A timeless delight with layers of moist vanilla sponge and creamy frosting.",
    image: {
      public_id: "classic_vanilla_cake_id",
      url: "/uploads/classic_vanilla_cake.jpg",
    },
    averageRating: 4.7,
    numOfReviews: 85,
    reviews: [],
    AdditionalFlavors: [
      { flavorName: "Chocolate", extraPrice: 7 },
      { flavorName: "Strawberry", extraPrice: 7 },
    ],
  },
  {
    name: "Decadent Chocolate Truffle Cake",
    price: 35,
    discountprice: 0,
    discountpercent: 0,
    description:
      "Indulge in rich layers of chocolate sponge filled with velvety truffle.",
    image: {
      public_id: "chocolate_truffle_cake_id",
      url: "/uploads/chocolate_truffle_cake.jpg",
    },
    averageRating: 4.9,
    numOfReviews: 110,
    reviews: [],
    AdditionalFlavors: [
      { flavorName: "Caramel", extraPrice: 7 },
      { flavorName: "Hazelnut", extraPrice: 7 },
    ],
  },
];

