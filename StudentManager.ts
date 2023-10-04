import { Student } from "./Models/Car";

export class StudentManager {
  static students: Student[] = [];

  public static createStudent(student: Student): void {
    StudentManager.students.push(student);
  }

  public static updateStudent(id: number, data: Student): void {
    StudentManager.students = StudentManager.students.map(
      (student: Student) => {
        if (student.getStudentId === id) {
          data.setStudentId = id;
          return data;
        }
        return student;
      }
    );
  }

  public static showAllStudent(): any {
    console.log("Danh sách sinh viên:");
    StudentManager.students.forEach((student: Student) => {
      student.displayData();
    });
  }

  public static deleteStudent(id: number): void {
    StudentManager.students = StudentManager.students.filter(
      (student) => student.getStudentId !== id
    );
  }
}
//static thuộc phạm vi class và không phụ thuộc vào instance
