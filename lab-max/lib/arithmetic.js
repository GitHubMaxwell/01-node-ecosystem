module.exports = exports = {};

exports.add = function add(a,b) {
  if(typeof a !== 'number' && typeof b !== 'number') {
    return null;
  }
  return(a+b);
};
exports.sub = function sub(a,b){
  if(typeof a !== 'number' && typeof b !== 'number') {
    return null;
  }
  return(a-b);
};