type IsString<T> = T extends string ? true : false;
type X = IsString<"2">;
type Y = IsString<2>;

type Head<T> = T extends [infer H, ...infer _] ? H : never;
type Z = Head<[]>;
