import express from 'express';
import { getUser, saveUser, findUserByCredentials } from './user.controller';
import { authenticate } from './user.middlewares';

const router = express.Router();

router.get('', async (req, res) => {
  const users = await getUser();
  res.send(users);
});

router.post('', async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const user = await saveUser({
      name,
      password,
      email
    });
    const token = await user.generateToken();
    res.header('X-Token', token).send(user);
  } catch (err) {
    console.error(err, 'err');
    res.status(400).json({ err });
  }
});

router.get('/me', authenticate, (req, res) => res.send(req.user));

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await findUserByCredentials({ email, password });

    res.header('X-Token', token).send(token);
  } catch (e) {
    console.error(e);
    res.send(400);
  }
});

export { router };
