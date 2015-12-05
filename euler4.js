/* A palindromic number reads the same both ways. The largest palindrome made
from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function palindrome() {
	var x = 0;
	var y = 0;
	for (i=999;i>100;i--) {
		for (j=999;j>100;j--) {
			x = (i*j);
			if ((x == x.toString().split('').reverse().join('')) && (x > y)) {
				y = x;
			};
		};
	};
	return y;
};

palindrome();