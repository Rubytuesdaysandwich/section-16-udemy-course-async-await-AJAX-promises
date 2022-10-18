'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
  countriesContainer.style.opacity = 1; //set the image to visible //moved to getCountryData2
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
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
//GET COUNTRY AND NEIGHBOuR

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

// const getCountryAndNeighbour = function (country) {
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
//------get neighbour country (2)
// const [neighbour] = data.borders;
// if (!neighbour) return; //if there is no neighbour use the guard clause to return
//AJAX call country 2
// const request2 = new XMLHttpRequest();
// request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
// request2.send();

// request2.addEventListener('load', function () {
// const data2 = JSON.parse(this.responseText); //parse and destructure on load event
// console.log(data2);

// renderCountry(data2, 'neighbour');
// });
// });
// };
// getCountryAndNeighbour('portugal'); //call the GetCountryagetCountryAndNeighbour function
// getCountryAndNeighbour('america');
// getCountryAndNeighbour('germany');
// getCountryAndNeighbour('philippines');

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
// const getJSON = function (url, errorMsg = 'something went wrong') {
//   return fetch(url).then(response => {
//     console.log(response);
//     if (!response.ok) {
//       //this is being passed to the catch method
//       throw new Error(`${errorMsg} (${response.status})`);
//     }
//     return response.json();
//   });
// };
// const getCountryData2 = function (country) {
//   //country 1

//   fetch(`https://restcountries.com/v2/name/${country}`) //fetch the  data
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         //this is being passed to the catch method
//         throw new Error(`country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     //take response the put it in json to be put together
//     .then(data => {
//       renderCountry(data[0]); //then render the country data
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       //country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//       // return 23;
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     //catch the error from the api not fetching
//     .catch(err => {
//       //using catch to catch failed promises is a good practice
//       //catching the fetch api error
//       console.error(`${err}💥💥💥`);
//       renderError(`Something went wrong 💥💥💥${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });

//   // .then(data => alert(23));
//   //get rid of call back hell
//   //the two then methods are a chain of promises
// };

// btn.addEventListener('click', function () {
//   getCountryData2('portugal');
// });
// getCountryData2('adfafa');//return country not found 404
// getCountryData2('germany');
// getCountryData2('philippines');

//the then method can be called on promises
//promise: an object that is used as a placeholder for the future result of an asynchornous operation
//or a container for a future value

//!======================
// const getCountryData3 = function (country) {
//country 1
//the getJSON function gets the url and error message making the code block much cleaner to prevent repeating ourselves
// getJSON(`https://restcountries.com/v2/name/${country}`, 'country  not found')
//// fetch(`https://restcountries.com/v2/name/${country}`) //fetch the  data
////   .then(response => {
////     console.log(response);
////     if (!response.ok) {
//       //this is being passed to the catch method
////       throw new Error(`country not found (${response.status})`);
////     }
////     return response.json();
////   })
// take response the put it in json to be put together
//     .then(data => {
//       renderCountry(data[0]); //then render the country data
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour found!');
//       console.log(neighbour);

//       //country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'country not found'
//       );
//       // return 23;
//     })
//     //// .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     //catch the error from the api not fetching
//     .catch(err => {
//       //using catch to catch failed promises is a good practice
//       //catching the fetch api error
//       console.error(`${err}💥💥💥`);
//       renderError(`Something went wrong 💥💥💥${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });

//   // .then(data => alert(23));
//   //get rid of call back hell
//   //the two then methods are a chain of promises
// };

// btn.addEventListener('click', function () {
//   getCountryData3('australia');
// });
///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json.`)
//     .then(res => {
//       if (!res.ok) throw new Error(`problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city},${data.country}`);

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}💥`));
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
//!=======================
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 100; i++) {
//     console.log(res);
//   }
// });
// console.log('Test end');
//!========================
//------ Building a Simple Promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('YOU WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💥'));
//     }
//   }, 2000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('I waited for 1 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 3 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('4 second passed'));

// example of callback within callbacks
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
Promise.resolve('abc').then(x => console.log(x));
Promise.resolve(new Error('Problem!')).catch(x => console.error(x));
//!=================================
// promisify the geolocation API cannot do due to not having an API key
//get the position of a certain latitude and longitude
//promise based API
//using reverse geocoding
//get position based on the location of the device
//// const getPosition = function () {
////   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
////     navigator.geolocation.getCurrentPosition(resolve, reject);
////   });
//// };
// // getPosition().then(pos => console.log(pos));

//// const whereAmI = function () {
////   getPosition()
////     .then(pos => {
////       const { latitude: lat, longitude: lng } = pos.coords;

////       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
////     })
////     .then(res => {
////       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
////       return res.json();
////     })
////     .then(data => {
////       console.log(data);
////       console.log(`You are in ${data.city}, ${data.country}`);

////      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
////     })
////     .then(res => {
////       if (!res.ok) throw new Error(`Country not found (${res.status})`);

////       return res.json();
////     })
////     .then(data => renderCountry(data[0]))
////     .catch(err => console.error(`${err.message} 💥`));
//// };

//// btn.addEventListener('click', whereAmI);
//!=================================
//coding challenge #2
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    //create a new promise that will contain the image path
    const img = document.createElement('img'); //create the img element
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    console.log('image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.log(err));
