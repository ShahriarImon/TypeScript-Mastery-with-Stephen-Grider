let apples = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

const colors = ["red", "green", "blue"];

let foundColor: boolean;

console.log("foundColor - 1:", foundColor);
for (let i = 0; i < colors.length; i++) {
  if (colors[i] === "green") {
    foundColor = true;
  }
}

console.log("foundColor - 2:", foundColor);
