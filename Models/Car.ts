export class Car {
   id: number;

  private name: string;

  private brand: string;

  private price: number;

  private color: string;

  private category: string;

  constructor(
    id: number,
    name: string,
    brand: string,
    price: number,
    color: string,
    category: string
  ) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.category = category;
  }

  public get getId(): number {
    return this.id;
  }

  public set setId(id: number) {
    this.id = id;
  }

  public get getName(): string {
    return this.name;
  }

  public set setName(name: string) {
    this.name = name;
  }

  public get getBrand(): string {
    return this.brand;
  }

  public set setBrand(brand: string) {
    this.brand = brand;
  }

  public get getPrice(): number {
    return this.price;
  }

  public set setPrice(price: number) {
    this.price = price;
  }

  public get getColor(): string {
    return this.color;
  }

  public set setColor(color: string) {
    this.color = color;
  }

  public get getCategory(): string {
    return this.category;
  }

  public set setCategory(category: string) {
    this.category = category;
  }

  public inputData(data: Car): void {
    this.id = data.id;
    this.name = data.name;
    this.brand = data.brand;
    this.price = data.price;
    this.color = data.color;
    this.category = data.category;
  }

  public displayData(): void {
    console.log(this);
  }
}
