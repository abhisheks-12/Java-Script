'use strict';

function getJson(url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
}

/*
// ******************** All Promises **************************** //

async function get3CountriesData(c1, c2, c3) {
  try {
    // const [data1] = await getJson(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJson(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJson(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );

    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJson(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJson(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJson(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    // console.log(data)
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
}

get3CountriesData('italy', 'usa', 'germany');
*/

// ******** Promise race *****************

(async function () {
  const res = await Promise.race([
    getJson(`https://restcountries.eu/rest/v2/name/usa`),
    getJson(`https://restcountries.eu/rest/v2/name/italy`),
    getJson(`https://restcountries.eu/rest/v2/name/india`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Req took to long'));
    }, sec * 1000);
  });
};

Promise.race([
  getJson(`https://restcountries.eu/rest/v2/name/italy`),
  timeout(0.1),
])
  .then(res => console.log(res[0]))
  .then(err => console.log(err));

//  *****************  Promise settled *************************

Promise.allSettled([
  Promise.resolve('Sucess'),
  Promise.reject('Err'),
  Promise.resolve('Sucess'),
]).then(res => console.log(res));


