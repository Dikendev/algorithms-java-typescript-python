export {};
const SAMPLE_SPACE = ["heads", "tails"] as const;

export type SampleSpace = (typeof SAMPLE_SPACE)[keyof typeof SAMPLE_SPACE];
export type Spaces = SampleSpace[];

function probability(space: Spaces) {
	const probabilityHeads = 1 / space.length;
	console.log(`Probability of choosing heads is ${probabilityHeads}`);
}

const ishHeadsOrTails = (): Spaces => {
	return Object.values(SAMPLE_SPACE);
};

const isNeither = (): [] => {
	return [];
};

const isHeads = (): SampleSpace => "heads";
const isTails = (): SampleSpace => "tails";

function getMatchingEvent(event: () => SampleSpace | Spaces) {
	if (typeof event === "function") {
		return event();
	}
}

const eventConditions = [ishHeadsOrTails, isHeads, isHeads, isTails, isNeither];

function conditions() {
	for (let eventCondition of eventConditions) {
		console.log(eventCondition.name);
		const event = getMatchingEvent(eventCondition);
		console.log("event", event);
	}
}

function computeProbability() {}
