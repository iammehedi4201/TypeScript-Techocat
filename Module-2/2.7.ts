{
  //?-----------------------------------------------

  //*----------Genric constraint with (key of) oparator

  type vechile = {
    bike: string;
    car: string;
    privateJet: string;
  };

  //Now i have to create  union type which will have (bike,car,privateJet) for string litaral data;

  type owner = "bike" | "car" | "privateJet"; //mannully

  //Note : using (keyof) oparator means it will take vachile object property as key and use it to owner_2 as string litaral
  type owner_2 = keyof vechile;

  const mehedi: owner_2 = "bike";

  //-------------------------------

  // we access object property like this :
  const user = {
    name: "Mehedi Hasan",
    age: 25,
  };

  user["name"] = "Rabiul alam Evan";

  console.log("The user is :-", user);

  //----------------------------

  const getObjectPropety = <T, K extends keyof T>(obj: T, key: K) => {  //( K extends keyof T) k ta  (T) object je property ache oigulo modde  je kono ekta thakte hobe 
    return obj[key];
  };

  const user_1 = {
    name: "Mehedi Hasan",
    age: 25,
  };

  const user_2 = {
    phone: "0177577038",
    bloodGroup: "O+",
  };

  const propertyValue = getObjectPropety(user_2, "phone");

  console.log("The propryt value si :-", propertyValue);

  // const PropetyValue = getObjectPropety<typeof user_1, keyof typeof user_1>(user_1, "name"); // user_1[name] = "Mehedi Hasan"

  //?-----------------------------------------------
}
