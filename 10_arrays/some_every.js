const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.includes(-130));

// condition
// some Method
const anyDeposit = movements.some(mov => mov > 2000);
console.log(anyDeposit);

// every
console.log(movements.every(mov => mov > 0));

console.log('----------------------------------------------');
// Seperate Callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// flat and  flatmap

const arr = [[1,2,3],[4,5,6],7,8];
console.log(arr.flat());

const arrDeep = [[[1,2,3],[4,[5,6]],7,8]];
console.log(arrDeep.flat(3));

// Using map and flat together
// const accMov = accounts.map(acc=>acc.movements)
// const ac = accMov.flat();

console.log('----------------------------------------------------');

//////////////////// Sorting/////////////////////////////

const owners = ['Jonas','Zach','Adams','Martha'];
console.log(owners.sort());
console.log(owners);

// numbers
// return < 0 ,A,B (keep oredr)
// return > 0 B,A (switch oredr)

// assending
// movements.sort((a,b)=>{
//   if(a > b) return 1;
//   if(a < b) return -1;
// });
// console.log(movements);

movements.sort((a,b)=> a-b);
console.log(movements);

// discending
// movements.sort((a,b)=> {
//   if(a > b) return -1;
//   if(a < b) return 1;
// });
// console.log(movements);

movements.sort((a,b)=> b - a);
console.log(movements);