export interface Counter {
	[key: string]: number;
}
export type DataCompressed = Map<string, number>;

export interface StatusMapParam {
	item: string;
	times: number;
	counter: number;
}

export class CompressData {
	static compressArrayToMap(array: string[]): DataCompressed {
		const statusMap = new Map<string, number>();
		let counter: number = 0;

		const appearedTimes: Counter = {};
		for (let i = 0; i < array.length; i++) {
			const item = array[i];
			const nextItem = array[i + 1];
			counter++;

			if (item !== nextItem) {
				this.setOccurrenceCounter(appearedTimes, item);
				const times = appearedTimes[item];
				this.setStatusMap(statusMap, { item, times, counter });
				counter = 0;
			}
		}

		return statusMap;
	}

	static generateArrayFromMap(data: DataCompressed): string[] {
		const backToArray: string[] = [];

		data.forEach((value, key) => {
			const result = this.removeCounterText(key);
			for (let i = 0; i < value; i++) {
				backToArray.push(result);
			}
		});

		return backToArray;
	}

	static removeCounterText(key: string): string {
		return key.split("_")[0];
	}

	static setStatusMap(
		statusMap: Map<string, number>,
		statusMapParam: StatusMapParam
	): void {
		const key = `${statusMapParam.item}_${statusMapParam.times}`;
		if (!statusMap.has(key)) {
			statusMap.set(key, statusMapParam.counter);
		}
	}

	static setOccurrenceCounter(appearedTimes: Counter, actual: string): void {
		if (!appearedTimes[actual]) {
			appearedTimes[actual] = 1;
		} else {
			appearedTimes[actual]++;
		}
	}
}
