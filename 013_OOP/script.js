'use strict';


// constructor function

 function Person(firstName,birthYear) {

  // Instance Properties
   this.firstName = firstName;
   this.birthYear = birthYear;

  // Never do this
  //  this.calcAge = function(){
  //    console.log(2037-this.birthYear);
  //  }
 }

const jonas  = new Person('Jonas',1991);
console.log(jonas)

//  1.new (empty object) {} is created
// 2. function is called this= {}
// 3. {} linked to prototype
// 4. function automaticall return {}

const matila = new Person('Matila',1995);
const jack = new Person('jack',2005);
console.log(jack,matila)

console.log(jonas instanceof Person);

/////////////////////////////

// prototypes
console.log(Person.prototype)


Person.prototype.calAge = function(){
  console.log(2037 - this.birthYear);
};

jonas.calAge();
matila.calAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matila));
console.log(Person.prototype.isPrototypeOf(Person));


Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species,matila.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// Object .prototype is top of prototype chain
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

/////////////////////////
// Arrays

const arr = [1,2,3,4,4,3,5,5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// Here we created new method array
Array.prototype.unique = function(){
  return [...new Set(this)];
}
console.log(arr.unique());

const h1 = document.querySelector('h1');



////////////////////////////////////////
// Classes

// class expression
// const PersonCl = class{} 

// Class Declaration
class  PersonCl{
  constructor(firstName,birthYear) {
    this.fullName = firstName;
    this.birthYear = birthYear;
  }
  // Methods  will be added  to .prototype Property
  calAge(){
    console.log(2037-this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age(){
    return 2037 - this.birthYear;
  }
 
  // set a prop that already exist
  set fullName(name){
    if(name.includes(' ')){
      this._fullName = name;
    }else{
      alert(`${name} is not full nmae`);
    }
  }

  get fullName(){
    return this._fullName;
  }

  // static Method
  static Hey() {
    console.log('Hey There');
    console.log(this);
  }
}


const jessica = new PersonCl('Jessica Davis',1996)
console.log(jessica);
jessica.calAge();
jessica.greet();
console.log(jessica.age);


const walter = new PersonCl('Walter',1965);

// static Method
PersonCl.Hey();

//Just to show 
// PersonCl.prototype.greet = function(){
//   console.log(`Hey ${this.firstName} `);
// }
// jessica.greet();


// 1.classes are not hoisted
// 2.Classes are first class citizen
// 3.Classses are executed in strict mode


// Getters and Setters

const account = {
  owner:'Jonas',
  movements:[200,530,120],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov){
    this.movements.push(mov);
  }
}

console.log(account.latest);
account.latest = 150;
console.log(account.movements);


// Prototype

const personProto = {
  calcAge(){
    console.log(2037-this.birthYear);
  },
  init(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(personProto);
console.log(steven);
steven.name = 'steven';
steven.birthYear = 2002;
steven.calcAge();

Sarah.init('Sarah',1956);
Sarah.calAge();

