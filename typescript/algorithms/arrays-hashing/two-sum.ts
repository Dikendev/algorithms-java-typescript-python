/**
 * Time complexity 0(n)
 * Space complexity 0(n)
 */

export function twoSum(numbers: number[], target: number): number[] {
	const map = new Map<number, number>();
	for (let i = 0; i < numbers.length; i++) {
		const rest = target - numbers[i];
		if (map.has(rest)) return [map.get(rest)!, i];
		map.set(numbers[i], i);
	}
	return [];
}
