import {Router} from 'express'
import {saveUser, getUser } from './user.controller'

const router = Router();

router.get('', async (req, res) => {
  const user = await getUser()
  res.send(user)
})

router.post('', async (req, res) => {

  try {
    const {name, password, email} = req.body;
    const user = await saveUser({name, password, email})
    res.send(user)
  } catch (err) {
    console.error(err)
    res.status(400).json({err})
  }
})

export {router}