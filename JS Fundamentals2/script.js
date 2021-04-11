'use strict';
/*
let hasDriverLicense = false;
let passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log('I can drive it :D');

const interface = "Audio";
const private = "534";
----------------------------------------------------------------------
*/

/*
--------------------------------------------------------------------------
// FUNCTIONS
function logger(){
    console.log('My name  is Abhishek');
}
// calling / running /invoking function 
logger();
logger();
logger();

function fruitProcessor(apples,oranges){
    
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;

}
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

Number('23'); // number is build in fun to covert strings to number;
---------------------------------------------------------------------------------------------------
*/

/*
---------------------------------------------------------------------------------------------------
// function declaration 

function calAge(birthYear){
    return 2021 - birthYear;
}
const age1  = calAge(1998);
console.log(age1);

// function expression and expression produces values....

const calAge2 = function(birthYear){
    return 2021 - birthYear;
}
const age2 = calAge(1998);
console.log(age2);
------------------------------------------------------------------------------------------------------
*/

/*
// Arrow function in js

// arrow function
const calAge3 = birthYear => 2021 - birthYear;
const age3 = calAge3(1998); // calls  the function
console.log(age3); // printing  

const yearUntilRetirement = (birthYear,firstName) => {
    const age = 2021 - birthYear;
    const retirement = 59 - age;
    // return retirement;
    return (`${firstName} retires after ${retirement}  years.`);
} 
console.log(yearUntilRetirement(1998,"Abhishek"));
console.log(yearUntilRetirement(1997,"Jonas"));
----------------------------------------------------------------------------
*/


/*
-------------------------------------------------------------------------------------------------------------------------------
// calling function inside the function

function cutFruitPieces(fruit){
    return fruit* 4;
}

function fruitProcessor(apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);


    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces oranges`;
    return juice;
}

console.log(fruitProcessor(2,3));
-----------------------------------------------------------------------------------------------------------
*/

/*
-----------------------------------------------------------------------------------------------------------
const calAge = function(birthYear){
    return 2037 - birthYear;
} 

const yearUntilRetirement = function (birthYear,firstName){
    const age = calAge(birthYear);
    const retirement = 59 - age;
    // return retirement;
    if(retirement > 0){
        return (`${firstName} retires after ${retirement}  years.`);
    }
    else{
        return -1;
    }
} 

console.log(yearUntilRetirement(1998,"Abhishek"));
console.log(yearUntilRetirement(1950,"Mike"));
-----------------------------------------------------------------------------------------------------------------
*/

/*
-------------------------------------------------------------------------------------------------------------------
// First data structure
// Arrays

const friends = ['tony','Ron','harry','captian'];
console.log(friends);
// const years = new Array(1991,1987,1956,1567);

console.log(friends[0]);
console.log(friends[3]);

console.log(friends.length);
console.log(friends[friends.length - 1]); 

friends[2] = 'Hulk';
console.log(friends);
// friends = ['black_widow','batman']; error 

const firstName = "Abhishek";
const abhishek = [firstName,'sankpal', 2021 -  1998 , 'student',friends];
console.log(abhishek);
console.log(abhishek.length); 

// Exercise
const calAge = function(birthYear){
    return 2037 - birthYear;
}

const  year = [1998,1967,2002,2010,2018];

//  here if  we call fumnction and put array in it will return NAN;
// console.log(calAge(year));

const age = calAge(year[0]);
const age2 = calAge(year[1]);
const age3 = calAge(year[year.length -1]);
console.log(age,age2,age3);

// Calling functions inside the arrays
const  ages = [calAge(year[0]), calAge(year[1]) , calAge(year[year.length - 1])];
console.log(ages);
----------------------------------------------------------------------------------------------------------
*/

/*
// Methods of arrays
// add elements
const friends = ['Steven','Tony','Hulk'];
friends.push('Loki');
console.log(friends);

friends.unshift('black widow');
console.log(friends);

// Remove elemennts
// friends.pop()
const poppedElement  = friends.pop();
console.log(poppedElement);
console.log(friends);

friends.shift();
console.log(friends);

//  to find index
console.log(friends.indexOf('Tony'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Tony'));
console.log(friends.includes('Bob'));

if(friends.includes('Steven')){
    console.log('Gotch YA');
}
------------------------------------------------------------------------
*/

/*
---------------------------------------------------------------------------------


// Another data structure 
// OBJECTS =====> object literals

const steve = {
    firstName:'Steven',
    lastName:'Rogers',
    age: 2021 - 1920,
    job: 'to_save_world',
    friend:['tony','hulk','thor']
}
console.log(steve);

console.log(steve.firstName);
console.log(steve['firstName']);

const keyName = 'Name';
console.log(steve['first' + keyName]);
console.log(steve['last' + keyName]);

const intersetedIn =prompt('What to  you want to know about steve choose firstName,lastName,age,job and friends?');
console.log(intersetedIn);

if(steve[intersetedIn]){
    console.log(steve[intersetedIn]);
}else{
    console.log('Wrong request');
}

steve.location = 'Washington';
steve['twitter'] = '@steven_rogers';
console.log(steve);

// challenge
// steven has 3 friends , and his best friend is called tony.
console.log(`${steve['firstName']} has ${steve['friend'].length} friends and best friend is called ${steve['friend'][0]}`)
console.log(`${steve.firstName} has ${steve.friend.length} friends and best friend is called ${steve.friend[0]}`);
// console.log(steve.friend.length);
// console.log(steve['friend'].length);

------------------------------------------------------------
//second example  of object 

const batman = {
    firstName:'Bruce',
    lastName:'Wayne',
    age:2021 - 1981,
    job:'Detective',
    friends:['Superman','AquaMan','Wonder woman']
}

console.log(batman.firstName);;
console.log(batman['lastName']);

const nameKey = 'Name';
console.log(batman['first' + nameKey]);
console.log(batman['last' + nameKey]);

const intIn = prompt('What to  you want to know about steve choose firstName,lastName,age,job and friends?');

if(batman[intIn]){
    console.log(batman[intIn]);
}
else{
    console.log('wrong request !');
}

batman['city'] = 'Gotham';
batman.company = 'Wayne Enterprise3';
console.log(batman);

console.log(`${batman.firstName} has ${batman.friends.length} friends and best friend is called ${batman.friends[0]}`);

-------------------------------------------------------------------------------------
*/

/*
---------------------------------------------------------------------------------------
// OBJECT METHODS
//  only function expression can bes used in object as a method.
const steve = {
    firstName:'Steven',
    lastName:'Rogers',
    birthYear: 1991,
    age:42,
    job: 'to_save_world',
    friend:['tony','hulk','thor'],
    hasDriverLicense: true,

    // calcAge:function(birthYear){
    //     return 2037 - birthYear;
    // }
    
    
    // calcAge:function(){
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getInfo : function(){
        if(this.hasDriverLicense){
            return (`${this.firstName} is ${this.age} and he has driving License.`);
        }
        else{
            return (`${this.firstName} is ${this.age} and he don't have driving License.`);
        }

    }
    
};

console.log(steve.calcAge());
console.log(steve['calcAge'](1991));
console.log(steve.calcAge());
console.log(steve.calcAge());
console.log(steve.calcAge());
console.log(steve.calcAge());
console.log(steve.age);
console.log(steve.calcAge());

// challenge
console.log(steve.getInfo());
---------------------------------------------------------------------------------------------
*/


/*
--------------------------------------------------------------------------------------------------
// LOOPS

for(let rep=1; rep<=10; rep++){
    console.log(`Lifting weigths repetition ${rep}`);
}


const batman = [
    'jonas',
    'wayne',
    2037 - 1973,
    'teacher',
    ['Michele','Peter','Steven'],
    true
];

const dataTypeArr = [];

for(let i=0; i<batman.length; i++){
    console.log(batman[i]);

    // Filling empty array
    // dataTypeArr[i] = typeof batman[i];
    dataTypeArr.push(typeof batman[i]);
}
console.log(dataTypeArr);


const years = [1991,2007,1969,2020];
const ages = [];

for(let i=0; i<years.length; i++){
    ages.push(2037-years[i]);
}

console.log(ages);


// CONTINUE and BREAK;
console.log('--------ONLY STRING -----------');
for(let i=0; i<batman.length; i++){
    if(typeof batman[i] !== 'string')continue;

    console.log(batman[i],typeof batman[i]);
}

console.log('--------BREAK WITH NUMBER -----------');
for(let i=0; i<batman.length; i++){
    if(typeof batman[i] !== 'number')break;

    console.log(batman[i],typeof batman[i]);
}
-----------------------------------------------------------------------------------------------------

// LOOP INSIDE THE LOOP
const batman = [
    'jonas',
    'wayne',
    2037 - 1973,
    'teacher',
    ['Michele','Peter','Steven'],
    true
    
];

for(let i=batman.length-1; i>=0; i--){
    console.log(i,batman[i]);
}

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`---------------Starting exercise ${exercise}`);

    for(let rep=1; rep<6; rep++){
        console.log(`Lifting weight repetation ${rep}`);
    }
}
 -----------------------------------------------------------------------------------------------------------


// While loop

let rep= 1;
while(rep <= 10){
    console.log(`WHILE : Lifting weigths repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6)console.log('LOoop is about to end!');
}

*/
