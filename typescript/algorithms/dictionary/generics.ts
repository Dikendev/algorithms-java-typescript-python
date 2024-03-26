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

interface Dictionary {
	[key: string]: PhoneInfo;
}

function listToDict(
	list: PhoneInfo[],
	idGen: (arg: PhoneInfo) => string
): Dictionary {
	const dictionary: Dictionary = {};

	list.forEach((item: PhoneInfo) => {
		const dictionaryKey = idGen(item);
		dictionary[dictionaryKey] = item;
	});
	return dictionary;
}

console.log(listToDict(phoneList, (item: PhoneInfo) => item.customerId));
