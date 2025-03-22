import { Sorter } from "./sorter";

export class Node {
  constructor(public data: number) {}
  next: Node | null = null;
}

export class ListCollection extends Sorter {
  head: Node | null = null;
  // constructor(data: Node) {
  //   this.head = data;
  // }
  add(data: number) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }
  get length() {
    if (!this.head) {
      return 0;
    }
    let node = this.head;
    let count = 1;
    while (node.next) {
      count++;
      node = node.next;
    }
    return count;
  }
  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }
    let node: Node | null = this.head;
    let counter = 0;
    while (node) {
      if (index == counter) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Index out of bounds" + ` length - ${this.length}`);
  }

  insertAt(value: number, index: number) {
    if (index > 0 && index < this.length) {
      let node = new Node(value);
      node.next = this.at(index);
      this.at(index - 1).next = node;
    } else {
      throw new Error("Index out of bounds");
    }
  }
  deleteAt(index: number) {
    if (index > 0 && index < this.length) {
      this.at(index - 1).next = this.at(index).next;
    } else {
      throw new Error("Index out of bounds");
    }
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number) {
    let temp = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = temp;
  }

  print() {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }
    let node: Node | null = this.head;
    let printedStr = "";

    while (node) {
      printedStr = printedStr + node.data + " ";
      node = node.next;
    }
    console.log(printedStr);
  }
}
