export class User {
  user_id: number = 1;

  // Chỉ có những class kế thừa (extend) User mới có thể thay đổi giá trị
  protected username: string = "thailq";

  // Có thể thay dổi ở mọi nơi
  public email: string = "thailq@gmail.com";

  // Chỉ có thể thay đổi trong class này (trong các hàm thuộc class này)
  private password: string = "pwd123";

  constructor() {}

  public login(password: string) {
    if (password === this.password) {
      console.log("Successed");
      console.log("user", this);
    } else {
      console.log("Failed");
    }
  }

  protected sendMessage(msg: string) {
    console.log("Message: ", msg);
    this.hashPassword();
  }

  private hashPassword(): void {}
}
