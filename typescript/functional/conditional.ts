type IsString<T> = T extends string ? true : false;
type X = IsString<"2">;
type Y = IsString<2>;

type Head<T> = T extends [infer H, ...infer _] ? H : never;
type Z = Head<[]>;

type Reverse<A> = A extends [infer First, ...infer Rest]
	? [...Reverse<Rest>, First]
	: A;
type R = Reverse<[1, 2, 3, 4, 5]>;

type IsPalindrome<A> = A extends [infer First, ...infer Rest, infer Last]
	? First extends Last
		? IsPalindrome<Rest>
		: false
	: true;

type P = IsPalindrome<[1, 2, 3, 2, 1]>;
type F = IsPalindrome<[1, 2, 3, 4, 5]>;
