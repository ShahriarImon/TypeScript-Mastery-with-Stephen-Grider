export class CharCollection {
  constructor(public data: string) {}
  get length(): number {
    return this.data.length;
  }
  compare(leftHand: number, rightHand: number): boolean {
    return (
      this.data[leftHand].toLowerCase() > this.data[rightHand].toLowerCase()
    );
  }
  swap(leftHand: number, rightHand: number): void {
    const characters = this.data.split("");
    let temp = characters[leftHand];
    characters[leftHand] = characters[rightHand];
    characters[rightHand] = temp;
    this.data = characters.join("");
  }
}
