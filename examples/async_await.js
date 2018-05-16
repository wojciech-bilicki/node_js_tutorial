const request = require('request');
const url = 'http://api.icndb.com/jokes/15';

const requestPromise = url => new Promise((resolve, reject) => {
  request(url, (err, res,body) => {
    if(err) {
      reject(err);
    }
    resolve(body);
  })
})

const asyncRequest = async url => {
  try {
  const response = await requestPromise(url);
  } catch (e) {
    console.log('====================================')
    console.log(e)
    console.log('====================================')
  }
  return response;
}


asyncRequest(url).then(res => {
  console.log(res);
})