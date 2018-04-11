import Bet from './bet.model';
import { ObjectId } from 'mongodb';
import { ApiError } from '../utils';

const createBet = async ({ teams, result, user }) =>
  await Bet.create({ teams, result, user });

const deleteBet = async betId => {
  if (!ObjectId.isValid(betId)) {
    throw new ApiError({
      status: 400,
      msg: 'Invalid param',
      field: 'betId',
      value: betId
    });
  }
  const bet = await Bet.findByIdAndRemove(betId);

  return bet;
};

const updateBet = async ({ betId, teams, result }) => {
  if (!ObjectId.isValid(betId)) {
    throw new ApiError({
      status: 400,
      msg: 'Invalid param',
      field: 'betId',
      value: betId
    });
  }

  let updateObject = {};
  if (teams) updateObject.teams = teams;
  if (result) updateObject.result = result;

  if (Object.keys(updateObject).length == 0) {
    throw new ApiError({
      status: 400,
      msg: 'Nothing to modify provided in request body',
      field: ['teams', 'result']
    });
  }

  const bet = await Bet.findByIdAndUpdate(betId, updateObject, {
    new: true
  });

  return bet;
};

const getBets = async ({ betId, user }) =>
  betId
    ? await Bet.find({ _id: new Object(betId), user })
    : await Bet.find({ user });

export { deleteBet, createBet, getBets, updateBet };
