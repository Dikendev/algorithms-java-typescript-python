export {};
// LIFO (last in first out)

interface StackStore<T> {
	push(element: T): string;
	pop(): string;
	peek(): string;
	size(): number;
	clear(): string;
}

export class Stack<T> implements StackStore<T> {
	private dataStore: T[] = [];
	private top: number;

	constructor() {
		this.dataStore = [];
		this.top = 0;
	}

	push(element: T): string {
		this.dataStore[this.top++] = element;
		return `${element} added`;
	}

	pop(): string {
		try {
			const removedElement = this.dataStore[--this.top];
			return `Element ${removedElement} deleted from stack`;
		} catch {
			return "Something wrong happened";
		}
	}

	peek(): string {
		if (
			!this.dataStore[this.top - 1] ||
			this.dataStore[this.top - 1] === undefined
		) {
			return "Empty Stack";
		} else {
			const element = this.dataStore[this.top - 1];
			return `Top element: ${element}`;
		}
	}

	size(): number {
		return this.top;
	}

	clear(): string {
		try {
			this.top = 0;
			this.dataStore.length = 0;
			return `Deleted top element: ${this.top} | length stack: ${this.dataStore.length}`;
		} catch {
			return "Something wrong happened";
		}
	}
}
