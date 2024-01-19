export {};
//FIFO (first in first out)

interface Queue<T> {
	enqueue(element: T): void;
	dequeue(): T | undefined;
	size(): number;
}

class Queue<T> implements Queue<T> {
	private storage: T[] = [];

	constructor() {}

	enqueue(element: T): void {
		this.storage.push(element);
	}

	dequeue(): T | undefined {
		return this.storage.shift();
	}

	size(): number {
		return this.storage.length;
	}
}

const queue = new Queue<string>();

queue.enqueue("A");
queue.enqueue("B");

console.log(queue.size());
console.log(queue.dequeue());
