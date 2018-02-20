import express from 'express';
import { Schema } from 'mongoose';
import mongoose from './db_config';
const app = express();

const betsSchema = new Schema({
  teams: {
    type: [String],
    validate: {
      validator: teams => teams && teams.length == 2,
      message: 'There has to be 2 teams'
    }
  },
  result: {
    type: String,
    minlength: 3,
    required: true
  }
});

const Bet = mongoose.model('Bet', betsSchema);

const bet1 = new Bet({
  result: '3 - 0'
});

bet1
  .save()
  .then(res => console.log(res))
  .catch(err => console.log(err));

app.listen(4000, () => {
  console.log('listening on a port 4000');
});
