'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
const renderCountry = function (data, className) {
  const html = ` <article class="${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article> `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1; //set the image to visible
};
///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     //upon load parse the JSON file data
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = ` <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         data.population / 1000000
//       ).toFixed(1)}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article> `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1; //set the image to visible
//   });
// };
// getCountryData('portugal'); //call the GetCountryData function
// getCountryData('usa');
// getCountryData('germany');
// getCountryData('philippines');
//!=======================
//////////////////////////////////////////
//GET COUNTRY AND NEIGHBOR

//// const renderCountry = function (data, className) {
////   const html = ` <article class="${className}">
////     <img class="country__img" src="${data.flag}" />
////     <div class="country__data">
////       <h3 class="country__name">${data.name}</h3>
////       <h4 class="country__region">${data.region}</h4>
////       <p class="country__row"><span>👫</span>${(
////        data.population / 1000000
////       ).toFixed(1)}</p>
////       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
////       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
////     </div>
////   </article> `;
////   countriesContainer.insertAdjacentHTML('beforeend', html);
////   countriesContainer.style.opacity = 1; //set the image to visible
//// };

// const getCountryAndNeighbor = function (country) {
//AJAX call country 1
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// request.addEventListener('load', function () {
//upon load parse the JSON file data
// const [data] = JSON.parse(this.responseText);
// console.log(data);
//render country 1
// renderCountry(data);
//------get neighbor country (2)
// const [neighbor] = data.borders;
// if (!neighbor) return; //if there is no neighbor use the guard clause to return
//AJAX call country 2
// const request2 = new XMLHttpRequest();
// request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
// request2.send();

// request2.addEventListener('load', function () {
// const data2 = JSON.parse(this.responseText); //parse and destructure on load event
// console.log(data2);

// renderCountry(data2, 'neighbor');
// });
// });
// };
// getCountryAndNeighbor('portugal'); //call the GetCountryagetCountryAndNeighbor function
// getCountryAndNeighbor('america');
// getCountryAndNeighbor('germany');
// getCountryAndNeighbor('philippines');

//example of callback within callbacks
// setTimeout(() => {
//   console.log('1 second passsed');
//   setTimeout(() => {
//     console.log('2 second passsed');
//     setTimeout(() => {
//       console.log('3 second passsed');
//       setTimeout(() => {
//         console.log('4 second passsed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
//!=============
////////////////
// Promises and the Fetch API
//version v3.1 API
// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// getCountryData('portugal');
//!==================
//-----simplified with arrow functions promise
//// const renderError = function (msg) {
////   countriesContainer.insertAdjacentText('beforeend', msg);
////   countriesContainer.style.opacity = 1;
//// };
const getCountryData2 = function (country) {
  //country 1

  fetch(`https://restcountries.com/v2/name/${country}`) //fetch the  data
    .then(
      response => response.json(),
      err => alert(err) //catching the fetch api error
    ) //take response the put it in json to be put together
    .then(data => {
      renderCountry(data[0]); //then render the country data
      const neighbor = data[0].borders[0];
      if (!neighbor) return;
      //country 2
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
      // return 23;
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbor'))
    //catch the error from the api not fetching
    .catch(err => {
      console.error(`${err}💥💥💥`);
      renderError(`Something went wrong 💥💥💥${err}`);
    });

  // .then(data => alert(23));
  //get rid of call back hell
  //the two then methods are a chain of promises
};

btn.addEventListener('click', function () {
  getCountryData2('portugal');
});
// getCountryData2('germany');
// getCountryData2('philippines');

//the then method can be called on promises
//promise: an object that is used as a placeholder for the future result of an asynchornous operation
//or a container for a future value
