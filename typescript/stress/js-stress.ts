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
	return objectResult;
}

const totalLines = 2156282;

const stressedObject = (stressedResult: TestSearch) => {};

const resultData = generateLimitJsObject(totalLines);

stressedObject(resultData);
