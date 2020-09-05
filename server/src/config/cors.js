module.exports = function (req, res, next) {
  res.seader('Access-Control-Allow-Origin', '*');
  res.seader('Access-Control-Allow-Method', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.seader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}