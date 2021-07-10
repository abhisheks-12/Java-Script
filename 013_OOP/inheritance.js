'use strict';


function Person(firstName,birthYear) {
   this.firstName = firstName;
   this.birthYear = birthYear;
 };

 Person.prototype.calcAge = function(){
   console.log(2037 - this.birthYear);
 };


 function Student(firstName,birthYear,course) {
  //  this.firstName = firstName;
  //  this.birthYear = birthYear;

  // We called function
  Person.call(this,firstName,birthYear);
   this.course = course;
 }

//  LInking Prototyoe
Student.prototype = Object.create(Person.prototype);



 Student.prototype.introduce = function(){
   console.log(`${this.firstName} is my Name and ${this.birthYear} and course is ${this.course}`);
 }

const mike = new Student('Mike',2020,'CS');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);



/////////////////////////////////////////////////
// Class Syntax

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


class StudentCl extends PersonCl {
 constructor(fullName,birthYear,course){

  // Always First
  super(fullName,birthYear)
  this.course = course;

 }

 introduce (){
  console.log(`${this.fullName} is my Name and ${this.birthYear} and course is ${this.course}`);
}

calAge(){
  console.log(` This is my New age ${2037-this.birthYear}`);
}
}

const martha = new StudentCl('Martha Jones',2012,'CS');
martha.introduce()
martha.calAge();

//////////////////////////////////////
// Object .create

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


const StudentProto = Object.create(personProto);
StudentProto.init = function(firstName,birthYear,course){
  personProto.init.call(this,firstName,birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);
jay.init('jay',2010,'cs');
jay.introduce();
jay.calAge()

