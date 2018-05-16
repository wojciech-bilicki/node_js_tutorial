export default (req, res, next) => {
  console.log('Time of the request is ' + Date.now().toString())
  next()
}