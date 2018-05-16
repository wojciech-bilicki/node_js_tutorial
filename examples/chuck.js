const request = require('request');

const url = 'http://api.icndb.com/jokes/15';
const url1 = 'http://api.icndb.com/jokes/16';
const url2 = 'http://api.icndb.com/jokes/17';
const url3 = 'http://api.icndb.com/jokes/18';

function callbackHell(theLastCallback) {
  request(url, (err, res, body) => {
    if(err) {
      return theLastCallback(err);
    }
    request(url2, (err2, res2, body2) => {
      if(err2) {
        return theLastCallback(err2)
      }
      request(url3, (err3, res3, body3) => {
        if(err3) {
          return theLastCallback(err3)
        }

          theLastCallback(null, "Finished!")
          theLastCallback(null, "Finished!")
          theLastCallback(null, "Finished!")
          theLastCallback(null, "Finished!")
          theLastCallback(null, "Finished!")

        console.log(body3);
      })
    })
  })
}

callbackHell(function(err, message) {
  if(err) {
    return console.error('error!', err);
  }
  console.log('Success!', message)
})