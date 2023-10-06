import { Car } from "./Models/Car";

export class CarManager {
  //không static thì luôn tạo lại initial value
  static cars: Car[] = [];

  //tao Student mới có chứa static sẽ không cần phải dùng new tạo 1 instance mới
  public static createCar(data: Car): void {
    CarManager.cars.push(data);
    //this.students.push(data) //this => con trỏ
  }

  public static updateCar(id: number, data: Car): void {
    //Gán lại mảng vì static lưu lại giá trị khi chương trình chạy
    CarManager.cars = CarManager.cars.map((car: Car) => {
      if (car.getId === id) {
        data.setId = id;
        return data;
      }
      return car;
    });
  }

  //Chú ý ở đây vì biến tĩnh static nên hàm vẫn phải có static
  public static showAllCar(): any {
    CarManager.cars.forEach((car: Car) => {
      car.displayData();
    });
  }

  public static deleteCar(id: number): void {
    CarManager.cars = CarManager.cars.filter((car) => car.getId !== id);
  }
}
