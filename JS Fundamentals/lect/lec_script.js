/*
INTRO

let js = "amazing";
console.log(40+8+23-10);

console.log("Abhishek");
console.log(23);

let firstName = "Abhishek";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let abhishek_i = "JM";
let $function = 27;

let Person = "Abhihsek";
let PI = 17.445;


let myFirstJob = "Mechanical Student";
let myCurrentJob = "Full stack dev";
------------------------------------------------------------------------------
*/


// DATA TYPES
/*
true;
console.log(true);

let javaScriptisFun = true;
console.log(javaScriptisFun);

console.log(typeof  javaScriptisFun);
// console.log(typeof  true);
// console.log(typeof  23);
// console.log(typeof  "jonas");

javaScriptisFun = "YES!";
console.log(typeof javaScriptisFun);

let yearT;
console.log(yearT);
console.log(typeof year);

yearT = 1991;
console.log(yearT);
console.log(typeof yearT);

console.log(typeof null);

-------------------------------------------------------------------------
*/

// let var const use
/*
let age = 30;
age = 31;
console.log(age);

const birthYear = 1998;
birthYear = 1999;
const gap;

var lastName = "sank";
lastName = "Sankpal";
console.log(lastName);
--------------------------------------------------------------------------
*/

// Maths operators 
/* 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now  - 2018;
console.log(ageJonas,ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2**3);
// 2**3 means 2 to the power of 3...

const fisrName = "Abhishek";
const lastName = "sankpal";
console.log(fisrName + " " +  lastName);

// assignament operators
let x = 10 + 5;
x += 10; // x = x + 10;
x *= 4; // x = x* 4
x++; // x = x+ 1;
x--;
x--;
console.log(x);

// comparison operator
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const fullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
----------------------------------------------------------------------------------------------------------------
*/

/*
Operator precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now  - 2018;
console.log(ageJonas,ageSarah);
console.log(now - 1991 > now - 2018);


let x , y;
x = y = 25 -10-5;// x = y = 10
console.log(x,y)

const averageAge = (ageJonas + ageSarah)/2;
console.log(averageAge);
------------------------------------------------------------------------------------------------------------------
*/



/*
// string and templates literals
const firstName = "Abhishek";
const job = "Engineer";
const birthYear = 1998;
const currentYear = 2037;

const abhishekAns = "I'm " + firstName + " ,a " + (currentYear - birthYear) +  " year old " + job + " ! ";
console.log(abhishekAns);

// in template literals we use back  tickk
const abhishekAns1 = `I'm  ${firstName} ,a ${currentYear - birthYear} years old ${job} !`;
console.log(abhishekAns1);

console.log(`I am normal string`);

console.log("I am \n\
the second \n\
Abhishek");

console.log(`Hello I
am 
back stick 
working fine`);
---------------------------------------------------------------------------------------------
*/

/*
// IF ELSE 
const age = 15;

if(age >= 18){
    console.log("sarah can start drving license.");
}else{
    const yearLeft = 18 - age;
    console.log(`sarah is too young she can wait ${yearLeft} years.`)
}

const birthYear = 1991;
let centuray;  // we declare variable outside if and else because it will not printed outside the blocks.
if(birthYear <= 2000){
    centuray = 20;
}else{
    centuray = 21;
}
console.log(centuray);
----------------------------------------------------------------------------------------------------------
*/


/*
// Type conversion & coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN)
console.log(String(23),23);

// type coercion
console.log("I am " + 23 + " Years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "18");

// guess game 
let n = "1" + 1;
n = n - 1;
console.log(n); // ans will be 10 according to rules.....
---------------------------------------------------------------------------------------------
*/

/*
// Truthy and Falsy operators...
//  5  falsy values  : 0, "", undefined , null , NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean ("Jonas"));
console.log(Boolean ({}));
console.log(Boolean(''));

const money = 0;
if(money){
    console.log("Dont't spend it at all:");
}
else{
    console.log("You should  get a job...")

}

let height;
if(height){
    console.log("YAY ! Height is defined!");
}
else{
    console.log("Height is undefined!");
}
--------------------------------------------------------------------------------------------------
*/

/*
// Equality operators
const age = '18';
if(age === 18) console.log("U become an adult :(Strict operator)");
if(age == 18) console.log("U become an adult :(Loose operator)");

// prompt function
const favourite = Number(prompt("What's your favourite  number ?")); //  casted string to number;
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){
    console.log("cool ! 23 is an amazing number");
}
else if(favourite === 7){
    console.log("7 is also cool number.")   
}
else if (favourite === 9){
    console.log("9 is also cool number.")
}
else{
    console.log("Number is not 23, 7 or 9.")
}
if( favourite !== 23) console.log("Why not 23!")
---------------------------------------------------------------------------------------------------------------
*/



/*
// Basic  operators THE AND OR & NOT OPERATORS

const hasDriversLicense = true;
const hasGoodVision  = true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if(hasDriversLicense && hasGoodVision){
    console.log("sarah is good driver");
}
else{
    console.log('Someone has to drive!');
}

const isTired = false;
if (hasDriversLicense && hasDriversLicense && !isTired){
    console.log("sarah is able to drive");
}
else{
    console.log("Someone else should drive!");
}
--------------------------------------------------------------------------------------------------
*/

/*
-------------------------------------------------------------------------------------------------
// The Switch Statement
const day = 'friday';
switch(day){
    case 'monday': // day === 'monday'
        console.log('plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log("prepare theory video.");
        break;
    case 'wednsday':
    case 'thursday':
        console.log("write the code example");
        break;

    case 'friday':
        console.log('Record the videos');
        break;
    case  'saturday':
    case 'Sunday':
        console.log("Enjoy the weekend");
        break;

    default:
        console.log("Not valid day!");
}


if(day === 'monday'){
    console.log('plan course structure');
    console.log('Go to coding meetup');
}
else if(day === 'tuesday'){
    console.log("prepare theory video.");
}
else if(day === 'wednsday' ||  day === 'thursday'){
    console.log("write the code example");
}
else if(day === 'tuesday'){
    console.log("prepare theory video.");
}
else if(day === 'friday'){
    console.log("REcord the videos.");
}
else if(day === 'saturday' || day === 'sunday'){
    console.log("Enjoy the Weekend");
}
else{
    console.log('Not valid day!');
}
---------------------------------------------------------------------------------------------------------------------------
*/

/*
---------------------------------------------------------------------------------------------------------------------------
// statemets and expression!

3 + 4;
1991;
true && false && !false;

if(23 > 10){
    const str = '23 is bigger';
}
const myName  = 'abhishek';
console.log(`I am ${2037 - 1998} years old ${myName}`);
-----------------------------------------------------------------------------------------------------------------------------
*/

// Conditional ternary oprators
/*
const age = 23;
age >= 18 ? console.log("I like to drink wine! ") : console.log("I like to drink water");

const drink = age >= 18 ?  "wine"  : "water";
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = 'drink wine';
}
else{
    drink2 ='Drink water';
}
console.log(drink2);

console.log(`I like to drink  ${age>=18 ? "wine" : "water"}`);
------------------------------------------------------------
*/


