import express from 'express'
import bodyParser from 'body-parser'
import 'babel-polyfill'
import morgan from 'morgan'
import './db_config'
import {router as userRouter} from './User/user.router'
import betRouter from './Bet'
import timelog from './middlewares/timelog';

const app = express()
app.use(timelog)

console.log(process.env.NODE_ENV)

app.use(bodyParser.json())

if(process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'))
}

app.use('/users', userRouter)
app.use('/bets', betRouter)

app.get('/', (req, res) => {
  res.send('Elo')
})

app.listen(4000, () => {
  console.log('Listening on port 4000')
})