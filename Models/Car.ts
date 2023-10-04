export class Car {
  private brand: string;

  private price: number;

  private sex: boolean;

  private className: string;

  private age: number;

  private address: string;

  constructor(
    brand: string,
    price: number,
    sex: boolean,
    className: string,
    age: number,
    address: string
  ) {
    this.brand = brand;
    this.price = price;
    this.sex = sex;
    this.className = className;
    this.age = age;
    this.address = address;
  }

  public get getStudentId(): number {
    return this.studentId;
  }

  public set setStudentId(studentId: number) {
    this.studentId = studentId;
  }

  public get getStudentName(): string {
    return this.studentName;
  }

  public set setStudentName(studentName: string) {
    this.studentName = studentName;
  }

  public get getSex(): boolean {
    return this.sex;
  }

  public set setSex(sex: boolean) {
    this.sex = sex;
  }

  public get getClassName(): string {
    return this.className;
  }

  public set setClassName(className: string) {
    this.className = className;
  }

  public get getAge(): number {
    return this.age;
  }

  public set setAge(age: number) {
    this.age = age;
  }

  public get getAddress(): string {
    return this.address;
  }

  public set setAddress(address: string) {
    this.address = address;
  }

  public inputData(data: Student): void {
    this.studentId = data.studentId;
    this.studentName = data.studentName;
    this.sex = data.sex;
    this.className = data.className;
    this.age = data.age;
    this.address = data.address;
  }

  public displayData(): void {
    console.log(this);
  }
}
