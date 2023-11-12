{
  //?----------------------------------------------

  //---------Type guard-------------
  //Note : Type guard means checking variable type

  //*---------Using TypeOf Guard
  //Note : typeOf use to check Data type.it will check type in runtime

  type alphaNumeric = number | string;

  const add = (param1: alphaNumeric, param2: alphaNumeric): alphaNumeric => {
    // return param1 + param2; // In type we can write it will then give error meass :Operator '+' cannot be applied to types 'string | number' and 'string | number'.
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result: alphaNumeric = add("20", 20);

  console.log("The result :-", result);

  //*---------Using (In) Guard ---------------
  //?In Guard use  in  object

  type NormalUser = {
    name: string;
    age: number;
  };

  type AdminUser = {
    name: string;
    role: "Admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    // user.name
    if ("role" in user) {
      // user.name  user.role
      console.log(`My name is :${user.name}.My role is ${user.role}`);
    } else {
      //user.name user.age
      console.log(`My name is :${user.name}.My role is user`);
    }
  };

  const nomarUser: NormalUser = { name: "MEHEI HASAN ", age: 20 };
  const adminUser: AdminUser = { name: "Mir Hosin", role: "Admin" };

  getUser(nomarUser);

  getUser(adminUser);

  //?----------------------------------------------
}
