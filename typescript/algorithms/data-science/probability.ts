const SAMPLE_SPACE = ["heads", "tails"] as const;

export type SampleSpace = (typeof SAMPLE_SPACE)[keyof typeof SAMPLE_SPACE];

function probability(space: SampleSpace[]) {
	const probabilityHeads = 1 / space.length;
	console.log(`Probability of choosing heads is ${probabilityHeads}`);
}

probability(["heads", "tails"]);
