//*----------->Learning  Function<---------------
//Note : if we don't define funciton parameter data type then Ts infer it and assume that the parameter is (any) type;
//Note : In (Any) Data type we can assign any data type values

//*Normal Function
function add(num1: number, num2: number): number {
  //we can also define (return) data type
  return num1 + num2;
}
const result = add(2, 6);

console.log("The add resutl is :-", typeof result);

//*Arrow Function
const mul = (num1: number, num2: number): number => num1 * num2;

mul(2, 5);

//We can use Default parameter in funtion

const div = (num1: number, num2: number = 10): number => {
  return num1 / num2;
};

const divResult = div(40);

console.log("The Div resutl is :-", divResult);

//*function in object

//Note : Define Function in object is called Object
//Note : In object Method  this refer to the things who call the Object Method
const newUser = {
  religion: "islam",
  name: "Mehedi Hasan",
  gender: "Male",
  phoneNumber: 1775777038,
  bankAmount: 0,
  addBlance(blance: number): number {
    this.bankAmount = this.bankAmount + blance;
    return this.bankAmount + blance;
  },
};

const newResult = newUser.addBlance(2000);

console.log("The New User is :-", newUser);

//*Map in Array

const numbers = [10, 20, 41];

const mulNumber: number[] = numbers.map((num: number): number => num * num);

console.log("The MulNumber is :-", mulNumber);
