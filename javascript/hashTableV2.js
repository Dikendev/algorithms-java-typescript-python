const hashMap = new Map();

hashMap.set('name', 'Diego');
hashMap.set('age', '28');
hashMap.set('city', 'Blumenau');

hashMap.delete('city');

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

userMap.set(user1, 'John Doe')
userMap.set(user2, 'Jane Smith')
console.log(userMap.get(user2))

console.log(userMap.get({ id: 2 }))