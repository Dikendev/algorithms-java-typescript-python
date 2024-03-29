const hashMap = new Map();

const myMap = new Map();

myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);

myMap.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});

for (const key of myMap.keys()) {
  console.log('oi');
  console.log(key);
}

const user1 = { id: 1 };
const user2 = { id: 2 };
const user3 = { id: 3 };

const userMap = new Map();