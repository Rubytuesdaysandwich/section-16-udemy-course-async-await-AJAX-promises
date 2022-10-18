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
const getJSON = function (url, errorMsg = 'something went wrong') {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) {
      //       //this is being passed to the catch method
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};
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
// Promise.resolve('abc').then(x => console.log(x));
// Promise.resolve(new Error('Problem!')).catch(x => console.error(x));
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
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// const imgContainer = document.querySelector('.images');
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     //create a new promise that will contain the image path
//     const img = document.createElement('img'); //create the img element
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//.catch(err => console.log(err));

////////////////////////thing that i made lol
//// const img = [1, 2, 3];
//// for (let i = 0; i < createImage(`img/img-${img[0]}.jpg`); i++) {
////   createImage('img/img-1.jpg')
////     .then(img => {
////       currentImg = img;
////       console.log('image 1 loaded');
////       return wait(2);
////     })
////     .then(() => {
////       currentImg.style.display = 'none';
////       return createImage('img/img-2.jpg');
////     })
////    .then(img => {
////       currentImg = img;
////       console.log('image 2 loaded');
////       return wait(2);
////     })
////     .then(() => {
////       currentImg.style.display = 'none';
////       return createImage('img/img-3.jpg');
////     })
////     .catch(err => console.log(err));
////}
//!===========================
//// fetch(`https://restcountries.com/v2/name/${country}`).then(res =>
////   console.log(res)
// //get position and reverse geocoding
// const getPosition = function () {
//   ///geolocation
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// //reverse geocoding
// getPosition().then(pos => console.log(pos));
// const whereAmI = async function () {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     const dataGeo = await resGeo.json();
//     // console.log(dataGeo);
//     //country data
//     // );
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.country}`
//     );
//     //await will wait till the promise has been full filled
//     //still using promises it like syntax sugar .then is still being used essentially
//     if (!resGeo.ok) throw new Error('Problem getting country');
//     // console.log(res);
//     const data = await res.json();
//     // console.log(data);
//     renderCountry(data[0]);
//     return `You are in ${dataGeo.city},${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err}💥`);
//     renderError(`something went wrong💥${err.message}`);
//     //Reject promise returned from aysnc function
//     throw err;
//   }
// };
//!===========
// console.log('1:wWill get location');
//whereAmI();//asynce function waits to run
// const city = whereAmI();
// whereAmI()
//   .then(city => console.log(`2:${city}`))
//   .catch(err => console.error(`2:${err.message}💥`))
//   .finally(() => console.log('3:finished getting location'));
// console.log(city);
//!============
// //ify immediately invoked expressions
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2:${city}`);
//   } catch (err) {
//     console.error(`2:${err.message}💥`);
//   }
//   console.log('3: Finished getting location');
// })();
// ----try catch block
// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }
////////////////////
//!====================
// -------Running Promises in Parallel
// const get3Countries = async function (c1, c2, c3) {
//   try {
// const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
// const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
// const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
// console.log(data1.capital, data2.capital, data3.capital);
// const data = await Promise.all([
//runs all the promises at the same time
// getJSON(`https://restcountries.com/v3.1/name/${c1}`), //getting the capital of the countries from the API using json
// getJSON(`https://restcountries.com/v3.1/name/${c2}`),
// getJSON(`https://restcountries.com/v3.1/name/${c3}`),
// ]);
// console.log(data.map(d => d[0].capital));
// } catch (err) {
// console.error(err);
// }
// };
// get3Countries('portugal', 'canada', 'tanzania');
// get3Countries('philippines', 'america', 'france');
//!============================
//////////////////////////////////
//promise.race
/*
(async function () {
  const res = await Promise.race([
    //whichever promise gets done first is returned first
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};
Promise.race([
  //method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
  //whichever promise gets done first is returned first
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(5), //if it takes longer than this time it will timeout
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));
//promise.allsettled
Promise.allSettled([
  //method returns a promise that fulfills after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
  Promise.resolved('success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  //This returned promise will fulfill when all of the input's promises have fulfilled
  Promise.resolved('success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
//promise.any[ES2021]
Promise.any([
  //takes in an array of promises ignore rejected promises and takes successful promises
  Promise.resolved('success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
  */
//!===============================
///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

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
    currentImg = img;
    console.log('image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .catch(err => console.log(err));

  const loadNPause = async function(){
    try {
      //load img 1
     let img = await createImage('img/img-1.jpg')
     console.log('Image 1 loaded');
     await wait(2);
     img.stlye.display ='none'

      //load img 2
     img = await createImage('img/img-1.jpg')
      console.log('Image 1 loaded');
      await wait(2);
      img.stlye.display ='none'

    } catch (err) {
      console.error(err);
    }
    }
  }