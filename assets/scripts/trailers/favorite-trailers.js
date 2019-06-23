const FavoriteTrailer = function (list) {
  this.list = list
}

FavoriteTrailer.prototype.getList = function () {
  return this.list
}

module.exports = FavoriteTrailer
