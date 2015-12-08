/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function euler5() {
	for (var i=1;i>0;i++) {
		for (j=1;j<=20;j++) {
			if (i%j!==0) {
				break;
			} else if (j == 20) {
				return i;
				break;
			}
		}
	}
};

euler5();
