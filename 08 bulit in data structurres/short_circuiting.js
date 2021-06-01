"use strict";

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],


  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0, // OPEN 24 HRS
      close: 24
    }
  },

  order:function(startIndex,mainIndex){
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  
  // Here default values are set if function is called withou args
  orderDelivery:function({ starterIndex = 1 ,mainIndex = 0,time = '12:45',address }){
    console.log(`Order recived! ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`);
  },

  orderPasta:function(ing1,ing2,ing3){
    console.log(`Here is  u r pasta with ${ing1} , ${ing2} , ${ing3}`);
  },

  oredrPizza:function(mainIngredient,...otherIngredient){
    console.log(mainIngredient);
    console.log(otherIngredient);
  }
};

// short-circuting
// we can use with any data type and return  any data type

// OR operators
// // give first truthy value and return
// console.log(3 || "jonas");
// console.log("" || "jonas");
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);


// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1)


// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// // And Operator
// console.log('_______AND______');

// // it will give first falsy value and return
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log( 'Hello' && 23 && undefined && 0  && 'bonjor');

// // pratical Example
// if(restaurant.oredrPizza){
//   restaurant.oredrPizza('mushroom','spinich');
// }

// restaurant.oredrPizza &&restaurant.oredrPizza('mushroom','spinich');


// Nullish operator
restaurant.numGuests = 5;
const guest3 = restaurant.numGuests ||   10;
console.log(guest3)


// It wil work for nullis h value
// Nullish values are undefied or null
restaurant.numGuests = 0;
const guest4 = restaurant.numGuests ??   10;
console.log(guest4)
