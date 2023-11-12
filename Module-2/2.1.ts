{
  //Note : if we declare a variable data type then we can access the (string ,number etc) method as can see the example
  let Name: number = 4566;
  Name.toFixed(5);

  //*-------------Type Assertion---------------
  //Note : Type assertion in TypeScript is a way to tell the TypeScript compiler that you are certain about the type of a variable.but it doesn't perform any special checking or data restructuring. It's just a way to override the type inferred by TypeScript.

  //Note : Ami developer hishabe typescript theke better type declare or bhujle seta hole type assertion

  //Note : if use Type Assrtion then typescript will belive you what you define type if you say it's number then it will number

  let anything: any;
  anything = "Mehedi Hasan";
  const result = (anything as string).length; // in this we tell ts that this variabe is String (Type Assertion)
  console.log("The result is :-", result);

  //----------------------------------------------

  let someValue: unknown;
  someValue = [10, 20, 30];
  const output = (someValue as number[]).forEach((value): void => {
    console.log(value);
  });
  someValue = "Meheid";
  const outputTwo = someValue as string;

  //*Type Assertion in function
  {
    //Note : if we use Conditon in fuction and then use  return it will give in return (number , string ,boolen  dat type according to your return value).also give undefine (const KgToGm: (value: string | number) => string | undefined).if condition full fill then give (string) or not give (undefine)

    const KgToGm = (value: string | number): string | number | undefined => {
      if (typeof value === "string") {
        const convetedValue = parseFloat(value) + 1000;
        return `The converted Value is ${convetedValue}`;
      }
      if (typeof value === "number") {
        return value + 1000;
      }
    };

    const result = KgToGm("100") as string;
    const resut2 = KgToGm("1000") as string;

    console.log("The resutl is :-------------", result);
  }

  //Note Type Casting: In many programming languages, type casting refers to the process of converting one type to another, often with some sort of computation or data structure manipulation. However, TypeScript doesn't have a concept of type casting because it doesn't have runtime type information. TypeScript uses the term "type assertion" for what is often referred to as type casting.

  //
}
