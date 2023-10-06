import { CarManager } from "./CarManager";
import readline from "readline";
import { Car } from "./Models/Car";

let readLineInstance = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Main() {
  readLineInstance.question("Vui lòng nhập: ", (action: string) => {
    switch (action) {
      case "C":
        const car: Car = new Car(
          1,
          "Tesla model 3",
          "Tesla",
          142800,
          "White",
          "SUV"
        );
        CarManager.createCar(car);
        Main();
        break;
      case "R":
        CarManager.showAllCar();
        Main();
        break;
      case "U":
        const cars: Car = new Car(
          1,
          "Tesla model 4",
          "Tesla",
          143000,
          "Black",
          "SUV"
        );
        CarManager.updateCar(1, cars);
        Main();
        break;
      case "D":
        CarManager.deleteCar(1);
        Main();
        break;
      case "E":
        readLineInstance.close();
        break;
      default:
        console.log(action);
        Main();
        break;
    }
  });
}

Main();
