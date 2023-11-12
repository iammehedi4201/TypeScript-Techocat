{
  //?-------------------------------------------------
  //*-----------Utility Type---------------
  //Note : utility type work in object type

  type User = {
    Name: string;
    age: number;
    contracNo: string;
    email?: string;
  };

  //*Using (Pick)
  //Note use (Pick) we can get other data type

  type NameAge = Pick<User, "Name" | "age">; //We can get (Name) (age) data type from (User) using (Pick) keyword

  //*Using (omit)
  //Note : using (omit) we can cut (name | age) property and take the other property
  type Contract = Omit<User, "Name" | "age">;

  //*Using (Require)
  //Note : using (Require) we can bring all the property if there any option property then that also bring to this type
  type UserRequire = Required<User>;

  //*Using (pertial)
  //Note : using (Partial) we can make all property optional
  type UserPartial = Partial<User>;

  //*Using (ReadOnly)
  //Note : using (ReadOnly) we can not the change the property value
  type UserReadOnly = Readonly<User>;
  const userMehedi: UserReadOnly = {
    Name: "Mr.X",
    age: 20,
    contracNo: "01455",
  };

  //*Using (Record)
  //Note : using (Record) we can assign property dynamically
  //:Record only when all propety are same data type

  //   type Myobj = {
  //     name: string;
  //     color: string;
  //   };

  type Myobj = Record<string, string>; //Record<key(property) ar data alway string , value data type >
  const myobj: Myobj = {
    name: "Mehedi",
    color: "Black",
    id: "192-15-1358",
  };
 
  //We can assgin mutiple data type value in empty obj
  const emtyObj: Record<string, unknown> = {};

  emtyObj.name = "Mehedi Hasan";
  emtyObj.age = 25;
  emtyObj.fvrt = { color: "red", call: 36 };

  console.log(emtyObj);

  //?-------------------------------------------------
}
