import { Navlisttype } from "../Type/Type";

// Dynamic Navigation List
 export const NavItems: Navlisttype[] = [
    { link: '/' , list: "Home" },
    { link: '/menu', list: "Menu" },
    { link: '/contact', list: "Contact Us" },
  ];


// utils/categories.ts
export interface Category {
  title: string;
  description: string;
  image: string;
  popular: boolean;
}

const categories: Category[] = [
  {
    title: "Main Dish",
    description: "86 dishes",
    image: "/images/zinger.jpg",
    popular: true,
  },
  {
    title: "Break Fast",
    description: "12 breakfast",
    image: "/images/sandwitch.jpg",
    popular: true,
  },
  {
    title: "Dessert",
    description: "48 desserts",
    image: "/images/desert.jpg",
    popular: true,
  },
  {
    title: "Browse All",
    description: "255 items",
    image: "/images/orange.jpg",
    popular: true,
  },

  {
    title: "Belgium Pastary",
    description: "255 items",
    image: "/images/belgiumpastary.jpg",
    popular: false,
  }, {
    title: "Blueberry Mocktail",
    description: "255 items",
    image: "/images/blueberry.jpg",
    popular: false,
  }, {
    title: "Caramel Pastry",
    description: "255 items",
    image: "/images/caramelpastry.jpg",
    popular: false,
  }, {
    title: "Chipotle Fries",
    description: "255 items",
    image: "/images/chipotle fries.jpg",
    popular: false,
  }, {
    title: "Itailian Pastary",
    description: "255 items",
    image: "/images/itailianpastart.jpg",
    popular: false,
  }, {
    title: "Loaded Fries",
    description: "255 items",
    image: "/images/loadedfries.jpg",
    popular: false,
  }, {
    title: "Masala Fries",
    description: "255 items",
    image: "/images/masalafries.jpg",
    popular: false,
  }, {
    title: "Mojito",
    description: "255 items",
    image: "/images/mojiot.jpg",
    popular: false,
  },
  {
    title: "Noodle",
    description: "255 items",
    image: "/images/noodle.jpg",
    popular: false,
  },{
    title: "Pizza",
    description: "255 items",
    image: "/images/pizza.jpg",
    popular: false,
  },{
    title: "Plain Fries",
    description: "255 items",
    image: "/images/plainfries.jpg",
    popular: false,
  },{
    title: "Wings",
    description: "255 items",
    image: "/images/wings.jpg",
    popular: false,
  },{
    title: "Wrap",
    description: "255 items",
    image: "/images/wrap.jpg",
    popular: false,
  },
];

export default categories;
