'use strict';


/////////////////////// Build Promise ////////////////////////////////////



const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery Draw is happening:');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You win lottery');
    } else {
      reject(new Error('You lost money'));
    }
  }, 2000);
});

lotteryPromise
  .then(response => console.log(response))
  .catch(error => console.log(error));




/////////////// Promisify ///////////////////////////////

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('we waited for 1 sec');
    return wait(2);
  })
  .then(() => {
    console.log('We waited for 2 sec');
    return wait(3);
  })
  .then(() => {
    console.log('We waited for 3 sec');
    return wait(4);
  })
  .then(() => {
    console.log('We waited for 4 sec');
  });

// /////////////////////// Creating New Promsie ////////////////////////


// It will resolve immediately wrong spelling XD

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').then(x => console.error(x));



//////////////////////////  Promsifying geolocation //////////////////////

// navigator.geolocation.getCurrentPosition(
//   function (position) {},
//   function (error) {}
// );

// same code with arrow functions

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   error => alert(error.message)
// );

const getPosition = function () {
  return new Promise(function (reslove, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   postion => reslove(postion),
    //   error => reject(error)
    // );
    navigator.geolocation.getCurrentPosition(reslove, reject);
  });
};

getPosition()
  .then(response => console.log(response))
  .catch(err => console.log(err));

