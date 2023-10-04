import { StudentManager } from "./StudentManager";
import readline from "readline";
import { Student } from "./Models/Student";

let readLineInstance = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Main() {
  readLineInstance.question("Vui lòng nhập: ", (action: string) => {
    switch (action) {
      case "C":
        const student: Student = new Student(
          1,
          "Jack Sparrow",
          true,
          "RA-Parttime",
          30,
          "DN"
        );
        StudentManager.createStudent(student);
        Main();
        break;
      case "R":
        StudentManager.showAllStudent();
        Main();
        break;
      case "U":
        const student1: Student = new Student(
          2,
          "James T.Kirk",
          true,
          "RA1",
          29,
          "DN"
        );
        StudentManager.updateStudent(2, student1);
        Main();
        break;
      case "D":
        StudentManager.deleteStudent(1);
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
