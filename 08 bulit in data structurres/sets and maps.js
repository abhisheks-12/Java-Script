// 'use strict';



const ordersSet = new Set ([
  'pasta',
  'pizza',
  'pasta',
  'burger',
  'pizza']);

console.log(ordersSet);

console.log(new Set('Abhishek'));

// set Methods
console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.delete('burger');
// ordersSet.clear();

console.log(ordersSet);

// looping over sets
for(const i of ordersSet)console.log(i);

const staff = ['waiter','chef','waiter','manager','chef','waiter','manager'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set('Abhishek').size);


/////////////////// maps //////////////////////

const rest = new Map();
rest.set('name','Classico Italiano');
rest.set(1,'Firenze Italy');
console.log(rest.set(2,'Lisbo, Portugal'));

rest
  .set('categories',['Italian','Vegetarian','Organic'])
  .set('open',11)
  .set('close',23)
  .set(true,'We are open:D')
  .set(false,'We rae closed :(')

// get elements or keys of set
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));


// small exe
const time = 21;
if(time > rest.get('open')){
  console.log(rest.get(true));
}else{
  console.log(rest.get(false));
}

// has => key and value is present or not
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// console.log(rest.clear)

// setting to arrays
const arr = [1,2];
rest.set(arr,'test');
// rest.set([1,2],"test"); --> we cant do that
console.log(rest.get(arr)); 


// setting to dom
rest.set(document.querySelector('.title'),'Heading');
console.log(rest);



// Another method to setting an object
const question = new Map([
  ['question','what is Best lang in the world ?'],
  [1,'C'],
  [2,'Java'],
  [3,'Java Script'],
  ['correct',3],
  [true,'Correct'],
  [false,'Try Again']
]);
console.log(question);


// convert object to map
const obj = {
  openingHours:{
    fri:{
      open:11,
      close:00
    },
    sat: {
      open:10,
      close:4
    }
  }
};


console.log(Object.entries(obj.openingHours));
const hoursMap = new Map(Object.entries(obj.openingHours)); 
console.log( hoursMap);

// small quiz

// question
console.log(question.get('question'));
for(const [key,value] of question){
  if(typeof key === 'number'){
    console.log(`Answer ${key}: ${value}`);
  }
}

// const ans = Number(prompt('Enter the Ans?'));
const ans = 3
console.log(ans);
if(ans === question.get('correct')){
  console.log(question.get(true));
}else{
  console.log(question.get(false));
}

// convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question.entries()]);