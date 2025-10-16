/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

// Ajustado para funcionar con sieve.html

var sieve = function (n) {
  "use strict";
  var isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (var i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (var j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  var primes = [];
  for (var k = 2; k <= n; k++) {
    if (isPrime[k]) {
      primes.push(k);
    }
  }

  return primes;
};

// Esta función se puede llamar desde el HTML
function showPrimes() {
  var input = document.getElementById('sieveInput');
  var output = document.getElementById('primes');
  var n = parseInt(input.value, 10);
  if (isNaN(n) || n < 2) {
    output.textContent = "Por favor ingresa un número mayor o igual a 2.";
    return;
  }
  var primes = sieve(n);
  output.textContent = primes.join(', ');
}

function primeFactors() {
  var input = document.getElementById('pfInput');
  var output = document.getElementById('pf');
  var n = parseInt(input.value, 10);
  if (isNaN(n) || n < 2) {
    output.textContent = "Por favor ingresa un número mayor o igual a 2.";
    return;
  }
  var factors = [];
  while (n % 2 === 0) {
    factors.push(2);
    n = n / 2;
  }
  for (var i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }
  if (n > 2) {
    factors.push(n);
  }
  output.textContent = factors.join(', ');
}
