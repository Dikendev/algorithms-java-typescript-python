export interface IKeyValuePair<T, U> {
	key: T;
	value: U;
}

export interface IHashTable<K, V> {
	clear(): void;
	clone(): IHashTable<K, V>;
	contains(value: V): boolean;
	containsKey(key: K): boolean;
	containsValue(value: V): boolean;
	elements(): IKeyValuePair<K, V>[];
	get(key: K): V;
	put(key: K, value: V): void;
	putAll(elements: IKeyValuePair<K, V>[]): void;
	remove(key: K): V;
	size(): number;
	values(): V[];
}

export class HashTable<K, V> implements IHashTable<K, V> {
	private capability: number = 0;
	private buckets: IKeyValuePair<K, V>[][] = [];
	private hash: (value: K) => number;
	private equalKey: (key1: K, key2: K) => boolean = (key1, key2) =>
		key1 === key2;
	private equalValue: (value1: V, value2: V) => boolean = (value1, value2) =>
		value1 === value2;

	constructor(capacity: number, hash: (value: K) => number) {
		this.capability = capacity;
		this.hash = hash;
		for (let i = 0; i < this.capability; i++) {
			this.buckets.push([]);
		}
	}

	clear(): void {
		for (let i = 0; i < this.capability; i++) {
			this.buckets.push([]);
		}
	}

	clone(): IHashTable<K, V> {
		throw new Error("Method not implemented.");
	}
	contains(value: V): boolean {
		throw new Error("Method not implemented.");
	}
	containsKey(key: K): boolean {
		throw new Error("Method not implemented.");
	}
	containsValue(value: V): boolean {
		throw new Error("Method not implemented.");
	}
	elements(): IKeyValuePair<K, V>[] {
		return this.buckets.reduce((pv, cv) => pv.concat(cv), []);
	}
	get(key: K): V {
		throw new Error("Method not implemented.");
	}
	put(key: K, value: V): void {
		const bucket: IKeyValuePair<K, V>[] = this.getBucket(key);
		bucket.push({ key: key, value: value });
	}
	putAll(elements: IKeyValuePair<K, V>[]): void {
		throw new Error("Method not implemented.");
	}
	remove(key: K): V {
		throw new Error("Method not implemented.");
	}
	size(): number {
		throw new Error("Method not implemented.");
	}
	values(): V[] {
		throw new Error("Method not implemented.");
	}

	private getBucket(key: K): IKeyValuePair<K, V>[] {
		let index = this.hash(key);
		if (index < 0) {
			index = Math.abs(index);
		}

		return this.buckets[
			index < this.buckets.length ? index : index % this.buckets.length
		];
	}
}
