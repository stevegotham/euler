function sumEvenFibocci(x) {
	var sequence = [1,2];
	var largest = 0;
	var sumEven = 0;
	for (i=2;largest<x;i++) {
		sequence[i] = sequence[i-2] + sequence[i-1];
		largest = sequence[i];
	}
	for (i=0;i<sequence.length;i++) {
		if (sequence[i]%2 == 0) {
			sumEven += sequence[i];
		}
	}
	console.log(sumEven);
};