export {};

function sockMerchant(n: number, ar: number[]): any {
	const sockPars = new Map<number, number>();
	let totalPairs: number = 0;
	for (let i = 0; i < n; i++) {
		if (!sockPars.has(ar[i])) {
			sockPars.set(ar[i], 1);
		} else {
			const data = sockPars.get(ar[i]);
			if (data) {
				if (data % 2 == 0) {
					totalPairs++;
				}
			}
		}
	}
	console.log(sockPars);
}
// Write your code here
const array = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const arrayLength = array.length;
sockMerchant(arrayLength, array);
