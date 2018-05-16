const request = require('request');
const url = 'http://api.icndb.com/jokes/15';
const url1 = 'http://api.icndb.com/jokes/16';
const url2 = 'http://api.icndb.com/jokes/17';
const url3 = 'http://api.icndb.com/jokes/18';

const requestPromise = url => new Promise((resolve, reject) => {
  request(url, (err, res,body) => {
    if(err) {
      reject(err);
    }
    resolve(body);
  })
})

requestPromise(url).then(body => {
  console.log('fullfilled');
  console.log('====================================');
  console.log(body);
  console.log('====================================');
})


function noCallbackHellThanksToPromises() {
  return requestPromise(url)
    .then(res => requestPromise(url2))
    .then(res => requestPromise(url3))
    .then(res => res)
    .catch(err => console.error(err));
}

noCallbackHellThanksToPromises().then(res => {
  console.log('====================================')
  console.log(res);
  console.log('====================================')
})

function noCallbackHellThanksToPromises2() {
  return requestPromise(url)
          .then(res => {
            if(res.hasSomeData) {
              requestPromise(url2).then(
                resX => {
                  console.log(resX);
                  return resX;
                }
              )
            }
            return request(url1);
          })
          .then(res1 => requestPromise(url2));
}