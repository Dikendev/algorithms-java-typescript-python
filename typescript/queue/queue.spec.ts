import { Queue } from "./queue";

describe("Queue", () => {
	let queue: Queue<string>;

	beforeEach(() => {
		queue = new Queue<string>();
	});

	it("should return the correct size of the queue", () => {
		queue.enqueue("A");
		const size = queue.size();
		expect(size).toBe(1);
	});

	it("should return the correct size after dequeue ", () => {
		queue.enqueue("A");
		queue.enqueue("B");
		queue.dequeue();
		queue.dequeue();

		const size = queue.size();
		expect(size).toBe(0);
	});

	it("should reach the max size queue ", () => {
		const queue2 = new Queue<string>(2);

		try {
			queue2.enqueue("A");
			queue2.enqueue("B");
			queue2.enqueue("C");
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}
	});

	it("should dequeue elements in the correct order", () => {
		queue.enqueue("A");
		queue.enqueue("B");
		queue.enqueue("C");

		const element1 = queue.dequeue();
		const element2 = queue.dequeue();
		const element3 = queue.dequeue();

		expect(element1).toBe("A");
		expect(element2).toBe("B");
		expect(element3).toBe("C");
	});

	it("should return undefined when dequeueing from an empty queue", () => {
		const element = queue.dequeue();
		expect(element).toBeUndefined();
	});
});
