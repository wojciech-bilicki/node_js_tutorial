import {ObjectId} from 'mongodb';
import ApiError from '../utils/ApiError'
import Bet from './bet.model'


const createBet = async ({teams, result, user}) => {
  const bet = await Bet.create({teams, result, user})
  return bet
}

const getBets = async (betId) => {
  console.log(betId)
  const bets = betId ? await Bet.findById(new ObjectId(betId)) : await Bet.find()
  return bets
}

const deleteBet = async betId => {
  if(!ObjectId.isValid(betId)) {
    throw new ApiError({
      status: 400,
      msg: 'Invalid param',
      field: 'betId',
      value: betId
    })
  }
  const bet = await Bet.findByIdAndRemove(betId)
  return bet
}

const updateBet = async ({betId, teams, result}) => {
  if(!ObjectId.isValid(betId)) {
    throw new ApiError({
      status: 400,
      msg: 'Invalid param',
      field: 'betId',
      value: betId
    })
  }

  let updatedObject = {};
  if(teams) updatedObject.teams = teams;
  if(result) updatedObject.result = result;

  if(Object.keys(updatedObject).length == 0) {
    throw new ApiError({
      status: 400,
      msg: 'Nothing to modify',
      field: ['teams', 'result']
    })
  }

  const bet = await Bet.findByIdAndUpdate(betId, updatedObject, {
    new: true
  })
  return bet;
}

export {createBet, getBets, deleteBet, updateBet}