import { Stack } from "./stack-ds";

const s = new Stack();
s.size();
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(30);
s.push(2);

console.log(s.size());
console.log(s.peek());
console.log(s.pop());
console.log(s.clear());
console.log(s.size());
