import express from 'express';
import bodyParser from 'body-parser';

import morgan from 'morgan';
import { timelog } from './middlewares';
import userRoutes from './User';
import betRoutes from './Bet';

const app = express();
app.use(timelog);

app.use(bodyParser.json());

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

app.use('/users', userRoutes);
app.use('/bets', betRoutes);

app.listen(4000, () => {
  console.log('listening on a port 4000');
});
