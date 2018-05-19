module.exports = greet => {
  // typeof greet !== 'string' ? null : 'hello world';
  // return greet;

  if(typeof greet !== 'string'){
    return null;
  }
  return `${greet}`;
};
