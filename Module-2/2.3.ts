{
  //*--------------Generic Type With (Type Alias) --------------------
  //Note : Generics in TypeScript are a way to create reusable components that can work with a variety of types, rather than a single one.They allow you to write flexible and reusable functions, classes, and interfaces.(Mane amadar proyojon onushara amra (type & property) dynamically create korte and reuseable  korte pari)

  //* Generic Array

  type GenricType<T> = Array<T>; //

  //const numbers: number[] = [100, 200, 300];
  const numbers: GenricType<number> = [100, 200, 300]; //alternative Way to define

  //const names: string[] = ["Mehedi", "Tanim", "Evan"];
  const names: GenricType<string> = ["Mehedi", "Tanim", "Evan"];

  //const trutyFalsey: boolean[] = [true, false, false, true];
  const trutyFalsey: GenricType<boolean> = [true, false, false, true];

  //We can define Array of obejct like this
  const users: GenricType<object> = [
    //Array <object> this not best practice to use like this
    {
      name: "Mehedi",
      age: 25,
    },
    {
      name: "saiful",
      age: "26",
    },
  ];

  users.forEach((user: object) => {
    console.log(user);
  });

  //?--------------------------------

  type Info = {
    name: string;
    age: number;
  };

  {
    const users: GenricType<Info> = [
      //Array <{name :string , age:number }> this best practice
      {
        name: "Mehedi",
        age: 25,
      },
      {
        name: "saiful",
        age: 26,
      },
    ];

    users.forEach((user: object) => {
      console.log(user);
    });
  }

  //*Generic Tuple

  const person: [string, number, boolean] = ["Mehedi Hasan", 25, true];
  
  type GenericTuple<X, Y, Z> = [X, Y, Z?];

  const info: GenericTuple<string, number, boolean> = ["Mehedi", 25, true];

  const info_2: GenericTuple<string, { city: string; area: string }, boolean> =
    ["Mehedi", { city: "Dhaka", area: "khilgoan" }];

  //*Also we make tuple property option
  {
    type GenericTuple<X, Y, Z> = [X?, Y?, Z?];
    let tuple: GenericTuple<number, number, number> = [1, 2];
  }

  //* We can also do that
  type GenericBloodType<T> = T;

  const mehedisBloodType: GenericBloodType<string> = "o+";

  //
}
