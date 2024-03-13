export {};
function breakingRecords(scores: number[]): any {
	// Write your code here
	let lowScore: number = 0;
	let highScore: number = 0;

	let map2 = new Map<number, number>();

	for (let i = 0; i < scores.length; i++) {
		if (lowScore > scores[i]) {
			lowScore = scores[i];
		} else {
			highScore = scores[i];
		}
	}
}

const scores: number[] = [12, 24, 10, 24];
breakingRecords(scores);
