'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*

//// before
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/usa`);
request.send();

*/

////////////////// Promises ///////////////////////////

function renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
}

function renderCountry(data, className = '') {
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

const request = fetch('https://restcountries.eu/rest/v2/name/usa');
console.log(request);
console.log(request);

/*
//////////////////////// Without Arrow function

function getCountryData(country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderContry(data[0])
    });
}
*/

function getJSON(url, errorMsg = 'Something Went Wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
}

/*
/////////////////////// Refrence

function getCountryData(country) {
  // Country One
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => {
      console.log(response);

      if (!response.ok) {
        throw new Error(`Something went wrong ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Soemthing went wrong ${response.status}`);
          }
          return response.json();
        })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
          console.error(`${err}`);
          renderError(`Something Went Wrong ${err.message} Try Again`);
        })
        .finally(() => {
          countriesContainer.style.opacity = 1;
        });
    });
}

*/

function getCountryData(country) {
  // Country One
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country Not Found'
  ).then(data => {
    renderCountry(data[0]);

    const neighbour = data[0].borders[0];
    if (!neighbour) throw new Error('No neighbour found');

    // Country Second
    return getJSON(
      `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
      'Country Not Found'
    )
      .then(data => renderCountry(data, 'neighbour'))
      .catch(err => {
        console.error(`${err}`);
        renderError(`Something Went Wrong ${err.message} Try Again!`);
      })
      .finally(() => {
        countriesContainer.style.opacity = 1;
      });
  });
}

// Handling click evenets
btn.addEventListener('click', function () {
  getCountryData('italy');
});

// getCountryData('gaia'); Error

//////////////////////////////// Event loop in pratice

console.log('Test Start');
setTimeout(function () {
  console.log('O sec later');
}, 0);
Promise.resolve('Resloved Promise1').then(response => console.log(response));

Promise.resolve('Reload Promise 2').then((res)=> {
  for(let i=0; i< 1000; i++){
    console.log(res)
  }
});


console.log('Test End');
