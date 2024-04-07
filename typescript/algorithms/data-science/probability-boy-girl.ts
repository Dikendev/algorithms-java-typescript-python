const POSSIBLE_CHILDREN = ["Boy", "Girl"];

type Child = (typeof POSSIBLE_CHILDREN)[keyof typeof POSSIBLE_CHILDREN];
type Children = Child[];

function cartesian(children: Children) {
	let sampleSpace: Set<string> = new Set();
	for (let child1 of children) {
		for (let child2 of children) {
			for (let child3 of children) {
				for (let child4 of children) {
					const outcome = `| ${child1} - ${child2} - ${child3} - ${child4} |`;
					sampleSpace.add(outcome);
				}
			}
		}
	}
	console.log(sampleSpace);
}

function cartesianRecursive(input: Children, length: number): Set<string> {
	let result: Set<string> = new Set();

	function helper(prefix: Children, remaining: number) {
		if (remaining === 0) {
			result.add(`| ${prefix.join(" - ")} |`);
		} else {
			for (let child of input) {
				console.log("child,", child);
				helper([...prefix, child], remaining - 1);
			}
		}
	}

	helper([], length);
	return result;
}

console.log("recursive", cartesianRecursive(POSSIBLE_CHILDREN, 4));

cartesian(POSSIBLE_CHILDREN);
