{
  //?----------------------------------------------------

  //*---------------Mapped Types-----------------

  const arrayOfNumber: number[] = [10, 20, 30];

  const arrayOfString: string[] = arrayOfNumber.map((number) =>
    number.toString()
  );

  console.log(arrayOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };

  //we can change type mananully
  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  type AreaBoolen<T> = {
    [key in keyof T]: T[key];
  };

  const area_2: AreaBoolen<{ height: number; width: string }> = {
    height: 100,
    width: "100",
  };

  //using map type we change type
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area_1: AreaString<{ height: number; width: string }> = {
    height: 500,
    width: "100",
  };

  //*--------Look Up type----------
  //Note we can take other data type to us
  type user = {
    name: string;
    age: number;
  };

  type BloodGroup = user["name"];

  //?----------------------------------------------------
}
