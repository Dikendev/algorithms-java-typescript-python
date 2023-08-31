function reverse_a_number(num: number): number {
	let reversed_num = 0;
	while (num !== 0) {
		reversed_num = reversed_num * 10 + (num % 10);
		console.log("reversed_num", reversed_num);
		num = Math.floor(num / 10);
		console.log("num", num);
	}
	return reversed_num;
}
const num = 12345;
console.log("Original number: " + num);
const result = reverse_a_number(num);
console.log("Reversed number: " + result);
