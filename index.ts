import { MomoQRPayment } from "./models/MomoQRPayment";

const momoPayment: MomoQRPayment = new MomoQRPayment(1);
console.log("momoPayment", momoPayment);
momoPayment.showTotal();
momoPayment.transfer();
momoPayment.pay();
