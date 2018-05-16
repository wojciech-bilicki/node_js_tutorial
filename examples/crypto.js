const jwt = require('jsonwebtoken')

const data = {
  id: 5
}

const salt = 'Salt as hell'

const token = jwt.sign(data, salt);
console.log(token)

try {
  const tokenDecoded  = jwt.verify(token , salt);
  console.log(tokenDecoded);
} catch (e) {
  console.error(e)
}