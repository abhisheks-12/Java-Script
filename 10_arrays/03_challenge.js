'use strict';
// fill
// const x = new Array(7);
// x.fill(1);
// console.log(x);

// // From
// const y = Array.from({length: 7},()=>1);
// console.log(y);

// const z = Array.from({length:7},(_,i)=> i+1);
// console.log(z);

/*

Coding Challenge #4
Julia and Kate are still studying dogs, and this time they are studying if dogs are 
eating too much or too little.
Eating too much means the dog's current food portion is larger than the 
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% 
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
the recommended food portion and add it to the object as a new property. Do 
not create a new array, simply loop over the array. Forumla: 
recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too 
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose) �
3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and 
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food 
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food 
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects �
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(function(pet){
  pet.recommendedFood = Math.trunc(pet.weight ** 0.75 * 28);
});

// 2.
dogs.forEach(function(pet){
  if(pet.owners.includes('Sarah')){
    const eatingAmount = pet.curFood > pet.recommendedFood ? 'Too Much':'Too Low';
    console.log(`Sarah dog eating ${eatingAmount} food`);
  }
});

// 3.
  const ownersEatTooMuch = [];
  const ownersEatTooLittle = [];

dogs.forEach(function(pet){
  if(pet.curFood > pet.recommendedFood){
    ownersEatTooMuch.push(pet.owners);
  }
});
console.log(ownersEatTooMuch.flat());

dogs.forEach(function(pet){
  if(pet.curFood < pet.recommendedFood){
    ownersEatTooLittle.push(pet.owners);
  }
});
console.log(ownersEatTooLittle.flat());




// 4. 
const [x,y,z] = ownersEatTooMuch;
const [a,b,c] = ownersEatTooLittle;
console.log(`" ${x} and ${y} and ${z}'s dogs eat too much`);
console.log(`" ${a} and ${b} and ${c}'s dogs eat too much`);


// 5. 
const check = dogs.some((pet)=>pet.curFood === pet.recommendedFood);
console.log(check);

// 6
// const dogsOkayFood = [];
// if(dogs.some((pet)=>pet.current > (pet.recommended * 0.90) && pet.current < (pet.recommended * 1.10))){
//   dogsOkayFood.push()
// }
const checkEatingOkay = dog => 
 dog.current > (dog.recommended * 0.90) && dog.current < (dog.recommended * 1.10);
console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
console.log(dogs.sort((a,b)=> a.recommendedFood - b.recommendedFood));