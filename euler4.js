var x = 0;
var y = 0;

function palindrome() {
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