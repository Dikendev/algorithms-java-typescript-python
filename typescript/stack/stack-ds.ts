export {};

export class Stack<T> {
	private dataStore: T[] = [];
	top: number;
	len: number = 0;

	constructor() {
		this.dataStore = [];
		this.top = 0;
	}

	push(element: T): void {
		this.dataStore[this.top++] = element;
	}

	pop(): T {
		return this.dataStore[--this.top];
	}

	peek(): T {
		return this.dataStore[this.top - 1];
	}

	size() {
		return this.top;
	}

	clear() {
		this.top = 0;
		this.dataStore.length = 0;
	}
}
