'use strict';

//////////////////////////  map  ////////////////////////////////////////////

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * euroToUSD;
});
console.log(movementsUSD);

// for of
const USD = [];
for(const mov of movements){
  USD.push(mov*euroToUSD);
}
console.log(USD);

// same code with arrow function
const movementsUSDArrow = movements.map(mov => mov * euroToUSD);
console.log(movementsUSDArrow);


const movementDescription = movements.map(function (mov, i) {
  return(`Movement${i + 1}: You ${mov > 0 ? 'Deposited':'Withdrew'} ${mov}`);
});

console.log(movementDescription);

 ------------------------------------------------------------------------------------------------------------
*/



/////////////////////////// Filter ///////////////////////////////////////

/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function(mov){
  return mov > 0;
});

console.log(deposits);

const withDraws = movements.filter(function(mov){
    return mov < 0;
});
console.log(withDraws);
--------------------------------------------------------------------------------------------------------------
*/

//////////////////////// REDUCE //////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator is snowball ----- // >>>>>   here we can pass index arr as well like other methods
const balance  = movements.reduce(function(acc,curr,i,arr){
  console.log(`Iteration ${i}: ${acc}`);
  return acc + curr;
},0);                              // zero is acuumlator value it can be any value
console.log(balance);

//  Example second
const arr = [1,2,3,4];
function displayTotalBalance(arr){
  const bal = arr.reduce(function(acc,curr){
    return curr + acc;
  },0);
  console.log(bal);
}
displayTotalBalance(arr);


// find max with reduce
const max = movements.reduce(function(acc,mov){
  if(acc > mov){
    return acc;
  }else{
    return mov;
  }
},movements[0]);
console.log(max);