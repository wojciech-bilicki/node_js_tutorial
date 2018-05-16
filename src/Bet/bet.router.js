import  {Router} from 'express';
import {createBet, getBets, deleteBet, updateBet} from './bet.controller'

const router = Router()

router.post('', async (req, res) => {
  try {
    const {teams, result, user} = req.body;
    const bet = await createBet({teams, result, user})
    res.send(bet)
  } catch (error) {
    console.error(error)
    res.status(400).json({error})
  }
})

router.get('', async (req, res) => {
  try {
    const bets = await getBets()
    res.send(bets);
  } catch (error) {
    res.status(400).send({error});
  }
})

router.get('/:betId', async (req, res) => {
  try {
    const {betId} = req.params;
    const bets = await getBets(betId)
    res.send(bets);
  } catch (error) {
    res.status(400).send({error});
  }
})

router.delete('/:betId', async (req, res) => {
  try {
    const {betId} = req.params;
    const deletedBet = await deleteBet(betId);
    res.send(deletedBet);
  } catch (error) {
    console.error(error);
    res.status(error.status).json({error})
  }
})

router.patch('/:betId', async (req, res) => {
  try {
    const {betId} = req.params;
    const {teams, result} = req.body;
    const updatedModel = await updateBet({teams, result, betId})
    res.send(updatedModel);
  } catch (error) {
    console.error(error);
    res.status(error.status).json({error})
  }
})

export default router;