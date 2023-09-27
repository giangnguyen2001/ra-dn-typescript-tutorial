export abstract class Payment {
  provider: string;
  total: number;

  constructor(provider: string, total: number) {
    this.provider = provider;
    this.total = total;
  }

  public showTotal() {
    console.log("total: ", this.total);
  }

  abstract transfer(from: string, to: string): void;

  abstract pay(): void;
}
