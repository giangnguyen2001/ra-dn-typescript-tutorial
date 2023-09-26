import { User } from "./models/User";
import { Product } from "./models/Product";
import { Admin } from "./models/Admin";

const user: User = new User();
user.user_id = 2;
// user.username = "giangnt"; => Lỗi do thuộc tính username là protected
user.email = "giangntlq@gmail.com";
console.log("user", user);

user.login("pwd1234");

const admin: Admin = new Admin();
admin.changeProps();
console.log("admin", admin);

console.log("getters & setters");

const product: Product = new Product(2, "Cake", 12);
console.log("product", product);
product.setProductId = 10;
product.setName = "Table";
product.setUnitPrice = 1000;
console.log("product.product_id", product.getProductId);
console.log("product.name", product.getName);
console.log("product.unit_price", product.getUnitPrice);
