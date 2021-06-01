'use strict';

// Rest Operators and patterns

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



// SPREAD on right side of assignment operator (=)
// const arr = [1,2,3,...[3,4]];
// const x = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(x)
// // console.log(arr)

// REST on left side of assignment operator
const[a,b,...others] = [1,2,3,4,5];
console.log(a,b,others)

const[Pizza,,Risotto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(Pizza,Risotto,otherFood)

//  Rest In objcets
const{sat,...otherdays} = restaurant.openingHours;
console.log(sat);
console.log(otherdays);


// Rest Operators in function
function add(...numbers){
  let sum =0;
  for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
}
// Rest will pack numbers into the array
add(2,5);
add(3,2,1);
add(1,5,7,9);

// In Other hand spread will unpack the array
const x = [10,20,30];
add(...x);

// Calling Method
restaurant.oredrPizza('mushroom','onion','olives');
restaurant.oredrPizza('mushroom');