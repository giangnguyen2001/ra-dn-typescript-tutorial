import { OrderDetail } from "./OrderDetail";

export interface Order {
  order_id: number;

  order_at: Date;

  user_id: number;

  note: string;

  order_details: OrderDetail[];
}
