/**
 * Countdown
 * @param i {number} i Number
 */

function Countdown(i: number): void {
	console.log(i);
	//base case

	if (i <= 0) return;
	Countdown(--i);
}

Countdown(5);
