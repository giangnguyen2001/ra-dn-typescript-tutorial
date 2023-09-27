export class User {
  // default: Nếu không khai báo thì mặc định access modifier là public
  user_id: number = 1;

  // protected: Chỉ có những class kế thừa (extend) User mới có thể truy cập (bao gồm đọc và thay đổi giá trị)
  protected username: string = "thailq";

  // public: Có thể có thể truy cập (bao gồm đọc và thay đổi giá trị) ở mọi nơi
  public email: string = "thailq@gmail.com";

  // private: Chỉ có thể truy cập (bao gồm đọc và thay đổi giá trị) trong class này (trong các hàm thuộc class này)
  private password: string = "pwd123";

  constructor(user_id: number, password: string) {
    this.user_id = user_id;
    this.password = password;
  }

  public login(password: string) {
    if (password === this.password) {
      console.log("Successed");
      console.log("user", this);
    } else {
      console.log("Failed");
    }
  }

  protected sendMessage(msg: string): void {
    console.log("Message: ", msg);
    this.hashPassword();
  }

  private hashPassword(): void {}

  public set setPassword(password: string) {
    this.password = password;
  }
}
