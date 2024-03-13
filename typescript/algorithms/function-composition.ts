type F = (x: number) => number;

function compose(functions: F[]): F {
	return function (x: number) {
		if (!functions.length) {
			return x;
		} else {
			for (let i = functions.length - 1; i >= 0; i--) {
				x = functions[i](x);
			}
			return x;
		}
	};
}

const fn: F = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);

fn(4);

/**
 *
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
