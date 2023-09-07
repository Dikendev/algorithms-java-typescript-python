export {};
const arr: number[] = [1, 1, 7, 7, 4, 4, 3, 7, 2, 2, 2, 2, 2];

//find the most repeated number

const findMax = (arr: number[]): Record<number, number> | null => {
	if (arr.length === 0) return null;
	let totalMax: Record<number, number> = {};
	let maxNumberRecord: Record<number, number> = {};
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] in totalMax) {
			totalMax[arr[i]] += 1;
			maxNumberRecord = {
				[arr[i]]: totalMax[arr[i]],
			};

			Object.values(maxNumberRecord);
			console.log(`totalMax[arr[i]]`, totalMax[arr[i]]);
			console.log(`maxNumberRecord`, maxNumberRecord);
		} else {
			totalMax[arr[i]] = 1;

			totalMax;
		}
	}

	console.log("maxfinal,", totalMax);
	console.log("maxNumberRecord,", maxNumberRecord);

	return totalMax;
};
console.log(findMax([1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 6, 6, 6, 6]));
