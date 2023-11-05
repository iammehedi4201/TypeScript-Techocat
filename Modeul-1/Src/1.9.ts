{
  //*-------------Learn Type Alias--------------

  // This is type alias and //*use give Frist Letter Capital it's convantion
  type Student = {
    name: string;
    age: number;
    phoneNumber?: string;
    gender: string;
    address: string;
  };

  const Student1: {
    name: string;
    age: number;
    gender: string;
    phoneNumber: string;
    address: string;
  } = {
    name: "Mehedi Hasan",
    age: 25,
    gender: "Male",
    phoneNumber: "01775777038",
    address: "Dhaka",
  };

  const student2: {
    name: string;
    age: number;
    gender: string;
    address: String;
  } = {
    name: "Evan",
    age: 24,
    gender: "Male",
    address: "comilla ",
  };

  //?We can use type alias like this
  // This is a TypeScript object named 'student3' of type 'Student'.
  const student3: Student = {
    name: "Tanim",
    age: 25,
    phoneNumber: "01584252255",
    gender: "Male",
    address: "Dhaka",
  };

  //*------------type Alias in variable-----------

  type UserName = string;
  type Cgpa = string;
  const userName: UserName = "Mehedi Hasan";
  const cgpa: Cgpa = "3.54";

  //*------------type Alias in Function-----------

  //   const add = (num1: number, num2: number): number => {
  //     return num1 + num2;
  //   };

  //Now Using function alias
  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => {
    return num1 + num2;
  };

  //
}
