import mongoose from 'mongoose'
import { nameValidator } from './user.validators'
import validator from 'validator'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    validate: nameValidator
  },
  bets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bet'
  }],
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
  }
})

export default mongoose.model('User', userSchema)