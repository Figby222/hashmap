import LinkedList from './modules/linked-list.js';

const myList = new LinkedList();

myList.append("Test", 1);

console.log(myList.getList());

myList.append("afidusgifdaug", 4);

console.log(myList.tail());

console.log(myList.getList());

myList.pop();

console.log(myList.getList());

myList.append("afidusgifdaug", 4);

console.log(myList.get("afidusgifdaug"));


console.log(myList.has("afidusgifdaug"));

console.log(myList.keys());

console.log(myList.values());

console.log(myList.entries());

// import HashMap from "./modules/hash-map.js";

// const myHashMap = new HashMap()

// console.log(myHashMap.hash("Hello"))
