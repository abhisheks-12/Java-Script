// Object  destructuring


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
  }
};

restaurant.orderDelivery({
  time:'22:30',
  address: 'Pune',
  mainIndex: 2,
  starterIndex:1
});

// without pasing some values it will  take default  value
restaurant.orderDelivery({
  address:'Mumbai'
});

// now acessing object by .noation
// const a = restaurant.openingHours.thu.open;
// console.log(a);

// now acessing by destrut
// Here we store data in variables
const {name,mainMenu,openingHours} = restaurant;
console.log(name,mainMenu,openingHours);

// we can also change variables
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName,tags,hours);


// if element not present in objevt we can set default value to it and use it
const {menu = [], starterMenu: starters = []} =restaurant;
console.log(menu);
console.log(starters);


// mutating variables in obj
let a= 110;
let b= 120;
const obj = {a:10, b:10, c:5}; 
({a,b} = obj);
console.log(a);
console.log(b);


// Nested obj
const{fri} = openingHours;  
console.log(fri)
// if we want open and close var sep
const{sat:{open:o, close:c}} = openingHours
console.log(o,c);



