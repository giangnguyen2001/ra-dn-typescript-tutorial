import { ManageWithGeneric } from "./ManageWithGeneric";
import readline from "readline";
import { Car } from "./Models/Car";

let readLineInstance = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readInput = (question: string) => {
  return new Promise((resolve, reject) => {
    readLineInstance.question(question, (action: string) => {
      resolve(action);
    });
  });
};

const manage: ManageWithGeneric<Car> = new ManageWithGeneric<Car>();
function Mainz() {
  readLineInstance.question("Vui lòng nhập: ", async (action: string) => {
    const change = action.toUpperCase();

    while (true) {
      if (change === "C") {
        console.log("Vui long nhap thong tin xe:");
        const id = await readInput("Nhap ID:");
        const newCar: Car = new Car(
          Number(id),
          "Toyota",
          "",
          142000,
          "Blue",
          "SUV"
        );
        manage.create(newCar);
        console.log("Create success");
      } else if (change === "R") {
        manage.show();
        console.log();
      } else if (change === "U") {
        const updateCar: Car = new Car(3, "blbl", "", 10, "Green", "SUV");
        manage.update(1, updateCar);
      } else if (change === "D") {
        manage.delete(1);
      } else if (change === "E") {
        readLineInstance.close();
        break;
      }
      Mainz();
      break;
    }
  });
}
Mainz();
