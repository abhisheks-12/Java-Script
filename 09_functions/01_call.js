'use strict';

// Setting Up  Default  values
const bookings = [];
function createBooking(flightNo,numPass = 1 ,price = 199){
  // ES5
  // numPass = numPass || 1;
  // price = price || 199;
  const booking = {
    flightNo,
    numPass,
    price
  }
  console.log(booking);
  bookings.push(booking);
}
createBooking('LH123');
createBooking('LH123',2,800);
createBooking('AB32',undefined,100); //> Here booking second arg is undefined so it will take def val




const flight = 'LH234';
const steve = {
  name: 'Steven Rogers',
  passport: 243569883
}

function checkIn(flightNum,passengers){
    flightNum = 'LH999';
    passengers.name ='Mr.' + passengers.name;
    
    if(passengers.passport === 243569883){
      alert('Check IN');
    }else{
      alert('Wrong Passport');
    }
}

checkIn(flight,steve);
console.log(flight);
console.log(steve);

// Is the same doing
// const flightNum = flight;
// const passenger = steve;


function newPassport(person){
  person.passport = Math.trunc(Math.random()*1000000);
}


newPassport(steve);
checkIn(flight,steve);


console.log(typeof newPassport);


// HIGHER OREDR FUNCTIONS

function oneWord(str){
  return str.replace(/ /g, '').toLowerCase();
}

function upperFisrtWorld(str){
  const[first,...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');

  
}


// higher order
function transformer(str,fn){
  console.log(`Orignal String: ${str}`);
  console.log(`Transformed  string: ${fn(str)}`);

  console.log(`Transformed By: ${fn.name}`);
}

transformer('JavaScript is Weird and good!',upperFisrtWorld);
transformer('JavaScript is Weird and good!',oneWord);


// simple Example with arrow fun
const add = (x,y) => x+y;
const numbers = function(fn,x,y){
  return fn(x,y);
}
console.log(numbers(add,5,3));





// Function Returning Functions
const greet = function(greeting){
  return function(name){
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Abhishek');

// using arr function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');



// The call and Apply Method

const lufthansa = {
  airline:'Lufthansa',
  iataCode:'LH',
  bookings:[],
  book:function(flightNum,name){
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`)
    this.bookings.push({flight: `${this.iataCode} ${flightNum}`,name});
  }
};

console.log(lufthansa.bookings);

lufthansa.book(239,'Bruce');
lufthansa.book(239,'Jhon');

const eurowings = {
  airline:'Eurowings',
  iataCode:'EW',
  bookings:[],
};
const book = lufthansa.book;

// doesn't work
// book(23,'sarah')

book.call(eurowings, 23 , 'Sarah');
console.log(eurowings);

book.call(lufthansa,22,'Merry');


const swiss = {
  airline:'swiss',
  iataCode:'SE',
  bookings:[],
};

book.call(swiss,283,'Marry');


// Example2
const num = {
  num1:15,
  num2:20,
  add:function(){
    console.log(this.num1  + this.num2)
  }
};
num.add()
const num2 = {
    num1:10,
    num2:55,
};

// num.add.call(num2);


