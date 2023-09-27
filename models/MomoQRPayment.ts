import { MomoPayment } from "./MomoPayment";

export class MomoQRPayment extends MomoPayment {
  override pay(): void {
    console.log("MomoQRPayment.pay");
  }
}
