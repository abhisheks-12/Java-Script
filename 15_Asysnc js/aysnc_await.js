'use strict';

// *********************   Async Await Js  **************************** //

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function renderContry(data, className = '') {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(data.population / 100000).toFixed(
      1
    )}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function whereAmI(countryName) {
  //  Geolocation
  const position = await getPosition();
  const { latitude: lat, longitude: lng } = position.coords;

  // Rereverse Geocoding
  const responseGeo = await fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json`
  );
  const dataGeo = await responseGeo.json();
  // console.log(dataGeo.prov);

  // country Data
  const response = await fetch(
    `https://restcountries.eu/rest/v2/name/${countryName}`
  );
  const data = await response.json();
  // console.log(data[0]);
  renderContry(data[0]);

  return `You are in  ${dataGeo.city} , ${dataGeo.country}`;

  // throw error
  throw err;
}

console.log('Will get location');
// const city = whereAmI('usa');
// console.log(city);
// whereAmI('usa')
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
//   .finally(() => console.log('Finished getting location'))

// same code just with aysnc await

console.log('Hello')(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.log(err);
  }
  console.log('Finished getting location');
})();


//  *********************** Try catch ***********************//
/*
try {
  let y = 1;
  const x = 3
  x  = 3
}catch(err){
  alert(err.message)
}
*/
