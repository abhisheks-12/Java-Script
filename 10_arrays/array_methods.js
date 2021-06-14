'use strict';

slice
let arr = ['a','b','c','d','e'];
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(1,-2));
console.log(arr.slice());  //shallow copy

// splice
// it changes orignal arr
console.log(arr.splice(2));
arr.splice(-1);
console.log(arr); // IT took out content of arr

// reverse
arr = ['a','b','c','d','e'];
const arr2 = ['j','i','h','g','f'];
console.log(arr2.reverse());
console.log(arr2);

// concat
const wholeArr = arr.concat(arr2);
console.log(wholeArr);

// join method
console.log(wholeArr.join('-'));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for off loop
for(const [i,movement] of movements.entries()){
  if(movement > 0){
    console.log(`Movement${i+1}: You desposited ${movement}`);
  }else{
    console.log(`Movement${i+1}: You withdrew ${movement}`);
  }
}


// for(const movement of movements){
//   if(movement > 0){
//     console.log(`You desposited ${movement}`);
//   }else{
//     console.log(`You withdrew ${movement}`);
//   }
// }

console.log('------------------------------------------------------------------------------')

// for each loop
// call back fuunction
movements.forEach(function(mov,i,arr){
  if(mov > 0){
    console.log(`Movement${i+1}: You desposited ${mov}`);
  }else{
    console.log(`Movement${i+1}: You withdrew ${mov}`);
  }
});
// 0: function(200);
// 1: function(450);
// 2: function(400);


// forEach with maps and sets

// map
const currencies = new Map([
  ['USD','United States Dollar'],
  ['EUR','Euro'],
  ['GBP','Pound sterling']
]);

currencies.forEach(function(value,key,map){
  console.log(`${key}: ${value}`);
});

// set
const currenciesUnique = new Set(['USD','IND','GBP','EURO','EURO','IND']);
currenciesUnique.forEach(function(value,key,map){
  console.log(`${key}: ${value}`);
});