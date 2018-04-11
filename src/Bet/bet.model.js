import mongoose from '../db_config';
import resultValidator from './bet.validators.js';

const betSchema = new mongoose.Schema({
  teams: {
    type: [String],
    required: true
  },
  result: {
    type: String,
    minlength: 3,
    required: true,
    validate: resultValidator
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

export default mongoose.model('Bet', betSchema);
