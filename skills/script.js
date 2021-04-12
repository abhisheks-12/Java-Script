"use strict";

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

/*
console.log('Hello World')

function calcTempAmplitude(t1,t2){
    const temps = t1.concat(t2);

    let max = temps[0];
    let min = temps[0];
    for(let i=0; i<temps.length; i++){

        if(typeof temps[i] !== 'number'){
            continue;
        }

        if(temps[i] > max){
            max = temps[i];
        }
        if(temps[i] < min){
            min = temps[i];
        }
    }
    console.log(temps); // printing concated array
    console.log(max,min); 
    return max - min;
    
}

const ans = calcTempAmplitude([10,12,15,'error'],[10,20,50]);
console.log(ans);
-------------------------------------------------------------------------------------------------------------------
*/

/*

function measureKelvin(){
        const measurement = {
            type:'temp',
            unit:'celcuis',
            value: Number(prompt('Degree Celcuis:'))
        };
        console.table(measurement);

        const kelvin = measurement.value + 273;
        return kelvin;
};

console.log(measureKelvin());
-------------------------------------------------------------------------------------------------------------------
*/

/*
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

function printForecast(arr){
    let a;
    for(let i=0; i<arr.length; i++){
        a = (`${arr[i]}C in ${i+1} in days`);
        console.log(a);
    }
    
}

printForecast([17, 21, 23]);

