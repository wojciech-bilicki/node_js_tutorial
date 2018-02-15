import request from 'request';

const url = 'http://api.icndb.com/jokes/15',
  url1 = 'http://api.icndb.com/jokes/16',
  url2 = 'http://api.icndb.com/jokes/17',
  url3 = 'http://api.icndb.com/jokes/18';

// function callbackHell(theLastCallback) {
//   request(url, (err, res, body) => {
//     if (err) {
//       return theLastCallback(err);
//     }
//     request(url1, (err1, res1, body1) => {
//       if (err1) {
//         return theLastCallback(err1);
//       }
//       request(url2, (err2, res2, body2) => {
//         if (err2) {
//           return theLastCallback(err2);
//         }
//         request(url3, (err3, res3, body3) => {
//           if (err3) {
//             return theLastCallback(err3);
//           }

//           theLastCallback(null, 'Finish!');
//           console.log(body3);
//         });
//       });
//     });
//   });
// }

// callbackHell(function(err, message) {
//   if (err) {
//     return console.log('error!', err);
//   }

//   console.log('Success!', message);
// });

//Promises

// var myShinyPromise = new Promise((resolve, reject) => {
//   console.log('The promise is pending!');
//   resolve('This is the data!');
//   resolve('Trying to resolve for the second time!');
// });

// myShinyPromise
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

var requestPromise = url =>
  new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) {
        reject(err);
      }
      resolve(body);
    });
  });

// requestPromise(url).then(body => {
//   console.log('Promise is fullfilled!');
//   console.log(body);
// });

// function noCallbackHellThanksToPromises() {
//   return requestPromise(url)
//     .then(res => requestPromise(url1))
//     .then(res1 => requestPromise(url2))
//     .then(res2 => requestPromise(url3))
//     .then(res3 => res3);
// }

// noCallbackHellThanksToPromises().then(res => {
//   console.log('Chaining Promises feels so good');
//   console.log(res);
// });

async function asyncRequest(url) {
  const response = await requestPromise(url);
  console.log(response);
  return response;
}

const asyncRequest = async url => {
  try {
    const response = await requestPromise(url);
    return response;
  } catch (err) {
    console.log(err);
  }
};

asyncRequest(url1).then(resp => {
  console.log(resp);
});
