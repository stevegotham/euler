function isPrime(num) {
	var x = Math.sqrt(num);
	if (num % 2 == 0 && num !==2 ) {
		return false;
	}
	for (i=3;i<=x;i+=2) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

function largestPrime(number) {
	var g = Math.sqrt(number);
	var y = 0;
	for (s=0;s<=g;s++) {
		if (number % s == 0) {
			if (isPrime(s)) {
				y = s;
			}
		}
	}
	console.log(y);
}