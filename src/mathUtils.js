function gcd(a, b) {
  if (!b) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function isEven(a) {
  return a % 2 == 0;
}
function isOdd(a) {
  return a % 2 != 0;
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

function arraySum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function arrayMin(arr) {
  return Math.min(...arr);
}

function arrayMax(arr) {
  return Math.max(...arr);
}

function isArmstrong(number) {
  const digits = number.toString().split("");
  const order = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit), order),
    0
  );

  return sum == number;
}

module.exports = {
  gcd,
  lcm,
  factorial,
  isPrime,
  fibonacci,
  arraySum,
  arrayMin,
  arrayMax,
  isArmstrong,
  isEven,
  isOdd,
};
