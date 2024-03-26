const phoneList = [
	{ customerId: "0001", areaCode: "321", number: "555-1234" },
	{ customerId: "0002", areaCode: "321", number: "555-1235" },
	{ customerId: "0003", areaCode: "321", number: "555-1236" },
	{ customerId: "0004", areaCode: "321", number: "555-1237" },
	{ customerId: "0005", areaCode: "321", number: "555-1238" },
];

interface PhoneInfo {
	customerId: string;
	areaCode: string;
	number: string;
}

interface Dictionary<T> {
	[key: string]: T;
}

function listToDict<T>(list: T[], idGen: (arg: T) => string): Dictionary<T> {
	const dictionary: Dictionary<T> = {};

	list.forEach((item: T) => {
		const dictionaryKey = idGen(item);
		dictionary[dictionaryKey] = item;
	});
	return dictionary;
}

console.log(listToDict(phoneList, (item: PhoneInfo) => item.customerId));
