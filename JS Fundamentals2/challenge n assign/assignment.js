'use strict';
/*
// LECTURE: Functions

1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries.
 Store the returned values in 3 different variables, and log them to the console

 soln ---->

function describeCountry(country,population,capitalCity){
    console.log(`${country} has ${population} million peopple and its capital city is ${capitalCity}`);

}
describeCountry("India",12,"Delhi");
describeCountry("US",15,"LA");
describeCountry("UK",10,"London");
---------------------------------------------------------------------------------------------------------
*/

/*
// LECTURE: Function Declarations vs. Expressions

1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be he same populations)

soln------>>>>>>

function percentageOfWorld1(population){
    const percent = (population/7900)*100;
    return percent;
}
console.log(percentageOfWorld1(1441));  // calling function

// by function expression
const percentageOfWorld2 = function(population){
    const percent2 = (population/7900)*100;
    return percent2;
}
console.log(percentageOfWorld2(1441)); // calling function

-------------------------------------------------------------------------------------------------
*/

/*
------------------------------------------------------------------------------------------------
// LECTURE: Arrow Functions

1. Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld3'

const percentageOfWorld3 = pouplation =>  (pouplation/7900)*100;
console.log(percentageOfWorld3(1440));
-------------------------------------------------------------------------------------------
*/

/*
---------------------------------------------------------------------------------------------------------------------------------
LECTURE: Functions Calling Other Functions

1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice

/// Solu.....

function percentageOfWorld1(population1){
    const percent = (population1/7900)*100;
    return percent;
}

function describePopulation(country,population){
    const percentage2 = percentageOfWorld1(population);
    return (`${country} has ${population} which is about ${percentage2} of the world.`)
}

console.log(describePopulation('India',1414));
console.log(describePopulation('London',1200));
console.log(describePopulation('US',1200));
--------------------------------------------------------------------------------------------------------
*/

/*
-----------------------------------------------------------------------------------
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice. 
You may use the values you have been using previously. Store this array into a 
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the 
world population for these 4 population values. Use the function 
'percentageOfWorld1' that you created earlier to compute the 4 
percentage values


const populations = [19980,12234,155658,16781];
console.log(populations.length);

function populationPercent(population1){
    return (population1/7900)*100;
}

const percentage = [populationPercent(populations[0]),populationPercent(populations[1]),populationPercent(populations[populations.length -1])];
console.log(percentage);
----------------------------------------------------------------------------------------------
*/

/*
----------------------------------------------------------------------------------------
LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your 
choice. Choose a country which has at least 2 or 3 neighbours. Store the array 
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of 
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from 
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the 
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the 
index of the country in the 'neighbours' array, and then use that index to 
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'


const neighbours = ['India','Sweden','China','Bangladesh'];
neighbours.push('uthophia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(neighbours.includes('Germany')){
    console.log("Country Found!")
}else{
    console.log('Probably not a central European country :D')
}

console.log(neighbours.indexOf('Sweden'));
neighbours[1] = 'Republic of Swwden';
console.log(neighbours);

-------------------------------------------------------------------------------------------
*/
/*

LECTURE: Introduction to Objects

1. Create an object called 'myCountry' for a country of your choice, containing 
properties 'country', 'capital', 'language', 'population' and 
'neighbours' (an array like we used in previous assignments)


const myCountry = {
    country:'India',
    capital:'Delhi',
    language:'Hindi',
    population:1200.
    
}
console.log(myCountry);
-------------------------------------------------------------------------------------------
*/

/*
------------------------------------------------------------------------------------------

LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the 
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then 
decrease it by two million using brackets notation

const myCountry = {
    country:'India',
    capital:'Delhi',
    language:'Hindi',
    population:6,
    neighbours:['Russia','China','Sri Lanka']
}
console.log(myCountry);
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people
, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population = myCountry.population + 2;
console.log(myCountry.population);

myCountry.population -= 2;
console.log(myCountry.population);
--------------------------------------------------------------------------------------------
*/

/*
-----------------------------------------------------------------------------------------------
LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method 
will log a string to the console, similar to the string logged in the previous 
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This 
method will set a new property on the object, called 'isIsland'. 
'isIsland' will be true if there are no neighbouring countries, and false if 
there are. Use the ternary operator to set the property.

'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki

const myCountry = {
    country:'India',
    capital:'Delhi',
    language:'Hindi',
    population:6,
    neighbours:['Russia','China','Sri Lanka'],
    isIland : true,

    describe:function(){
        return (` ${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring 
        countries and a capital called ${this.capital}`);
    },
    
    isIland1:function(){
        if(this.neighbours.length === 0){
            return  true;
        }
        else{
            return false;
        }
    }
}

console.log(myCountry.describe());
console.log(myCountry.isIland1());

----------------------------------------------------------------------------------------------------------------------
*/

/*
---------------------------------------------------------------------------------------------------
LECTURE: Iteration: The for Loop
1. There are elections in your country! In a small town, there are only 50 voters. 
Use a for loop to simulate the 50 people voting, by logging a string like this to 
the console (for numbers 1 to 50): 'Voter number 1 is currently voting


for(let voters = 1; voters <= 50; voters++){
    console.log(`Voter number ${voters} is currently voting`);
}
------------------------------------------------------------------------------------------------
*/

/*
LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the 
percentages of the world population for the 4 population values. Use the 
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the 
'percentages' array that we created manually in  the previous assignment and reflect
 on how much better this solution is,

 function populationPercent(population1){
     return (population1/7900)*100;
 }
 const perecentage2 = []
 const populations = [19980,12234,155658,16781];
 
 for(let i = 0; i<populations.length; i++){
     perecentage2.push(populationPercent(populations[i]));
 }
 ---------------------------------------------------------------------------------
*/

/*
-----------------------------------------------------------------------------------------
LECTURE: Looping Backwards and Loops in Loops
1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire 
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't 
worry if it's too difficult for you! But you can still try to figure this out anyway 


const listOfNeighbours = [['Canada','Mexico'],['Spain'],['Norway','Sweden','Russia']]

for(let i=0; i<listOfNeighbours.length; i++){
    for(let j=0; j<listOfNeighbours[i].length; j++){
        console.log(listOfNeighbours[i][j]);
    }
}

--------------------------------------------------------------------------------------------
*/


/*
---------------------------------------------------------------------------------------------
LECTURE: The while Loop
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', 
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?


function populationPercent(population1){
    return (population1/7900)*100;
}
const perecentage3 = []
const populations = [19980,12234,155658,16781];

let i =0;
while(i < populations.length){
    perecentage3.push(populationPercent(populations[i]));
    i++;
}
console.log(perecentage3);
-------------------------------------------------------------------------------------------
*/



