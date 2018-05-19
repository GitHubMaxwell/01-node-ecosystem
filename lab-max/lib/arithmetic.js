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

//what josh helped me with (i miss named the exports and wasnt sure how to pass in the two parameters of a and b)