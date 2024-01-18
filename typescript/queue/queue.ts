//FIFO (first in first out)

interface Queue<T> {
	enqueue(element: T): void;
	dequeue(): T;
	size(): number;
}
