import { CharCollection } from "./charCollection";
import { ListCollection, Node } from "./linkedListColllection";
import { NumberCollection } from "./numberCollection";

interface Sortable {
  length: number;
  swap(l: number, r: number): void;
  compare(l: number, r: number): boolean;
}

class Sorter {
  constructor(public collection: Sortable) {}
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}

const numCollection = new NumberCollection([12, 3, 4, 0, -2, 21]);
const num2Collection = new CharCollection("sadwerere");
const numSorter = new Sorter(numCollection);
const num2Sorter = new Sorter(num2Collection);
numSorter.sort();
num2Sorter.sort();
console.log(numCollection.data);
console.log(num2Collection.data);

const node = new Node(10);

const listCollection = new ListCollection(node);
listCollection.add(20);
listCollection.add(30);
listCollection.add(40);
listCollection.add(50);
console.log(listCollection.at(2));

let c = 5;
let d = c;
c = 10;
console.log(c, d);

let a = { name: "ratul" };
let b = a;
b.name = "niloy";
console.log(a, b);
