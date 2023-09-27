import { MomoQRPayment } from "./models/MomoQRPayment";

const momoQrPayment: MomoQRPayment = new MomoQRPayment(234, '0123456789');
console.log('momoQrPayment', momoQrPayment);
momoQrPayment.pay();