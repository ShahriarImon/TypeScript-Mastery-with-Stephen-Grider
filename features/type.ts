const today: Date = new Date();
today.getMonth();

const person: { age: number } = {
  age: 20,
};

class Color {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}
const red: Color = new Color("Yellow");
const AColor = red.getColor();
console.log("AColor:", AColor);

function logNumber(i: boolean): number {
  return i && 10;
  // console.log(i);
}

console.log(logNumber(true));
