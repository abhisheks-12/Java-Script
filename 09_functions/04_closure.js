'use strict';

/*
// Immediately invoked function

const runOnce = function(){
  console.log('This will never run again');
}
runOnce();

// IIFE
(function(){
  console.log('Never run again');
})();

// arrow 
(() => console.log('Never run again'))();
*/


// closures

const secureBooking = function(){
  let passengerCount = 0;

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();
booker();
booker();
booker();

// Example1

let f ;
const g = function(){
  const a = 23;
  f = function(){
    console.log(a*2);
  }
}

const h =function(){
  const b =777;
  f = function(){
    console.log(b*2);
  }
}

g();
f();

// reassign f function
h();
f();
console.dir(f);

// Example 2
const boardPass = function(n,wait){
  const  preGroup = n/3;

 setTimeout(function(){
   console.log(`we are boarding all ${n} passengers`);
   console.log(`There are 3  ${preGroup} groups`);
 },1000);

  console.log(`Will start boarding in ${wait} seconds`);
}
boardPass(180,3);


const preGroup = 1000;
boardPass(180,3);
