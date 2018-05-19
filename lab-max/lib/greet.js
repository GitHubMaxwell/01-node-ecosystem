module.exports = greet => {
  if(typeof greet !== 'string'){
    return null;
  }
  return `${greet}`;
};

//what josh helped me with (i was doing the correct if logic but returning null and the string inside a ternary that was breaking it)