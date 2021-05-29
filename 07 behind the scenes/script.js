"use strict";

/*
//  ////////////////// SCOPES  //////////////////


function calcAge(birthYear){
   const age = 2037 - birthYear;
   
   function printAge(){
      let output = `${firstName} u  are ${age} , born in ${birthYear}`;
      console.log(output);

      if(birthYear >= 1981 && birthYear <= 1996){
         var millenial = true;
         const firstName = 'steven';
         const str = `Oh you are a millenial ${firstName}`;
         console.log(str);

         function add(a,b){
            return a+b;
         }
         // console.log(add(3,5));
         output ='New Output';

      }
      // console.log(str);
      console.log(millenial);
      // console.log(add(3,5));
      console.log(output);
   }
   printAge();

   return age;
}

const firstName = 'Abhishek';
calcAge(1995);
// -------------------------------------------------------------



 /////////////////   Hoisting and TDZ /////////////////////////////


//  hoisting with variables
console.log(me);
console.log(job);
console.log(year);

 var me  = 'abhishek';
 let job = 'student';
 const year = 1991;



//  hoisting with function

console.log(add(2,3));
console.log(addExp(2,3));
console.log(addArrow);
// console.log(addArrow(2,3));

function add(a,b){
   return a+b;
}

const addExp = function(a,b){
   return a+b;
}


var addArrow = (a,b) => a+b;



// Examples
console.log(numProducts);
if(!numProducts){
   deleteShoppinCart();
}

var numProducts = 10; 

function deleteShoppinCart(){
   console.log('All Products are deleted!');
}

var x = 1;
let y = 2;
const z  = 3;


//////////////////////////////  This Keyword ////////////////////////

console.log(this); //Window obj

function calcAge(birthYear){
   console.log(2037 - birthYear);
   console.log(this);
}
calcAge(1998);


const calcAgeArrow = birthYear =>{
   console.log(2037 - birthYear);
   console.log(this);
}
calcAgeArrow(1998);


const bruce = {
   year:1998,
   calcAge:function(){
      console.log(this);
      console.log(2037 - this.year);
   }
}
bruce.calcAge()

const wonderWoman = {
   year:2017
}

// Assign value of bruce  to the wonder women
wonderWoman.calcAge = bruce.calcAge;
wonderWoman.calcAge();

const f = bruce.calcAge;
console.log(f);


// Another possiblity of this ////
const batman  = {
   year:1972,
   calAge:function(){
      console.log(this);
      console.log(2037 - this.year);
   }
}
batman.calAge();

const wonderWoman = {
   firstName: 'Princess Diana',
   age:15,
   year:1700
}
wonderWoman.calAge = batman.calAge
wonderWoman.calAge();



/////////  Arrow function vs Normal Function /////////////

// Arrow function don't  have acess to this keyword so it 
// will acess this keyword from global or window object
// var firstName = 'Superman';

const batman  = {
   firstName:'Bruce Wayne',
   year:1972,
   calAge:function(){
      // console.log(this);
      console.log(2037 - this.year);

      // const self = this;
      // const isMilllenial = function(){
      //    console.log(self);
      //    console.log(self.year >= 1981 && self.year <= 1996)
      //    // console.log(this);
      //    // console.log(this.year >= 1981 && this.year <= 1996)
      // };

      const isMilllenial=()=> {
         console.log(this);
         console.log(this.year >= 1981 && this.year <= 1996)
      };
      isMilllenial();
   },
   greet:() => {
   console.log(this);
   console.log(`Hey ${this.firstName}`);
   }
      
};
batman.greet();
batman.calAge();

// argument Keyword
const addExp = function(a,b){
   console.log(arguments)
   return a+b;
}
addExp(2,3,4,6);

var addArrow = (a,b) => {
   console.log(arguments);
   return a +b;
}

addArrow(3,5);




///////////////////////// Primitives vs Objects //////

// Primitives
let lastname = 'Rogers';
let oldlastName = lastname;
lastname = 'Wayne';
console.log(lastname);
console.log(oldlastName);

// object reference type
const jessica = {
   firstName:'Jessia',
   lastName: 'Jones',
   age:27
};

const marriedJesica = jessica;
marriedJesica.lastName = 'Cage';
console.log('Before Marriage:',jessica);
console.log('After Marriage:',marriedJesica);

// marriedJesica = {};



// Copying Object
const jessica2 = {
   firstName:'Jessia',
   lastName: 'Jones',
   age:27,
   family:['Luke','Punisher']
};

// Shallow Copy
const jessicaCopy = Object.assign({},jessica2);
jessicaCopy.lastName = 'Cage';

console.log(jessica2);
console.log(jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Jon');
console.log(jessica2);
console.log(jessicaCopy);


// Shallow Copy
const me = {
   firstName:'Steven',
   age:25
};

// const freind = me;
// freind.age = 50;
// console.log(me);
// console.log(freind);

const friend = Object.assign({},me);

friend.age = 60;
console.log(me);
console.log(friend);
*/