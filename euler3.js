/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
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

function largestPrime(number) {
	var x = Math.sqrt(number);
	var y = 0;
	for (var i=0;i<=x;i++) {
		if (number % i == 0) {
			if (isPrime(i)) {
				y = i;
			}
		}
	}
	console.log(y);
};
