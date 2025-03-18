export class Node {
  constructor(public data: number) {}
  next: Node | null = null;
}

export class ListCollection {
  head: Node | null = null;
  constructor(data: Node) {
    this.head = data;
  }
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
  length() {
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
    let node = this.head;
    let counter = 0;
    while (node.next) {
      if (index == counter) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Index out of bounds");
  }
}
