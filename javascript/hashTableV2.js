const hashMap = new Map();

hashMap.set('name', 'Diego');
hashMap.set('age', '28');
hashMap.set('city', 'Blumenau');

// console.log(hashMap.get('name'));
// console.log(hashMap.get('age'));
// console.log(hashMap.get('city'));

// console.log(hashMap.has('name'));
// console.log(hashMap.has('occupation'));
hashMap.delete('city');
// console.log(hashMap.entries());

const MyMap = new Map();

MyMap.set('a', 1);
MyMap.set('b', 2);
MyMap.set('c', 3);

MyMap.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});

for (const key of MyMap.keys()) {
  console.log('oi')

  console.log(key)
}