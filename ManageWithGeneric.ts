import { Car } from "./Models/Car";

export class ManageWithGeneric<T extends { id: number }> {
  //không static thì luôn tạo lại initial value
  items: T[] = [];

  //tao Student mới có chứa static sẽ không cần phải dùng new tạo 1 instance mới
  public create(item: T): void {
    this.items.push(item);
    //this.students.push(data) //this => con trỏ
  }

  public update(id: number, data: T): void {
    //Gán lại mảng vì static lưu lại giá trị khi chương trình chạy
    this.items = this.items.map((item: T) => {
      if (item.id === id) {
        data.id = id;
        return data;
      }
      return item;
    });
  }

  //Chú ý ở đây vì biến tĩnh static nên hàm vẫn phải có static
  public show(): any {
    this.items.forEach((item: T) => {
      console.log(item);
    });
  }

  public delete(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
