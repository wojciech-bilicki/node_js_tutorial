const request = require('request')

console.log('This is the very start')

setTimeout(() => {
  console.log('====================================')
  console.log('I am inside TIMEOUT')
  console.log('====================================')
}, 2000);

request('http://pomiary.gdmel.pl/rest/stations', (error, response, body) => {
  console.log('REQUEST FINISHED')
  console.log('statusCode', response && response.statusCode)
  console.log('body', JSON.parse(body).message)
})

console.log('END OF SCRIPT')