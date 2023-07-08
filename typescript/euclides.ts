function euclid_sub(a: number, b: number): number {
	a = Math.abs(a);
	b = Math.abs(b);

	if (a == 0) {
		return b;
	} else if (b == 0) {
		return a;
	}

	while (a != b) {
		if (a > b) {
			a -= b;
		} else {
			b -= a;
		}
	}
	return a;
}

console.log(euclid_sub(1680, 640));
