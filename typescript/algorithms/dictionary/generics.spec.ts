import { ContactInfo, Dictionary, listToDict, OrderInfo } from "./generics";

describe("listToDict function", () => {
	it("should return by id using OrderInfo structure", () => {
		const orderList: OrderInfo[] = [
			{ id: "0001", orderNumber: "1234", name: "John Doe" },
			{ id: "0002", orderNumber: "1235", name: "Jane Doe" },
			{ id: "0003", orderNumber: "1236", name: "John Smith" },
			{ id: "0004", orderNumber: "1237", name: "Jane Smith" },
			{ id: "0005", orderNumber: "1238", name: "John Johnson" },
		];

		const orderListByIdResult: Dictionary<OrderInfo> = {
			"0001": { id: "0001", orderNumber: "1234", name: "John Doe" },
			"0002": { id: "0002", orderNumber: "1235", name: "Jane Doe" },
			"0003": { id: "0003", orderNumber: "1236", name: "John Smith" },
			"0004": { id: "0004", orderNumber: "1237", name: "Jane Smith" },
			"0005": {
				id: "0005",
				orderNumber: "1238",
				name: "John Johnson",
			},
		};

		const orderListById = listToDict<OrderInfo>(orderList, (item) => item.id);
		expect(orderListById).toEqual(orderListByIdResult);
	});

	it("should return by number using ContactInfo structure", () => {
		const contactList: ContactInfo[] = [
			{
				name: "Diego",
				number: "3333",
				address: "any_address_123",
			},
			{ name: "Juan", number: "4444", address: "any_address_456" },
			{ name: "Pedro", number: "5555", address: "any_address_789" },
		];

		const orderContactListByNumberResult: Dictionary<ContactInfo> = {
			"3333": { name: "Diego", number: "3333", address: "any_address_123" },
			"4444": { name: "Juan", number: "4444", address: "any_address_456" },
			"5555": { name: "Pedro", number: "5555", address: "any_address_789" },
		};

		const orderContactListByNumber = listToDict<ContactInfo>(
			contactList,
			(item) => item.number
		);

		expect(orderContactListByNumber).toEqual(orderContactListByNumberResult);
	});

	it("should return an empty dictionary when the list is empty", () => {
		const result = listToDict<ContactInfo>([], (item) => item.number);
		expect(result).toEqual({});
	});
});
