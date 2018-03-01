module.exports = function getZerosCount(number) {
  // your implementation

  var count = 0;

  while (number > 0)
  {
    if (Math.floor(number/5)>0)
    {
      count += Math.floor(number/5);
      number /= 5;
    }
    else break;
  }

  return count;
}
