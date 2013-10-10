exports.notFound = function(req, res, next) {
  res.status(404);
  res.render('not_found');
};
exports.serverError = function(error, req, res, next) {
  res.status(500);
  res.render('server_error', {error: error});
};