export interface OrderInfo {
	id: string;
	orderNumber: string;
	name: string;
}

export interface ContactInfo {
	name: string;
	number: string;
	address: string;
}

export interface Dictionary<T> {
	[key: string]: T;
}

export function listToDict<T>(
	list: T[],
	idGen: (arg: T) => string
): Dictionary<T> {
	const dictionary: Dictionary<T> = {};

	list.forEach((item: T) => {
		const dictionaryKey = idGen(item);
		dictionary[dictionaryKey] = item;
	});

	return dictionary;
}
