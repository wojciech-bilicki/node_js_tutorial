const jwt = require('jsonwebtoken');

const data = {
  id: 5
};
const salt = 'Salty as hell';

const token = jwt.sign(data, salt); //send back to user and store in db
console.log(token);
try {
  const tokenDecoded = jwt.verify(token + '1', salt);
  console.log(tokenDecoded);
} catch (e) {
  console.error(e);
}
