export default (req, res, next) => {
  console.log('Time of the request is ' + new Date().toString());
  next();
};
