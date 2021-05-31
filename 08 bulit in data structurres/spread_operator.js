// Spread Operators

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
  }
};

const arr = [7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

// Spread Operator
const goodNewArr = [1,2, ...arr];
console.log(goodNewArr);

// it will access elements of array individualy...
console.log(...goodNewArr); 

// Adding ihn the end of array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy and Merge Array
const mainMenu = [...restaurant.mainMenu];
console.log(mainMenu);

// join 2 Arrays
const joinArr = [...arr,...restaurant.mainMenu];
console.log(joinArr);


// Iterables are arrays,strings,maps,sets , Not Objects

// Spread Operators on string
const str = 'jonas';
const letter = [...str , ' ','S'];
console.log(letter);
const letter1 = [...str];
console.log(letter1);
console.log(...str);


// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('InIngredient 2?') ,
//   prompt('InIngredient 3?') ,
// ];
// // console.log(ingredients);

// // calling function
// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// restaurant.orderPasta(...ingredients);



// Spread Operator in obj
// creating new obj with old obj
const newRestro = {FoundedIn:1998 , ...restaurant , founder:'XYZ'};
console.log(newRestro);

// copy of object
const copyResto = {...restaurant};
copyResto.name = "Hello";
console.log(restaurant);
console.log(copyResto);
