import express from 'express';
import { authenticate } from '../User';
import { createBet, deleteBet, getBets, updateBet } from './bet.controller';

const router = new express.Router();

router.get('', authenticate, async (req, res) => {
  try {
    const { user } = req;
    const bets = await getBets({ user });
    res.send(bets);
  } catch (err) {
    res.status(400).json({ err });
  }
});

router.get('/:betId', async (req, res) => {
  try {
    const { betId } = req.params;
    const bet = await getBets({ betId });
    res.send(bet);
  } catch (err) {
    res.status(400).json({ err });
  }
});

router.post('', authenticate, async (req, res) => {
  try {
    const { user } = req;
    const { teams, result } = req.body;
    const bet = await createBet({ teams, result, user });
    res.send(bet);
  } catch (err) {
    console.error(err);
    res.status(400).json({ err });
  }
});

router.delete('/:betId', async (req, res) => {
  try {
    const { betId } = req.params;
    const deletedBet = await deleteBet(betId);
    res.send(deletedBet);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.patch('/:betId', async (req, res) => {
  try {
    const { teams, result } = req.body;
    const { betId } = req.params;
    const updatedBet = await updateBet({ betId, teams, result });
    res.send(updatedBet);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

export default router;
