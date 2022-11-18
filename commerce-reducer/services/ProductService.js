const PRODUCTS = [
  {
    id: 100,
    category: 'computer',
    name: "laptop01",
    price: 350,
    image: require("../assets/laptop.jpg"),
    description:
      "Lorem Ipsum: ... Description",
  },
  {
    id: 101,
    category: 'computer',
    name: "laptop02",
    price: 600,
    image: require("../assets/laptop.jpg"),
    description:
      "Lorem Ipsum: ... Description",
  },
  {
    id: 200,
    category: 'phone',
    name: "phone01",
    price: 250,
    image: require("../assets/phone.jpeg"),
    description:
      "Lorem Ipsum: ... Description",
  },
  {
    id: 201,
    category: 'phone',
    name: "phone02",
    price: 200,
    image: require("../assets/phone.jpeg"),
    description:
      "Lorem Ipsum: ... Description",
  },
];

export const getProducts = () => {
  return PRODUCTS;
};

export const getProduct = (id) => {
  return PRODUCTS.find((product) => product.id == id);
};

export const getProductByCategory = (category)=>{
  return PRODUCTS.filter(product=>product.category==category);
}