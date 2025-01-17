const ftoc = function(f) {
  let c = (f - 32) * (5/9);
  c = parseFloat(c.toFixed(1));
  return c;
};

const ctof = function(c) {
  let f = (c * 9/5) + 32;
  f = parseFloat(f.toFixed(1));
  return f;
};

console.log(ftoc(42));
console.log(ctof(-10));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
