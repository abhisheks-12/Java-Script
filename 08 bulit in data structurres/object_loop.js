'use strict';


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
  }
};

// Property Names here we are storing keys;
const property = Object.keys(restaurant.openingHours);
console.log(property);
let openStr = `we are open for ${property.length} days : `;


for(const day of property) {
  openStr += `${day}.`;
}
console.log(openStr)

// here  we are storing values / acessing values
const val = Object.values(restaurant.openingHours);
console.log(val);

// Entire Object
const entries = Object.entries(restaurant.openingHours);
console.log(entries)

// [key ,value] --- if it is simple object
// here we destructure array and object
for(const [key,{open,close}] of entries){
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

