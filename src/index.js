import HashMap from "./modules/hash-map.js";

const myHashMap = new HashMap()

console.log(myHashMap.set("Hello", 4))
console.log(myHashMap.set("agdsfgdasgads", 4))
console.log(myHashMap.getMap());
console.log(myHashMap.get("Hello"));
console.log(myHashMap.get("iofdughadosiygffaoidsuyfdoiguy"));
console.log(myHashMap.has("Hello"));
console.log(myHashMap.has("audfgikoudfsygikfuayg"));
console.log(myHashMap.hash("Hello"))
myHashMap.remove("Hello");
console.log(myHashMap.getMap());
console.log(myHashMap.length());
myHashMap.set("iaygfdsoiuyfadg", 7);
console.log(myHashMap.length());
myHashMap.set("OUAhdfiloduswfg", 8);
console.log(myHashMap.length());
console.log(myHashMap.getMap());
console.log(myHashMap.keys());
// import LinkedList from './modules/linked-list.js';

// const myList = new LinkedList();

// myList.append("Test", 1);

// console.log(myList.getList());

// myList.append("afidusgifdaug", 4);

// console.log(myList.tail());

// console.log(myList.getList());

// myList.pop();

// console.log(myList.getList());

// myList.append("afidusgifdaug", 4);

// console.log(myList.get("afidusgifdaug"));


// console.log(myList.has("afidusgifdaug"));

// console.log(myList.keys());

// console.log(myList.values());

// console.log(myList.entries());

// console.log(myList.size());

// myList.clear();

// myList.set("Test", 4);
// myList.set("OAFUEhyoiuysagdoliuyfag", 4);

// console.log(myList.getList());

