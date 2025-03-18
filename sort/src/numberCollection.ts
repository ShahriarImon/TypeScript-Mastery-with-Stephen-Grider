export class NumberCollection {
  constructor(public data: number[]) {}
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
