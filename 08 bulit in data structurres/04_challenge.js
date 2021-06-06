'use strict';

/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click',function(){
  const text = document.querySelector('textarea').value;
  
  const names = text.split('\n');
  // console.log(names);
  for(const [i,name] of names.entries()){
    const nameCamel = name.toLowerCase().trim().split('_');
    const[i,j] = nameCamel;
    const camelCase = i[0].toUpperCase() + i.slice(1) + j[0].toUpperCase() + j.slice(1);
    console.log(` ${camelCase.padEnd(20)} ${'✅'.repeat(i+1)}`);
  }
});
  
// 2.
const flights = 
`_Delayed_Departure;fao93766109;txl2133758440;11:25
_Arrival;bru0943384722;fao93766109;11:45
_Delayed_Arrival;hel7439299980;fao93766109;12:05
_Departure;fao93766109;lis2323639855;12:30`;


// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const splitFlights = flights.split('\n');

for(const fligth of splitFlights){
  const[type,from,to,time] = fligth.split(';');
  if(type.startsWith('_Delayed')){
    
   const ouput = `${'🔴'} ${type.replaceAll('_',' ')} from ${from.replace(/\d+/g, '').toUpperCase()} to  
   ${to.replace(/\d+/g, '').toUpperCase()} 
  (${time.replace(':','h')})`;
  console.log(ouput);
  }
  else{
    console.log(`  ${type.replaceAll('_',' ')} from ${from.replace(/\d+/g, '').toUpperCase()} to  
    ${to.replace(/\d+/g, '').toUpperCase()} 
   (${time.replace(':','h')})`);
  }
  
  
}
