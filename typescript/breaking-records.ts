function breakingRecords(scores: number[]): number[] {
  let minCounter: number = 0;
  let maxCounter: number = 0;

  let lowerScore: number = 0;
  let higherScore: number = 0;

  for (let i = 0; i < scores.length; i++) {
    if (i === 0) {
      lowerScore = scores[i];
      higherScore = scores[i];
    }

    if (scores[i] > higherScore) {
      maxCounter++;
      higherScore = scores[i];
    }

    if (scores[i] < lowerScore) {
      minCounter++;
      lowerScore = scores[i];
    }
  }
  return [maxCounter, minCounter];
}

let arrGames = [];
breakingRecords(arrGames);
