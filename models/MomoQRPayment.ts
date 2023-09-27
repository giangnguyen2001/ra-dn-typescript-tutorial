import { MomoPayment } from "./MomoPayment";

export class MomoQRPayment implements MomoPayment {
  provider: string = "Momo";

  total: number;

  phoneNumber: string;

  constructor(total: number, phoneNumber: string) {
    this.total = total;
    this.phoneNumber = phoneNumber;
  }

  pay(): void {
    console.log("MomoQRPayment.pay");
  }
}
