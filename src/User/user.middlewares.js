import User from './user.model';

export const authenticate = async (req, res, next) => {
  const token = req.header('X-Token');

  try {
    const user = await User.findByToken(token);
    if (!user) {
      return Promise.reject();
    }
    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    res.status(401).send();
  }
};
