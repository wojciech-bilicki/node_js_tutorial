import mongoose from '../db_config';
import validator from 'validator';
import userValidator from './user.validators.js';
import jwt from 'jsonwebtoken';
import { resolve } from 'dns';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    validate: userValidator
  },
  bets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bet' }],
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

userSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();
  const { _id, email } = userObject;
  return { _id, email };
};

userSchema.methods.generateToken = function() {
  let user = this;
  let access = 'auth';
  let token = jwt
    .sign({ _id: user._id.toHexString(), access }, 'dangit334')
    .toString(); //generate token

  user.tokens.push({
    token
  }); //add token to token array

  return user.save().then(() => {
    return token;
  }); //return promise
};

userSchema.statics.findByToken = function(token) {
  const User = this;
  let decoded;

  try {
    decoded = jwt.verify(token, 'dangit334');
  } catch (e) {
    return Promise.reject();
  }

  return User.findOne({
    _id: decoded._id,
    'tokens.token': token
  });
};

userSchema.statics.findByCredentials = function({ email, password }) {
  const User = this;
  return User.findOne({ email }).then(user => {
    if (!user) {
      return Promise.reject();
    }
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
};

userSchema.pre('save', function(next) {
  const user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

export default mongoose.model('User', userSchema);
