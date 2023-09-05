function breakingRecords(scores: number[]) /* number[] */ {
	// Write your code here

	let lowerScore: number = 0;
	let higherScore: number = 0;
	console.log("scores", scores);

	for (let i = 0; i < scores.length; i++) {
		console.log("each", scores[i]);

		if (lowerScore < scores[i]) {
			lowerScore = scores[i];
			console.log("lowerScore oioioi", lowerScore);

			console.log("lowerScore", lowerScore);
		}
	}
	console.log("higherScore", higherScore);
}

let arrGames = [10, 5, 20, 20, 4, 5, 2, 25, 1];
breakingRecords(arrGames);
