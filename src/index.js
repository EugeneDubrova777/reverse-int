module.exports = function reverse (n) {
  result = +n.toString().split('').reverse().join('');

  if (n < 0) {
    return +n.toString().split('').reverse().join('').slice(0, -1);
  } else return +n.toString().split('').reverse().join('');
}
