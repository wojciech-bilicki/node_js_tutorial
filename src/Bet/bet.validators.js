const betResultRegExp = /[0-9]\d*-[0-9]\d*/g;

export default {
  validator: betResult => betResultRegExp.test(betResult),
  message: 'Wrong format'
};
