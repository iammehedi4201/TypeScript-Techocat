{
  const PrintValue_2 = (num: string) => {
    console.log(num);
  };

  PrintValue_2("5");

  const printValue = <T>(value: T): T => {
    return value;
  };

  const result = printValue<string>("Hello There");

  const result_2 = printValue<number>(5);

  const result_3 = printValue<Array<number>>([1, 3]);

  type Userinfo = {
    name: string;
  };

  const result_4 = printValue<Userinfo>({
    name: "Mehedi",
  });

  //   {}[]

  const result_5 = printValue<Userinfo[]>([
    {
      name: "Mehedi",
    },
    {
      name: "saiful",
    },
  ]);

  const container = [
    {
      name: "Mehedi",
    },
    {
      name: "saiful",
    },
  ];

  console.log(result_5);
}
{
  interface Userinfo<T, k> {
    name: string;
    age: number;
    contractNo: T;
    phone: k;
  }

  type PhoneType = {
    name: string;
    model: number;
    camra: string;
  };

  const User_1: Userinfo<number, PhoneType> = {
    name: "Mehedi Hasan",
    age: 20,
    contractNo: 1775777038,
    phone: {
      name: "Huiwei Mate 20",
      model: 2023,
      camra: "20 magepixel",
    },
  };

  const User_2: Userinfo<string, { name: string; model: number }> = {
    name: "Saiful Islam",
    age: 18,
    contractNo: "01775777038",
    phone: {
      name: "Nokie 1200",
      model: 2023,
    },
  };

  class Bank<T> {
    amount: T;
    constructor(amount: T) {
      this.amount = amount;
    }
  }

  const bank_1 = new Bank<number>(5000);
  const bank_2 = new Bank<string>("Hello there this is Mehedi Hasan");
  const bank_3 = new Bank<{ TotalAmount: number; Interest: number }>({
    TotalAmount: 2000,
    Interest: 500,
  });
}

{
  const giveNumber = <T>(num: T): T[] => {
    return [num];
  };

  const result = giveNumber<{ name: string }>({ name: "mehedi" });

  console.log(result);

  const convertIntoArray = <T extends number>(...num: T[]): number => {
    const result = num.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    return result;
  };

  const Array = convertIntoArray<number>(10, 20, 30, 40);

  console.log(Array);
}

{
  const reverseArray = <T extends [] | {}>(arr: T[]) => {
    const reverseArray = arr.reverse();
    console.log(reverseArray);
  };

  reverseArray<{ name: string }>([{ name: "Meheid" }, { name: "Hasan" }]);

  const joinWithSeparator = <T>(arr: T[], separator: string) => {
    const result = arr.join(separator);
    console.log(result);
  };

  joinWithSeparator<number>([1, 2, 4], "-");

  const comparingElement = <T extends k, k>(num1: T, num2: k) => {
    if (num1 === num2) {
      console.log("it's Equal");
    } else {
      console.log("not equal");
    }
  };

  comparingElement(20, 20);
}

{
  interface vechile {
    name: string;
    color: string;
    model: string;
  }

  let Car_1: vechile = {
    name: "Toyota Kaisa",
    color: "Black",
    model: "2023",
  };

  type Userinfo = Record<string, string>;

  type BankAccount = Record<string, any>;

  const Studen_1: BankAccount = {
    name: "MEHEI HASAN",
    PHONE: 177577038,
  };

  const user_1: Userinfo = {
    name: "Mehedi Hasan",
    color: "red",
    model: "2023",
    brand: "Toyoto",
  };

  const findPropertyValue = <T, k extends keyof T>(obj: T, key: k): T[k] => {
    const propertyValue = obj[key];
    return propertyValue;
  };

  findPropertyValue(Car_1, "model");
}

//?-------------------------------------------------------

{
  //=----------------Problem  1------------

  const checkType = (value: number | string): string | number => {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * value;
    }
  };

  const result = checkType("20");

  console.log(result);
}

{
  //--------problem -2-------------

  interface Person {
    name: string;
    address?: {
      city: string;
      street: string;
    };
    phone?: string;
  }

  const user_1: Person = {
    name: "Mehedi Hasan",
    address: {
      city: "Dhaka",
      street: "shibuya",
    },
    phone: "01775777038",
  };

  const user_2: Person = {
    name: "Mehedi hasan",
    phone: "01775777038",
  };

  // const getAddressCity = (param: Person): string | undefined => {
  //   if ("address" in param) {
  //     return param?.address?.city;
  //   } else {
  //     return "Address is not given";
  //   }
  // };
  const getAddressCity = (param: Person): string | undefined => {
    return param?.address?.city ?? "Address is not give ";
  };

  const city = getAddressCity(user_1);
  console.log(city);
}

{
  // ---------Problem-3-----------

  class Cat {
    name: string;
    spacies: string;
    color: string;
    constructor(name: string, spacies: string, color: string) {
      this.name = name;
      this.spacies = spacies;
      this.color = color;
    }
  }

  const cat_1 = new Cat("Adorii", "Cat", "Brown");

  const isCat = (param: Cat) => {
    if (param instanceof Cat) {
      console.log("Yes It is a Cat");
    } else {
      console.log("No It is not a cat");
    }
  };

  isCat(cat_1);
}

{
  //  ----------problem(4)--------------

  const addNumber = <T>(param: T[]): number => {
    let total = 0;
    for (const element of param) {
      if (typeof element === "number") {
        total = total + element;
      }
    }
    if (total > 0) {
      return total;
    } else {
      return 0;
    }
  };

  const container = addNumber(["two", 5, 100]);

  console.log("The container result is :-----------", container);
}

{
  //  ----------problem(5)--------------

  interface Car {
    model: string;
    year: number;
  }

  interface Driver {
    name: string;
    licenseNumber: string;
  }

  const car_1: Car = {
    model: "Toyota Shibuya",
    year: 2023,
  };

  const driver_1: Driver = {
    name: "Korim vai",
    licenseNumber: "586258586",
  };

  //For return Data type
  interface CombineObject {
    model: string;
    year: number;
    name: string;
    licenseNumber: string;
  }

  const CombineObject = (obj1: Car, obj2: Driver): CombineObject => {
    const object = {
      ...obj1,
      ...obj2,
    };
    return object;
  };

  CombineObject(car_1, driver_1);
}

{
  //  ----------problem(6)--------------

  const checkArray = (param: unknown): void => {
    if (
      Array.isArray(param) &&
      param.some((number) => typeof number === "number")
    ) {
      const total = param.reduce(
        (accomulate, currentValue) => accomulate + currentValue,
        0
      );
      console.log("The total is ", total);
    } else {
      throw new Error("It' not a array of number");
    }
  };

  checkArray([10, 20, 40, "30"]);
}

{
  //  ----------problem(7)--------------

  //T = number | string, k = boolen extends T = number |string

  const findFirstOccurrence = <T>(arr: T[], value: T) => {
    return arr.indexOf(value);
  };

  const result = findFirstOccurrence([1, 2, 20, "mahdi", true], true);

  console.log("The result is -----------", result);

  // ([10,20],10)
}

{
  //  ----------problem(8)--------------

  interface Product {
    name: string;
    price: number;
    quantity: number;
  }

  const calculateTotal = (param: Product[]): number => {
    const totalCost = param.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
    return totalCost;
  };

  const totalCost = calculateTotal([
    { name: "tomato", price: 200, quantity: 10 },
    { name: "Onion", price: 500, quantity: 10 },
    { name: "Potato", price: 500, quantity: 10 },
  ]);

  console.log(totalCost);
}

{
  const check = <T>(arr: T[], value: T) => {
    return arr.indexOf(value);
  };

  const result = check([1, 2, 20, "mahdi", true], true);

  console.log("The result is -----------", result);

  // ([10,20],10)
}

{
  const addNumber = <T extends number>(num1: T, num2: T) => {
    const result = num1 + num2; // (+) oparatore not work with every types
    return result;
  };

  const result = addNumber<number>(20, 20);
}

{
  //problem - 1: Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3.

  const printValue = <T extends string, k extends number | undefined>(
    param1: T,
    param2?: k // we can make propety optional that someone give value or not
  ) => {
    for (let i = 0; param2 ? param2 > i : 3 > i; i++) {
      console.log(param1);
    }
  };

  printValue("I love you anika");
}

{
  //Problem - 2 Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18,

  const FindPerson = <T extends { name: string; age: number }>(
    param: T[]
  ): T[] => {
    const object: T[] = param.filter((obj) => obj.age >= 18);
    return object;
  };

  interface UserInfo {
    name: string;
    age: number;
  }

  interface UserInfo_2 {
    name: string;
  }

  const arr: UserInfo[] = [
    {
      name: "Mehedi Hasan",
      age: 25,
    },
    {
      name: "Saiful Islam",
      age: 50,
    },
  ];

  const result = FindPerson<UserInfo>(arr);
  console.log("The obj are :-", result);
}

{
  //Problem : Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.

  //solved with normal process
  // const reverseArray = (...value: string[]) => {
  //   return value.reverse();
  // };

  // const result = reverseArray("46", "45", "44");

  // console.log(result);

  //?solved with Genric function

  const reverseArray = <T extends string>(...value: T[]): T[] => {
    return value.reverse();
  };

  const result: string[] = reverseArray<string>("44", "45", "46");

  console.log(result);
}

{
  //Problem : Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.
  // Create a TypeScript class called Student that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties.

  class Person {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    public getDetails() {
      return `${this.name} is ${this.age} years old`;
    }
  }

  class Student extends Person {
    private grade: string;
    constructor(name: string, age: number, grade: string) {
      super(name, age);
      this.grade = grade;
    }

    public getGrade() {
      return `${this.grade}`;
    }
  }

  const student_1 = new Student("Mehedi hasan", 25, "3.54");
  const details =
    student_1.getDetails() + ". His grade is :- " + student_1.getGrade();
  console.log(details);
}

{
  // Write a TypeScript function that takes an array of objects as input. Each object in the array has various properties, but you're only interested in 'id' and 'name'. Your function should return these 'id' and 'name' values from each object.After you've written your function, use it on an array of objects to test it. Print the 'id' and 'name' values that your function returns to make sure it's working correctly.

  const getProperties = <T extends { id: string; name: string }>(
    arrOfObj: T[]
  ) => {
    const result = arrOfObj.map((obj) => ({ id: obj.id, name: obj.name }));
    console.log(result);
  };
  const arrOfObject = [
    { id: "192-15-13298", name: "Mehedi hasan", gender: "Male", married: true },
    {
      id: "192-15-13296",
      name: "Mahamudur Tanim",
      gender: "Male",
      married: true,
    },
  ];

  getProperties(arrOfObject);
}
