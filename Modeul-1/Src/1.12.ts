{
  //*----------nullable Type----------------

  //?note : if any veriable have (null) value then It will be null data type
  //Note : In TypeScript, void is a special type that represents the absence of a value or the fact that a function does not return any value.For example, if a function doesn't return a value, you would specify void as the return type
  const searchValue = (value: string | null): void => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to Search");
    }
  };
  searchValue(null);

  //*----------unknown Type----------------

  //?Note :first eta value : (unknown) data type thake. E type amra runtime jante parbo (typeOf) use kore je value ta ki type.

  //?NOTE : First we don't know the data type of value .but in Runtime we know the data type

  //?Note : In unknow type it will Every Data type

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertdSpeed = (value * 1000) / 3600;
      console.log(`The converted Speed is ${convertdSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [Value, unit] = value.split(" ");
      const convertdSpeed = ((parseFloat(Value) * 1000) / 3600).toFixed(2);
      console.log(`The converted Speed is ${convertdSpeed} ms^-1`);
    } else {
      console.log("For Other Data type The condition is't  written");
    }
  };

  getSpeedInMeterPerSecond("100 km^-1");

  const checkDataType = (value: unknown) => {
    if (typeof value === "number") {
      console.log(`${value} is Number Data type`);
    } else if (typeof value === "string") {
      console.log(`${value} is String Data type`);
    } else if (typeof value === "boolean") {
      console.log(`${value} is boolean Data type`);
    } else {
      console.log("Value is no Data type");
    }
  };

  checkDataType(null);

  //*----------never Type----------------

  //?Note :The never type represents the type of values that never occur. For instance, a function that always throws an error and never returns a value has a return type of never.

  const throwError = (message: string): never => {
    throw new Error(message);
  };

  throwError("Oops Got Error");

  //
}
