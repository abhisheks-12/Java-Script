'use strict';

// import { startCase } from 'lodash';
/*
// ************************* import and export modules ***********************

import {water} from './shoppingCart.js'
// Importing Module
// import { addToCart , totalPrice as price ,totalQuantity } from './shoppingCart.js';
// addToCart(5, 'bread');
// console.log(price,totalQuantity);

console.log('Importing module');

// Importing module by another style it will act like object
import * as shoppingCart from './shoppingCart.js';
shoppingCart.addToCart('bread',5);
console.log(shoppingCart.totalPrice);


// here we import default function
import add , {cart} from './shoppingCart.js';
add('pizza',2);
console.log(cart);

// calling from util
water();



// **************************  module patterns *******************************

// works because of closure 
const shoppingCart = (function () {
  const cart = [];
  const shoppingCart = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quanity) {
    console.log(`${product} ${quanity} added to cart`);
  };

  const orderStock = function (product, quanity) {
    console.log(`${product} ${quanity} oredrd from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity
  }
})();

shoppingCart.addToCart('apple',4);
shoppingCart.addToCart('pizza',4);
console.log(shoppingCart);
// shoppingCart.orderStock('orange',3) -> will not work only return functions will work
console.log(shoppingCart.totalPrice);


// *************************  common js modules ************************

// just to show 
// export
export.addToCart = function (product, quanity) {
  console.log(`${product} ${quanity} added to cart`);
};

// Import
const {addToCart} = require ('./shoppingCart.js');



// *************************** npm *************************************

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
const state = {
  cart: [
    { product: 'bread', quantity: 10 },
    { product: 'Pizza', quantity: 12 },
  ]
};

const startClone = Object.assign({},state);
console.log(startClone);

*/

// ********************** Web parcel ************************
// error

// ************************ Babel ************************************
// error
class Person {
  greeting = 'Hello';
  constructor(name) {
    this.name = name;
  }

  greetPeople(myName){
    console.log(`${this.greeting} , ${this.name} I am ${myName}`);
  }
}

const abhishek = new Person('Abhishek');
console.log(abhishek);
abhishek.greetPeople('Suraj')

// ************************* Clean code ***************************************
