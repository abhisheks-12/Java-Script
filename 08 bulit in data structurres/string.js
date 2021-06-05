'use strict';

const airLine = 'TAP Air Portugal';
const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);
// console.log(airLine.length);
// console.log('B373'.length);

// console.log(airLine.indexOf('r'));
// console.log(airLine.lastIndexOf('r'));
// console.log(airLine.indexOf('India'));


// console.log(airLine.slice(4));
// console.log(airLine.slice(4,7));


// console.log(airLine.slice(0,airLine.indexOf(' ')));
// console.log(airLine.slice(airLine.lastIndexOf(' ')));

// console.log(airLine.slice(-2));
// console.log(airLine.slice(1,-1));

// function checkMiddleSeat(seat){
//   // B and E are Middle sits
//   const s = seat.slice(-1);
//   if(s === 'E' || s === 'B'){
//     console.log('You got Middle seat');
//   }else{
//     console.log('U got lucky');
//   }

// } 
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// String Methods

// console.log(airLine.toLowerCase());
// console.log(airLine.toUpperCase());
// console.log('jonas'.toUpperCase());

// // Fix Capitalization in name
// // const passenger = 'abHishek';
// // const passengerLower = passenger.toLowerCase();
// // const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
// // console.log(passengerCorrect);

// function correctName(name){
//   const nameLower =  name.toLowerCase();
//   const trueName = nameLower[0].toUpperCase() + nameLower.slice(1);
//   console.log(trueName);
// }
// correctName('abHIshek');

// // Comparing Emails
// const email = 'hello@gmail.com';
// const loginEmail = '    hello@Gmail.com \n';

// const correcEmail = loginEmail.toLowerCase().trim();
// console.log(correcEmail);

// // replacing

// const priceGB = '288,97$';
// const priceIndia = priceGB.replace('$',' Rs').replace(',','.')
// console.log(priceIndia);

// const announcement = 'All paasengers come to the barding door 23.Boarding door 23';
// console.log(announcement.replace('door','gate'));
// // console.log(announcement.replaceAll('door','gate'));

// // Regular Expressions
// console.log(announcement.replace(/door/g ,'gate'));

// // Booleans
// const plane1 = 'Airbus A320neo';
// console.log(plane1.includes('A320'));
// console.log(plane1.includes('Boeing'));
// console.log(plane1.startsWith('Air'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')){
//   console.log('Part of airbus family');
// }

// // Pratice Exercise
// function checkBaggage(items){
//   items.toLowerCase();
//   if(items.includes('gun') || items.includes('knife')){
//     console.log('u r not allowed');
//   }else{
//     console.log('Welcome aboard')
//   }
// }

// checkBaggage('I have laptop , some Food and Pocket  knife');
// checkBaggage('socks and camera');
// checkBaggage('Got some snack and gun for protection');


// // split and join
// console.log('a+very+nice+str'.split('+'));
// console.log('Abhishek  Sankpal'.split('  '));

// const[firstName, lastName] = 'Abhishek  Sankpal'.split('  ');
// // console.log(`Mr.${firstName} ${lastName.toUpperCase()}`);

// const newName = ['Mr.',firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// function capitalizeName(name){
//   const names = name.split(' ');
//   const arrCorrectNames = [];
//   for(const n of names){
//     // const ans = n[0].toUpperCase() + n.slice(1);
//     const ans = n.replace(n[0],n[0].toUpperCase());
//     arrCorrectNames.push(ans);
//   }
//   console.log(arrCorrectNames.join(' '));
// }

// capitalizeName('jessica ann smith davis');
// capitalizeName('jon doe');

// // padding string
// const msg = 'Go to gate 23!';
// console.log(msg.padStart(25,'+').padEnd(35,'+'));
// console.log('Jonas'.padStart(25,'+').padEnd(35,'-'));

// // Masking function credit card
// function maskCredit(number){
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// }

// console.log(maskCredit(922615564466333));

// // Repeat
// const msg2 = 'Bad weather .... All Departures Delayed...';
// console.log(msg2.repeat(5));


// // function planeLine(n){
// // //   console.log(`There are ${n} in line ${n}.repeat(5)`);
// // // }

// // planeLine(5);
