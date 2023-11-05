{
  //*(---------Learning Ternary Oparator || Optional Chaining || Nullish Coalescing Operator--------------)

  //*------------------->Ternary Oparator<-------------------------

  //(if else) condition :-
  const age: number = 25;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  //Using Ternary Oparator
  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log({ isAdult }); //Output : {isAdult : Adult}

  //*------------->nullish Coalescing Operator(??)<-----------------------

  //? (null) / (undefined) => duitar upor re defend kore Decision making korle nullish Coalescing Operator use kore.nullish Operator work  in (null) && (undefine) value

  const isAuthenticated = null

  const result = isAuthenticated ?? "Guest"; //(??) nullish operator check if isAuthenticated is (null) or (undefine) if null and undefine not found then it will give (" ") empty string

  const result2 = isAuthenticated ? isAuthenticated : "Guest"; //Undefine and null is falsey value that why give (Guest)

  console.log({ result }, { result2 }); // Output : {result : Guest},{result2 : Guest}

  //*------------->Ternary Oparator(?)<-----------------------

  type User = {
    name: string;
    address: {
      city: string;
      Area: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Mehedi Hasan",
    address: {
      city: "Dhaka",
      Area: "Khilgoan",
      presentAddress: "Khilgoan",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Addresss";
  console.log("The Permanent Address is :-", permanentAddress);

  //
}
