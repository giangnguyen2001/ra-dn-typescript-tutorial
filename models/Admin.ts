import { User } from "./User";

export class Admin extends User {
  protected username: string = "tin"; // Class con có thể thay đổi giá trị mặc định của thuộc tính kế thừa từ class cha

  private is_system_admin: boolean = false;

  constructor(is_system_admin: boolean, password: string) {
    super(5, password);
    this.user_id = 6;
    this.is_system_admin = is_system_admin;
  }

  public changeProps() {
    this.user_id = 10;
    this.username = "tintt";
    this.email = "tintt@gmail.com";
    // this.password = '123'; => Lỗi do thuộc tính password là private
    this.login("pwd123");
    this.sendMessage("Send");
    // this.hashPassword();  => Lỗi do hashPassword() là private
  }
}
