import { CharCollection } from "./charCollection";
import { ListCollection } from "./linkedListColllection";
import { NumberCollection } from "./numberCollection";

// ...........................................NumberCollection....................................................

const numCollection = new NumberCollection([12, 3, 4, 0, -2, 21]);
numCollection.sort();
console.log(numCollection.data);

// ...........................................CharCollection....................................................

const num2Collection = new CharCollection("sadwerere");
num2Collection.sort();
console.log(num2Collection.data);

// ...........................................LinkedListCollection....................................................

const listCollection = new ListCollection();
listCollection.add(50);
listCollection.add(40);
listCollection.add(30);
listCollection.add(20);
listCollection.print();
listCollection.insertAt(22, 3);
listCollection.print();
listCollection.deleteAt(1);
listCollection.print();

listCollection.sort();
listCollection.print();
