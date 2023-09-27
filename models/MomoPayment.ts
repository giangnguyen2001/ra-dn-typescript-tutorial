import { Payment } from "./Payment";

export abstract class MomoPayment extends Payment {
  constructor(total: number) {
    super("Momo", total);
  }

  override transfer() {
    console.log("MomoPayment.transfer");
  }
}
