
// coding challenge
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76  m tall */

/*
// case 1
let heightMark = 1.69;
let  weightMark = 78;
let heightJohn = 1.95;
let  weightJohn = 92;

let bmiMark = weightMark/(heightMark ** 2);
let bmiJohn = weightJohn/(heightJohn ** 2);
let markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);

// case2 
heightMark = 1.88;
weightMark = 95;
heightJohn = 1.76;
weightJohn = 85;

bmiMark = weightMark/(heightMark ** 2);
bmiJohn = weightJohn/(heightJohn ** 2);
markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI); 
----------------------------------------------------------------------------------------
*/

/*
// challenge compare bmi   from previous example...
let heightMark = 1.69;
let  weightMark = 78;
let heightJohn = 1.95;
let  weightJohn = 92;

let bmiMark = weightMark/(heightMark ** 2);
let bmiJohn = weightJohn/(heightJohn ** 2);

if(bmiMark > bmiJohn){
        console.log(`Mark's BMI is higher than John and BMI of mark is ${bmiMark} and BMI of John is ${bmiJohn}...`)
}else{
        console.log(`Johns BMI is greater then marks and BMI of John is ${bmiJohn} and BMI of mark is ${bmiMark}` )
}
---------------------------------------------------------------------------------------------------
*/

/*
-------------------------------------------------------------------------------------------
#coding chalenge 3

There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


*/
/*
const scoreDolphins = (97 + 112 + 101)/3;
const scoreKolas = (109 + 95 + 106)/3;
console.log(scoreDolphins , scoreKolas);


if(scoreDolphins > scoreKolas && scoreDolphins >= 100){
        console.log("Dolphins won the match !");
}
else if(scoreKolas > scoreDolphins && scoreKolas >= 100){
        console.log("Kolas won the match !");
}
else if( scoreKolas === scoreDolphins  && scoreDolphins >= 100 && scoreKolas >= 100){
        console.log("Both win the match!")
}
else{
        console.log("no  one won the match!");
}
---------------------------------------------------------------------------------------------------
*/

/*
---------------------------------------------------------------------------------------------------
// # coding challenge 4


Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 .


const billvalue = 275;
let tip;
if(bill >= 50 && bill <= 300){
        tip = (billvalue)* (15/100);
        console.log(`The bill was ${billvalue} , the tip was ${tip} and total value is ${billvalue + tip}`);
}
else{
        tip = (billvalue)*(20/100);
        console.log(`The bill was ${billvalue} , the tip was ${tip} and total value is ${billvalue + tip}`);

}
 second appro
 
const billValue = 275;
const tip =  billValue >= 50 && billValue <= 300 ?  billValue * 0.15 : billValue * 0.2;
console.log(`The bill was ${billvalue} , the tip was ${tip} and total value is ${billvalue + tip}`);

--------------------------------------------------------------------------------------------------------------
*/

