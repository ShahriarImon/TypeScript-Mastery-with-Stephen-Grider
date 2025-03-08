class Vehicle {
  constructor(public color: string) {}
  drive(): void {
    console.log("truuu tuu tuu uu");
  }
  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }

  drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const carA = new Car("red", 4);

vehicle.drive();
carA.startDrivingProcess();
console.log(carA.wheels);
