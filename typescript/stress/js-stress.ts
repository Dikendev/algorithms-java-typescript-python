export interface TestSearch {
	[key: string]: {
		id: number;
	};
}

function generateLimitJsObject(totalLines: number): TestSearch {
	const objectResult = {};
	for (let i = 0; i < totalLines; i++) {
		objectResult[i] = {
			id: i,
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
