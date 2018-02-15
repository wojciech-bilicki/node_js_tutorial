const request = require('request');

setTimeout(() => {
	console.log('Inside of timeout!');
}, 2000);


request('http://pomiary.gdmel.pl/rest/stations', (error, response, body) => {

	console.log("REQUEST FINISHED");
	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	console.log('body:', JSON.parse(body).message);
})



console.log('This is the very end');