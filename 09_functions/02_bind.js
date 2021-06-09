'use strict';

const lufthansa = {
  airline:'Lufthansa',
  iataCode:'LH',
  bookings:[],
  book:function(flightNum,name){
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}.`);
    this.bookings.push({flight: `${this.iataCode} ${flightNum}`,name});
  }
};

const swiss = {
  airline:'swiss',
  iataCode:'SE',
  bookings:[],
};

const eurowings = {
  airline:'Eurowings',
  iataCode:'EW',
  bookings:[],
};
// call method
// const book = lufthansa.book;
// book.call(swiss,15,'jonas');

// bind Method
// Now because  of bind bookEw is new method oir functions
const bookEw = lufthansa.book.bind(eurowings);
bookEw(15,'steven');

const bookSw = lufthansa.book.bind(swiss);
// console.log(bookSw);
bookSw(20,'stefen');

// because of this we can specify flight  no specificalluy
const bookEW23 = lufthansa.book.bind(eurowings , 23);
bookEW23('abhishek'); //here name is requried only beacuse we already mentioed flightnum


// with event listner
lufthansa.planes= 300;
lufthansa.buyPlanes = function (){
  this.planes++;
  console.log(this);
  console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click',lufthansa.buyPlanes.bind(lufthansa));


// partial application

const addTax = (rate,value) => value + value * rate;
console.log(addTax(0.1,200));

const addVAT = addTax.bind(null,0.23);
// addVAT = (rate,value) => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));


const addTax2 = function(rate){
  return function(value){
    console.log(value + value  * rate);
  }
}

addTax2(23)(0.23);