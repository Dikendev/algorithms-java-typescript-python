const email: string = "diken.dev@gmail.com";

function checkEmail(email: string) {
	const regex: RegExp = /abc/;

	return regex.test(email);
}

const patt = /^auto$/;
console.log(patt.test("auto s12"));
