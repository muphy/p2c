/**
 * Jeolsutable
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */
/**
 * native 로 query 하기
 * http://stackoverflow.com/questions/21608919/sailsjs-array-query-exact-match/21786493#21786493
 **/
module.exports = {

  attributes: {
    name: 'string',
    previousPrice: 'INTEGER',
    finalPrice: 'INTEGER',
    discountRate: 'float',
    type: 'string'
  },
  // Lifecycle Callbacks
  beforeCreate: function(values, next) {
    values.finalPrice = Math.round(values.previousPrice*(1-values.discountRate));
    next();
  }
};