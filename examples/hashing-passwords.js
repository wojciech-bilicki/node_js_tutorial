const bcrypt = require('bcryptjs');

var password = 'password';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

bcrypt.compare(password, hash, (err, res) => {
  
})