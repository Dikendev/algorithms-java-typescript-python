export function startCounter(n: number): () => number {
	let count = n;
	return () => count++;
}
