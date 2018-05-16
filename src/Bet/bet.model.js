import mongoose from 'mongoose'
import resultValidator from './bet.validators'

const betSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  teams: {
    type: [String],
    required: true,
    validate: {
      validator: teams => teams.length === 2,
      msg: "MOAR TEAMS"
    }
  },
  result: {
    type: String,
    minlength: 3,
    required: true,
    validate: resultValidator
  }
})
const BetModel = mongoose.model('Bet', betSchema);

export default BetModel