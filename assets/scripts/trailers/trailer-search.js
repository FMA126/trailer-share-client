const TrailerSearchState = function (trailerType, hitchType, price) {
  this.trailerType = trailerType
  this.hitchType = hitchType
  this.price = price
}

TrailerSearchState.prototype.getTrailerType = function () {
  return this.trailerType
}

TrailerSearchState.prototype.setTrailerType = function (tType) {
  this.trailerType = tType
}

TrailerSearchState.prototype.getHitchType = function () {
  return this.hitchType
}

TrailerSearchState.prototype.setHitchType = function (hType) {
  this.hitchType = hType
}

TrailerSearchState.prototype.getPrice = function () {
  return this.price
}

TrailerSearchState.prototype.setPrice = function (price) {
  this.price = price
}

module.exports = {
  TrailerSearchState
}
