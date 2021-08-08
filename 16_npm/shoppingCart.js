// Exporting Module
console.log('Exporting Module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quanity) {
  console.log(`${product} ${quanity} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;
export {totalPrice,totalQuantity};

// default export
export default  function  (product, quanity) {
  cart.push({product,quanity})
  console.log(`${product} ${quanity} added to cart`);
};

export {water} from './util.js';