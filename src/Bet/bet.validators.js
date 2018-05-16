const betResultRegExp = RegExp(/[0-9]\d*-[0-9]\d*/g)

export default {
  validator: betResult => betResultRegExp.test(betResult),
  msg: 'Wrong bet format'
};