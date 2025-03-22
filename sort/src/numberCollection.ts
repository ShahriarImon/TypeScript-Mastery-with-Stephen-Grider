import { Sorter } from "./sorter";

export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }
  get length(): number {
    return this.data.length;
  }
  compare(leftHand: number, rightHand: number): boolean {
    return this.data[leftHand] > this.data[rightHand];
  }
  swap(leftHand: number, rightHand: number): void {
    let temp = this.data[leftHand];
    this.data[leftHand] = this.data[rightHand];
    this.data[rightHand] = temp;
  }
}
