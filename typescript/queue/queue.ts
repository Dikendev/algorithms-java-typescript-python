export {};

/**
 * FIFO (first in first out)
 */
export interface Queue<T> {
	enqueue(element: T): void;
	dequeue(): T;
	size(): number;
}

export class Queue<T> implements Queue<T> {
	protected MAX_QUEUE_SIZE: number = 1000;
	protected head: number = 0;
	private storage: T[] = [];

	constructor(MAX_QUEUE_SIZE?: number) {
		if (typeof MAX_QUEUE_SIZE === "number") {
			this.MAX_QUEUE_SIZE = MAX_QUEUE_SIZE;
		}
	}

	enqueue(element: T): void {
		if (this.size() < this.MAX_QUEUE_SIZE) {
			console.log("this.MAX_QUEUE_SIZE, ", this.MAX_QUEUE_SIZE);

			console.log("sizê, ", this.size());
			this.storage.push(element);
		} else {
			throw new Error("Queue overflow!");
		}
	}

	dequeue(): T {
		const output = this.storage[this.head];
		this.storage[this.head] = undefined as unknown as T;
		this.head++;

		if (this.head >= this.MAX_QUEUE_SIZE) {
			this.storage.slice(0, this.head);
			this.head = 0;
		}
		return output;
	}

	size(): number {
		return this.storage.length - this.head;
	}
}
