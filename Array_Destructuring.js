"use strict";
// Array destructuring
// destructuring


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order:function(startIndex,mainIndex){
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  }

};

const arr = [1,5,9];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a);
console.log(b);
console.log(c);

// Array Destructuring                                                                                                                                                      
const [x,y,z] = arr;
console.log(x,y,z);

let [main,,secondary] = restaurant.categories;
console.log(main,secondary);

// Switching Variables
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

[main,secondary] = [secondary,main];
console.log(main,secondary);
// console.log(typeof main,typeof secondary);

// console.log(restaurant.order(2,0));
const[starter,mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);


// Destructuring inside Destructuring 
const nested = [2,4,[5,6]];
// const[i,,j] =nested;
// console.log(i,j) 

const[i,,[j,k]] = nested;
console.log(i,j,k);


// Default Value
const [p=1,q=1,r=1] = [8,9];
console.log(p,q,r);


