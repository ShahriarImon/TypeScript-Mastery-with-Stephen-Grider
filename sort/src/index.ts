// const sort = (arr: number[]): void => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let leftHand = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = leftHand;
//       }
//     }
//   }
//   console.log("arr:", arr);
// };
// sort([12, 3, 4, -1, 0, 21]);

interface Sortable {
  length: number;
  sort(l: number, r: number): void;
  compare(l: number, r: number): boolean;
}

class Sorter {
  constructor(public collection: Sortable) {}
  sort(): void {
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.sort(j, j + 1);
        }
      }
    }
  }
}

class NumberCollection {
  constructor(private collection: number[]) {}
  get length(): number {
    return this.collection.length;
  }
  compare(leftHand: number, rightHand: number): boolean {
    return leftHand > rightHand;
  }
  sort(leftHand: number, rightHand: number): void {
    let temp = leftHand;
    leftHand = rightHand;
    rightHand = temp;
  }
}
const numCollection = new NumberCollection([12, 3, 4, -1, 0, 21]);
const numSorting = new Sorter(numCollection);
numSorting.sort();
console.log(numSorting.collection);
