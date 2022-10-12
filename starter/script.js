'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

const renderCountry = function (data, className) {
  const html = ` <article class="${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article> `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1; //set the image to visible
};

const getCountryAndNeighbor = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    //upon load parse the JSON file data
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //render country 1
    renderCountry(data);
    //------get neighbor country (2)
    const [neighbor] = data.borders;
    if (!neighbor) return; //if there is no neighbor use the guard clause to return
    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText); //parse and destructure on load event
      console.log(data2);

      renderCountry(data2, 'neighbor');
    });
  });
};
getCountryAndNeighbor('portugal'); //call the GetCountryagetCountryAndNeighbor function
// getCountryAndNeighbor('usa');
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
// const request = fetch('GET', `https://restcountries.com/rest/vs/name/portugal`);
// console.log(request);

const getCountryData = function (country) {
  fetch(`https://rescountries.eu/rest/v2/name/${country}`).then(function (
    response
  ) {
    console.log(response);
  });
};
getCountryData('portugal');

//the then method can be called on promises
//promise: an object that is used as a placeholder for the future result of an asynchornous operation
//or a container for a future value
