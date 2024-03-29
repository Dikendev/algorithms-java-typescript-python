function createCounter(n: number): () => number {
	let count = n;
	return () => count++;
}

const counter = createCounter(-2);
