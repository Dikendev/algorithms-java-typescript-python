function argumentsLength(...args: any[]): number {
	let counter = 0;
	for (let i = 0; i < args.length; i++) {
		counter++;
	}
	return counter;
}

/**
 * argumentsLength(1, 2, 3); // 3
 */

argumentsLength({}, null, "3");
