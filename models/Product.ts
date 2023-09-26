export class Product {
  private product_id: number;
  private name: string;
  private unit_price: number;

  constructor(product_id: number, name: string, unit_price: number) {
    this.product_id = product_id;
    this.name = name;
    this.unit_price = unit_price;
  }

  public get getProductId(): number {
    return this.product_id;
  }

  public get getName(): string {
    return this.name;
  }

  public get getUnitPrice(): number {
    return this.unit_price;
  }

  public set setProductId(product_id: number) {
    this.product_id = product_id;
  }

  public set setName(name: string) {
    this.name = name;
  }

  public set setUnitPrice(unit_price: number) {
    this.unit_price = unit_price;
  }
}
