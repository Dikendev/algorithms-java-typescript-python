export interface TestSearch {
	[key: string]: {
		id: number;
		serialNumber: string;
		moduleType: string;
		productionOrderNumber: string;
		materialNumber: string;
		shift: string;
		approvedStatus: string;
		testLine: number;
		dateCreate: string;
		panel: number;
		plantCode: string;
		userNameExecutor: string;
		notes: string;
	};
}

function generateLimitJsObject(totalLines: number): TestSearch {
	const objectResult: TestSearch = {};
	for (let i = 0; i < totalLines; i++) {
		objectResult[i] = {
			id: i,
			serialNumber: "11111111-222",
			moduleType: "CTM",
			productionOrderNumber: "22222222",
			materialNumber: "33333333",
			shift: "3",
			approvedStatus: "Approved",
			testLine: 157,
			plantCode: "3111",
			dateCreate: "2024-03-01T02:36:48.000Z",
			panel: 166,
			userNameExecutor: "olasex",
			notes: "test_any_note",
		};
	}
	console.log(objectResult);
	return objectResult;
}

const totalLines = 2156282;

const stressedObject = (stressedResult: TestSearch) => {
	console.log("works");
};

const resultData = generateLimitJsObject(totalLines);

stressedObject(resultData);
