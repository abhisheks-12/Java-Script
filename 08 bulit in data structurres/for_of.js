'use strict';
// Enhanced object literals

// ES6 Features
const weekdays = ['mon','tue','thu','fri','sat'];
const openingHours = {

  // here we replaced thu with this syntax
  [weekdays[2]]: {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  // ES6 enhanced object literals here we copy new object
  openingHours,

  
//  here we can use the function without adding function ES6 feature
  order(startIndex,mainIndex){
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  
  // Here default values are set if function is called withou args
  orderDelivery:function({ starterIndex = 1 ,mainIndex = 0,time = '12:45',address }){
    console.log(`Order recived! ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`);
  }
};


// for of loop
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
for(const item of menu){
  console.log(item);
}
// with index
// here we did destructuring also  
for(const [i,el] of menu.entries()){
  console.log(`${i+1}: ${el}`);
}

// Optional chaining
// it will get messy if there are too many nested objects
if(restaurant.openingHours && restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon);
}
if(restaurant.openingHours.fri){
  console.log(restaurant.openingHours.fri)
}

// with Optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);


const days = ['mon','tue','thu','fri','sat'];

for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? "we don't open"
  console.log(`on ${day} we open at ${open}`)
}

// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.rest?.(0,1) ?? 'Method does not exist');

// Arrays
const users = [{name:'bruce', email: 'Hellobruxe@gm.com'}]
console.log(users[0]?.name ?? 'user array empty')