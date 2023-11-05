{
  //*---------------Interface-----------
  //Note : Interface is as same as (Type Alias)
  //NOte : For (Premative value) we use (Type alias) and For (Object) we can used (type alias and interface)
  //Note : In Js (object is -> object) (Array is -> object) (function is ->object )
  //NOte : For simplicity we can use >Type Alias< in  (Array) and (function)

  type rollNumber = number; //This is premitive value.which value can not changed

  //*------------using Type Alias---------------
  type UserInfo_1 = {
    name: string;
    age: number;
  };

  // Note : using Intersection (&) we can extend property  in (type Alias)

  type UserWithContractNo = UserInfo_1 & { contractNo: string };

  const MehediInfo: UserWithContractNo = {
    name: "Mehedi Hasan",
    age: 20,
    contractNo: "01775777038",
  };

  //*---------Using Interface------------
  interface UserInf_2 {
    name: string;
    age: number;
  }

  // Note : using (extends) keyword  we can extend property  in (Interface )

  interface UserWithContractNo_2 extends UserInf_2 {
    contractNo: string;
  }

  const SaifulInfo: UserWithContractNo_2 = {
    name: "Saiful Islam",
    age: 20,
    contractNo: "01645782",
  };

  console.log(SaifulInfo);

  //*-----------In Array using (type Alias) & (Interface)-------------------

  type Roll_1 = number[];

  const roll: Roll_1 = [10, 20];

  //Note : [10,20,33]
  //  1   2  3  -> (index number) is number type

  interface Name {
    [index: number]: string;
  }

  const Friends: Name = ["Mehed", "Tanim"];

  //*-----------In Function using (type Alias) & (Interface)-------------------

  type AddValue = (num1: number, num2: number) => number;

  const addValue: AddValue = (num1, num2) => num1 + num2;

  //?

  interface SubValue {
    (num1: number, num2: number): number;
  }

  const subValue: SubValue = (num1, num2) => num1 - num2;

  const subResult = subValue(100, 50);

  console.log("The Sub Result is :-", subResult);

  //
}
