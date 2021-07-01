'use strict';

// console.log(23 === 23.0);
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// // conversion
// console.log(Number('23'));
// console.log(Number('+23'));


// Parsing
// console.log(Number.parseInt('30px'));
// console.log(Number.parseInt('e23'));

// console.log(Number.parseFloat('2.5rem'));

// // check value is Not a number
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20x'));

// // Checking if number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));

// other operators
// console.log(Math.sqrt(5));
// console.log(25 ** (1/2));
// console.log(8 ** (1/3));

// console.log(Math.max(5,10,15));
// console.log(Math.min(5,10,15));
// console.log(Math.trunc(Math.random()*6)+1);

// // here we create random number function
// const randomNum = (min,max) => Math.trunc(Math.random()*(max-min)+1);
// console.log(randomNum(10,20));


// // Rounding Integers
// console.log(Math.trunc(23.3));
// console.log(Math.round(23.3));
// console.log(Math.ceil(23.3));
// console.log(Math.floor(23.3));

// // Rounding floats / decimal
// console.log((2.7).toFixed(0));

// console.log(5%2);
// console.log(5/2);

// console.log(8%2);
// console.log(8/2);

// const isEven = n=> n%2 ===0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// // big Int
// console.log(BigInt(100000));

//////// Dates and Time/////

// create date
// const now  = new Date();
// console.log(now);

// console.log(new Date('Aug 02 2020 18:05:41'));
// console.log(new Date('Dec 24,2015'));


// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2012,10,15,23,5));
// console.log(new Date(2037,10,31));
// console.log(new Date(0));


// // working with dates
// const future = new Date(2037,10,19,15,23)
// console.log(future)
// console.log(Date.now());

// const future = new Date(2082,10,15,23,5);
// console.log(+(future));

// const calDayPassed = (date1,date2) => Math.abs(date2-date1)/(1000*60*60*24);

// const day1 = calDayPassed(new Date(2037,3,4),new Date(2037,3,24));
// console.log(day1);





// const num = 378469356.23;
// const options = {
//   style:'unit',
//   unit:'celsius',
//   currency:'EUR'
// };



// console.log(new Intl.NumberFormat('en-US',options).format(num));
// console.log(new Intl.NumberFormat('de-DE',options).format(num));
// console.log(new Intl.NumberFormat('ar-SY',options).format(num));

// set Time Out
// setTimeout(()=> console.log('Your pizza is Here.'),3000);
// console.log('Waiting....');

// with Parameters
// setTimeout((ing1,ing2)=> console.log(`Your Pizza is Here with ${ing1} and ${ing2}`),3000,'olives','spinich')
// console.log('Waiting....');


// clearing setTimeout
const ing = ['Spinach','olives'];
const pizzatimer = setTimeout((ing1,ing2)=> console.log(`Your Pizza is Here with ${ing1} and ${ing2}`),300,...ing);
console.log('Waiting....');

if(ing.includes('Spinach')) clearTimeout(pizzatimer);


// setInterval
// setInterval(function(){
//   const now = new Date();
//   console.log(now);
// },1000);

// clock
setInterval(function(){
  const now = new Date();
  const hours = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const clock = `${hours} : ${min} : ${sec}`;
  console.log(clock);

},1000)