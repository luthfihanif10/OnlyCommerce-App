import product1 from "./assets/products/1.webp";
import product3 from "./assets/products/3.png";
import product5 from "./assets/products/5.png";
import product6 from "./assets/products/6.webp";
import product8 from "./assets/products/8.webp";

export const Requests = [
  {
    id: 1,
    productId: 1,
    productName: "Heavyweight Flannel Shirt",
    amount: 50,
    productImage: product1,
    status: "requested",
  },
  {
    id: 2,
    productId: 3,
    productName: "Women Sweater",
    amount: 25,
    productImage: product3,
    status: "checking",
  },
  {
    id: 3,
    productId: 5,
    productName: "Razer Wireless Gaming Mouse",
    amount: 75,
    productImage: product5,
    status: "requested",
  },
  {
    id: 4,
    productId: 6,
    productName: "Nikon Z 6II Mirrorless",
    amount: 55,
    productImage: product6,
    status: "checked",
  },
  {
    id: 5,
    productId: 8,
    productName: "Wireless Gaming Headset",
    amount: 10,
    productImage: product8,
    status: "confirmed",
  },
];

export const STATUS = [
  { label: "On-request", value: 1 },
  { label: "On-Check", value: 2 },
  { label: "Confirmed", value: 3 },
];
