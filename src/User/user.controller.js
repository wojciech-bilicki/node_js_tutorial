import User from './user.model';
import { ApiError } from '../utils';

const getUser = async name => await User.find({});

const saveUser = async ({ name, password, email }) => {
  const user = await User.create({ name, password, email });
  return user;
};

const findUserByCredentials = async ({ email, password }) => {
  const user = await User.findByCredentials({ email, password });
  const token = await user.generateToken();
  return token;
};

export { getUser, saveUser, findUserByCredentials };
