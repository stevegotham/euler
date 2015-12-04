var x = prompt("pick a number");
sum = 0;
for(i=0;i<x;i++) {
	if (i%3==0 || i%5==0) {
		sum += i;
	}
};