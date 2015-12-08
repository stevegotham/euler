/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10001st prime number?
*/
function isPrime(num) {
	var x = Math.sqrt(num);
	if (num % 2 == 0 && num !==2 ) {
		return false;
	}
	for (i=3; i<=x; i+=2) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
};
function nthPrime(n) {
	var primes = [];
	for (p=1; primes.length<=n; p++) {
		if (isPrime(p)) {
			primes.push(p);
		}
	}
console.log(primes[primes.length-1]);
};

nthPrime(10001);

