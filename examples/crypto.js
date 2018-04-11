const { SHA256 } = require('crypto-js');

const password = 'I am so secret, dude';
const hash = SHA256(password);

console.log(`My password is ${password}`);
console.log(`My hashed password is ${hash}`);

const data = {
  id: 5 //User id from the collection
}
const salt = 'Add some pepper'

const token = {
  data,
  hash: SHA256(JSON.stringify(data) + salt).toString();
}

token.data.id = 22

const resultHash = SHA256(JSON.stringify(token.data) + salt).toString();

if (resultHash === token.hash) {
  console.log('Data not modified')
} else {
  console.log('Data WAS modified')
}
