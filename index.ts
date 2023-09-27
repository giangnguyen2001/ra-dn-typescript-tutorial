import { Order } from "./types/Order";
import { Person } from "./types/Person";

// Not good
const sang: { first_name: string; last_name: string; age: number } = {
  first_name: "Sang",
  last_name: "Quang",
  age: 23,
};

const thai: Person = {
  first_name: "Thai",
  last_name: "Le Quang",
  age: 25,
};
const son: Person = {
  first_name: "Son",
  last_name: "Le Hoang",
  age: 24,
};

const order: Order = {
  order_id: 1,
  order_at: new Date(),
  user_id: 1,
  note: "",
  order_details: [],
};

console.log("sang", sang);
console.log("thai", thai);
console.log("son", son);
console.log("order", order);
