import User from './user.model'

const getUser = async () => {
  const user = await User.find({})
  return user
}

const saveUser = async ({name, password, email}) => {
  const resp = await User.create({name, password, email});
  return resp
}

export {
  getUser, saveUser
}