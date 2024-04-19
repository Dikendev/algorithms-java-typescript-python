const email: string = "diken.dev@gmail.com";

console.log(checkEmail(email));

function checkEmail(email: string) {
	const regex: RegExp = /abc/;
	return regex.test(email);
}
