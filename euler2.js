/* 
Each new term in the Fibonacci sequence is generated by adding the previous
two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed
four million, find the sum of the even-valued terms.
*/
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