# <p style="color: blue">Be A TypeScript Technocrat: <p>

### What It TypeScript:

- ## TypeScript is a language for application-scale JavaScript
- ## Typescript is an object oriented Programming Language that build on top of JavaScript with Extra Feature.
- ## Typescript is superset of JavaScript developed by microsoft.
- ## Typescript is strongly Typed programming Languages.
- ## Typescript Designed By Andres Hejlsberg with c# or .net specification .
- ## Typescript can be transpiled older versions of javaScript

### Whats Wrong with JavaScript ?

- ## JavaScript is an Dynamically Typed Language.
- ## JavaScript is not suitable for Large scale application.
- ## Lack of Strong Typing.
- ## only errors during runtime.
- ## Suffers type correction.
- ## Hard to find bugs.
-

## Can Browser Recognize TypeScript Code ?

- ## No, We need to `transpiled` typeScript by using complier like `babel, swc etc.`
- ## Typescript convert into javaScript then Browser can read the code.

## Benefits of TypeScript:

- Support all JS Types.
  - String
  - Number
  - Boolean
  - Null
  - Undefined
  - Object
  - Symbol
- Give Some new types :
  - Interface
  - void
  - Array
  - Tuple
  - Enum
  - Union
  - InterSection
- Type Safety
- Support Older Browser
- Less Bugs
- Increase Developer Productivity
- Less Bugs && Less Testing.
- Best Intelligence support.
- Typescript give us an complier name `tsc` or `typescript complier`

## TypeScript Installation :

```ts
 npm i -g typescript
```

## TypeScript Configs or `tsconfig.js` Command:

```ts
   tsc --init
```

## TypeScript File Run:

1. ```ts
      tsc filename.ts
   ```
2. ```ts
      tsc --w file.ts
   ```
3. after include configs only use :

```ts
tsc - watch;
```

## For Watch TypeScript File Out :

1. ```ts
      npm i ts-node-dev --save-dev
   ```
2. after Install the package run this commond :

```ts
   ts-node-dev --respawn --transpile-only server.ts
```

## How Many Types of Annotation In TypeScript ?

- There are two types of annotation in TypeScript.
  - Explicit
  - Implicit

## What is Implicit Type In TypeScript ?

- Implicit Types are types That Typescript infers based on the initial Value of
  the variable.
- If we can declare and assign value in same line `typescript` infers the
  correct type.
- Example:

```ts
// implicitly infers as string
const name = "Mehedi hasan";

// implicitly infers as number:
const age = 19;
```

- When we declared a variable but not assign type of the variable `typescript`
  infers the `type` as `any`. It's not recommended.
- We can assign `any type of data ` on this variable.
- Example :

```ts
// implicitly infer as  any
let a;

//  we can assign any type of data  to the variable like below:
a = 5; // number
a = "Mehedi Hasn";
a = false;
```

## What is Explicit Type in TypeScript ?

- Explicitly Types are `types` when we manually provided the type by using
  `typescript syntax.`
- If you try to store others type data on that variable `typescript ` shows
  `errors`. which helps developers to solve `development errors`
- Explicitly Type Syntax:

```ts
const variableName: type = value;
//  or
let age: type;
age = value;
```

- Example:

```ts
//  one line
const name: string = "Mehedi Hasn";

//  multiple line :
let age: number;
age = 20;
age = 30;

//  if we try to assign string to age variable typescript give errors:
age = "20"; // show errors on code editor ;
```

---

## Define `String` Data type

```ts
let intro: string = "Hello there It's Me Mehedi Hasan"; //Explacite Data type
let IntorTwo = "Hello there it's me Mehedi's Wife Anika"; //Implacite Data type
console.log(intro);
```

## Define `Number` Data Type

```ts
const phoneNubmer: number = 1775777038;
console.log("The Phone Number :-", phoneNubmer);
```

## Define `boolen` data type

```ts
const isMarried: boolean = true;
console.log("Is it true that Mehedi is married ? Yes it's :-", isMarried);
```

## Define `undefine` Data type

```ts
const isValueAvilable: undefined = undefined;
```

## Define `null` Data type

```ts
const isValueNull: null = null;
```

## Define `Any` Data type

```ts
let name;
name = "Mehedi hasan";
name = 45;
name = true;
```

## Define `Array` Data type

```ts
const friends: string[] = ["Tanim", "Evan", "Shoaib", "Ohi"]; //Explicite Data type
const age = [10, 20, 30]; //Implacite Data type. Ts complier understand data type by infer
let salary: number[];
salary = [1000, 2000, 5000];
salary = [10000, 200000, 50000];
salary.push(60000);
const firstOneSlary = salary[0];
console.log("The salary is :-", firstOneSlary);
```

## Define `Map In Array`

```ts
const numbers = [10, 20, 30, 40, 50];

const mapResult: number[] = numbers.map(
(number: number): number => number \* number
);
```

## Define` For Lop In Array`

```ts
for (let index: number = 0; index < numbers.length; index++) {
  const element: number = numbers[index];
  console.log("The For Loop Value :-", element);
}
```

## `reduce` In Array

```ts
let resutl: number = numbers.reduce(
  (accumulator: number, currentValue: number) => accumulator + currentValue
);
console.log("The Array Reduce Resutl :-", resutl);

console.log("--------The Map Result is :--------:", mapResult);
```

## We can define `Array of obejct` like this

```ts
const users: Array<object> = [
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
```

## Define `Tuple Data` Type

- A tuple is like an Array with a fixed number of elements of known Data types

```ts
const student: [string, string, number, string] = [
  "Mehedi Hasan",
  "192-15-13298",
  3.54,
  "O+",
];

const studentTwo: [string, string, number, string] = [
  "Rabiul Evna",
  "192-15-13289",
  3.44,
  "O+",
];

console.log("The Tuple is :-", student);
```

## Define `Object`

```ts
const user: {
  readonly name: string; // Readonly mean we can read but we can not change the value
  gender: "Male" | "Female"; // 'gender' is a variable that can only be assigned the string values "Male" or "Female".which is litaral type
  address: {
    city: string;
    area: string;
  };
  phoneNumber: string;
  married: string; // Note : (?) This is mean it's optional property some can have this property or not
} = {
  name: "Mehedi Hasan",
  gender: "Male",
  address: {
    city: "Dhaka",
    area: "Khilgoan",
  },
  phoneNumber: "017775777038",
  married: "married",
};

const userTwo: {
  name: string;
  religion: "Islam" | "Hindu" | "Christan";
  nationality: string;
} = {
  name: "Yuji Itadori",
  religion: "Hindu",
  nationality: "Japan",
};

const UserTwoName = userTwo["name"]; //we can access object like this

console.log("The User is :-", userTwo);
```

###Define `Function`

- if we don't define funciton parameter data type then Ts infer it and assume that the parameter is (any) type;
- In (Any) Data type we can assign any data type value

```ts
function add(num1: number, num2: number): number {
  return num1 + num2;
}

const addResult = add(250, 250);

console.log("The Add Reasult", addResult);


function subtraction(num1: number, num2: number) {
return num1 - num2;
}

const subResult = subtraction(1000, 500);

console.log("The SubResult is :-", subResult);

const multiplication = (num1: number, num2: number = 10): number => {
return num1 \* num2;
};

const mulResult = multiplication(2);

console.log("The MulResult is :-", mulResult);

```

## Define `function` in `object`

- Define Function in object is called `Method`
- In object Method `this` refer to the things who call the `Object Method`

```ts
const newUser = {
  name: "Mahamudur Rahman Tanim",
  gender: "Male",
  ContactNo: "01759782245",
  TotalSaving: 50000,
  checkBlance(spantAmount: number) {
    this.TotalSaving = this.TotalSaving - spantAmount;
    console.log(
      `Mr ${this.name} your blance is : ${this.TotalSaving - spantAmount}`
    );
  },
};
newUser.checkBlance(1000);

console.log("The New User Info is :-", newUser);
```

## Define `Spread Oparato`r

# In `Array`

```ts
const animeList = ["Jujustu kaisan", "Deamon Slayer", "Bleach", "black Clover"];

const characterList = ["Yuji Itadori", "Tanjiro Kamado", "Ichigo", "Asta"];

animeList.push(...characterList);

const newAnimeList: string[] = [
  ...animeList,
  "My Hero Academy",
  "Chainsaw",
  "Solo leveaing",
];

console.log("The New animeList is :-", newAnimeList);
```

# In `object`

```ts
const teacherList = {
  C: "Shadab Mam",
  java: "Taspiy Mam",
  python: "Sazzed Sir",
};

const teacherListTwo = {
  OPP: "Sazzed Sir",
  web: "Firoz Sir",
  GrapicDesign: "Taposhy Rabiya",
};

const myUnversityTeacherList = {
  ...teacherList,
  ...teacherListTwo,
};

console.log("The whole university teacher list :-", myUnversityTeacherList);
```

## Define `Rest Oparator `

- The rest operator (...) is used to collect the rest of the element into array. it's commonly used in (functon parameter & destructing assignments)

```ts
const getFriendList = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(friend);
  });
};

getFriendList("Evan", "Tanim", "saif");

const getTotal = (...nums: number[]) => {
  const total = nums.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue
  );
  console.log("The Total Result is :-", total);
};

getTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```

## Define `Destructuring`

{

## Destucturing In Object

- { name: FullNam } = user; in this (FullNam) is alias name of (name) property

```ts
const user = {
  name: "Mehedi Hasan",
  phoneNumber: "01775777038",
  address: {
    city: "Dhaka",
    area: "Khilgoan",
  },
  BloodGroup: "A+",
};

const {
  name: FullNam,
  address: { city: jadorShohor },
} = user;
console.log("The user live's in :-", jadorShohor);
```

## Destucturing In `Array`

```ts
const fullName: string[] = ["Md", "Mehedi", "Hasan"];

const [firstName, middleName, lastName] = fullName;

const [, , surName] = fullName;

console.log("The Middle name is :-", surName);

const fvrtAnime: string[] = [
  "jujustu Kaisan",
  "Deamon slayer",
  "Chainsaw",
  "My hero Academy",
  "Bleach",
  "Black Clover ",
];

const [, mostFvrtOne, ...rest] = fvrtAnime;

console.log("My most Favorite Anime is :-", rest);
```

## ---------`Type Alias`---------

## Type Alias in `Object`

```ts
type StudentInfo = {
  //? give Frist Letter Capital it's convantion
  name: string;
  ID: string;
  bloodGroup: "O+" | "B+" | "A+" | "AB+"; //Note : BloodGroup Data type will (o+) (B+) etc this called litaral Data type
  gender: "Male" | "female";
  Cgpa?: number;
};

const studentOne: StudentInfo = {
  name: "Mehedi hasan",
  ID: "192-15-13298",
  bloodGroup: "B+",
  gender: "Male",
  Cgpa: 3.54,
};

const studentTwo: StudentInfo = {
  name: "Rabiul Evan",
  ID: "192-15-13289",
  bloodGroup: "O+",
  gender: "Male",
};

console.log(`${studentTwo.name} info is : `, studentTwo);

//Type Alias in Variable
type Name = string;
type Age = number;
const name: Name = "Uzumaki Naruto";
const age: Age = 25;

//Type Alias in Array
type Friends = string[];
const friends: Friends = ["Tanu", "Mahu", "Evu", "Shou"];

//Type Alias in Function

type AddValue = (num1: number, num2: number) => number;

// Normal Arrow function
// const addValue = (num1: number, num2: number): number => {
//   return num1 + num2;
// };

//Use Type "Type Alias" in function
const addValue: AddValue = (num1, num2) => {
  return num1 + num2;
};
```

## using Intersection (&) we can extend `(Type Alies)` property

```ts
type UserInfo_1 = {
  name: string;
  age: number;
};

type UserWithContractNo = UserInfo1 & {
  contractNo: string;
};

const MehediInfo: UserWithContractNo = {
  name: "Mehedi Hasan",
  age: 20,
  contractNo: "01775777038",
};
```

## `Union Type (|)`

- i used in this (type alias) (union) and (litral data type)

```ts
type BloodGroup = "O+" | "B+" | "A+";
const MehedisBloodGroup: BloodGroup = "O+";
type FvrtAnime = "Demon Slayer" | "Jujutsu Kaisan" | "Bleach";
const MehedisFvrtAnime: FvrtAnime = "Demon Slayer";
type PhoneNumber = string | number;
const MehedisPhoneNumber: PhoneNumber = "01775777038";

//Merge Two Data type
// const MehedisInfo: FvrtAnime | BloodGroup = "Jujutsu Kaisan";
type MehedisInfo = BloodGroup | FvrtAnime;
const rajuInfo: MehedisInfo = "Demon Slayer";
```

## `Intersection Type (&)`

```ts
type FrontendDeveloper = {
skills: string[];
designation_1: "Frontend Developer";
};

type BackendDeveloper = {
skills: string[];
designation_2: "Backend Developer ";
};

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const mehedi: FrontendDeveloper = {
skills: ["Html", "Css", "java Script", "Reacg", "Node.js", "MongoDb"],
designation_1: "Frontend Developer",
};

const ohi: BackendDeveloper = {
skills: ["python", "django", "mongodb"],
designation_2: "Backend Developer ",
};

--- In Frontend and Backend there a common Data type (skills: string[]) that's why i put one skills -----

const hadid: FullstackDeveloper = {
skills: [
"Html",
"Css",
"java Script",
"Reacg",
"Node.js",
"MongoDb",
"python",
"django",
],
designation_1: "Frontend Developer",
designation_2: "Backend Developer ",
};
```

## `Ternary Oparator`

{

```ts
const age: number = 20;
const isAdult = age >= 18 ? "Adult" : "Not adult ";
console.log(`Mehedi is ${isAdult} now `);
```

}

### `nullish Coalescing Operator(??)`

- (null) / (undefined) => duitar upor re defend kore Decision making korle nullish Coalescing Operator use kore.nullish Operator work in (null) && (undefine) value

```ts
{
  const isAuthenticate = undefined;

  const result = isAuthenticate ?? "Guest";

  const result2 =
    result === "Guest" ? "You are not Authenticate" : "Yes Are valid";

  console.log(result, result2);
}
```

## `Optional Chaining`

```ts
{
  type UserInfo = {
    name: string;
    address: {
      city: string;
      area: string;
    };
    presentAddress: string;
    permanentAddress?: string;
  };

  const mehediInfo: UserInfo = {
    name: "Mehedi",
    address: {
      city: "Dhaka",
      area: "Khilgoan",
    },
    presentAddress: "comilla",
  };

  const permanentAddress = mehediInfo?.permanentAddress ?? "Not Found";

  console.log(`${mehediInfo.name} permanent Address is `, permanentAddress);
}
```

## `null Data type`

- In TypeScript, void is a special type that represents the absence of a value or the fact that a function does not return any value.For example, if a function doesn't return a value, you would specify void as the return type

```ts
const checkNull = (value: string | null): void => {
  if (value) {
    console.log("Not Null");
  } else {
    console.log("yes it's Null value");
  }
};

checkNull(null);
```

## Unknow Data type

- First we don't know the data type of value .but in Runtime we know the data type

```ts
const checkDataType = (value: unknown): void => {
  if (typeof value === "number") {
    console.log(`${value} is Number Data type`);
  } else if (typeof value === "object") {
    console.log(`${value} is object Data type`);
  } else {
    console.log("Other Data type is't any condition");
  }
};

checkDataType({ num: 45 });
```

## never Data type

- The never type represents the type of values that never occur. For instance, a function that always throws an error and never returns a value has a return type of never.

```ts
const throwErro = (msg: string) => {
  throw new Error(msg);
};

throwErro("Opps You Got Error!");
```

## `Type Assertion`

- Type assertion in TypeScript is a way to tell the TypeScript compiler that you are certain about the type of a variable.but it doesn't perform any special checking or data restructuring. It's just a way to override the type inferred by TypeScript.

- Ami developer hishabe typescript theke better type declare or bhujle seta hole type assertion

- if use Type Assrtion then typescript will belive you what you define type if you say it's number then it will number

```ts
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
```

## `Type Assertion in function`

```ts
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
```

- Type Casting: In many programming languages, type casting refers to the process of converting one type to another, often with some sort of computation or data structure manipulation. However, TypeScript doesn't have a concept of type casting because it doesn't have runtime type information. TypeScript uses the term "type assertion" for what is often referred to as type casting.

## `Interface`

- Interface is as same as (Type Alias)
- For (Premative value) we use (Type alias) and For (Object) we can used (type alias and interface)
- In Js (object is -> object) (Array is -> object) (function is ->object )
- : For simplicity we can use >Type Alias< in (Array) and (function)

```ts
interface UserInf_2 {
  name: string;
  age: number;
}

//---------In Function using interface---------

interface SubValue {
  (num1: number, num2: number): number;
}

//---------In Array using interface---------

interface Name {
  [index: number]: string;
}
```

## using (extends) keyword we can extend property in (Interface )

```ts
interface UserInf_2 {
  name: string;
  age: number;
}

interface UserWithContractNo_2 extends UserInf_2 {
  contractNo: string;
}

const SaifulInfo: UserWithContractNo_2 = {
  name: "Saiful Islam",
  age: 20,
  contractNo: "01645782",
};

console.log(SaifulInfo);
```

## `Generic Type With (Type Alias)`

- Generics in TypeScript are a way to create reusable components that can work with a variety of types, rather than a single one.They allow you to write flexible and reusable functions, classes, and interfaces.(Mane amadar proyojon onushara amra (type & property) dynamically create korte and reuseable korte pari)

```ts
//--------- Generic Array---------

type GenricType<T> = Array<T>;

const numbers: GenricType<number> = [100, 200, 300];

const names: GenricType<string> = ["Mehedi", "Tanim", "Evan"];

const trutyFalsey: GenricType<boolean> = [true, false, false, true];

//---------Array <object> this not best practice to use like this---------

const users: GenricType<object> = [
  {
    name: "Mehedi",
    age: 25,
  },
  {
    name: "saiful",
    age: "26",
  },
];

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

//---------Generic Tuple---------

const person: [string, number, boolean] = ["Mehedi Hasan", 25, true];

type GenericTuple<X, Y, Z> = [X, Y, Z?]; //(?) optional

const info: GenericTuple<string, number, boolean> = ["Mehedi", 25, true];
```

## Generic Type With (Interface)

```ts
interface Developer<T, B = null> {
  // We set default value for this.bcz if someone not  send a parameter value then that will not a problem it wil then use default parameter
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseDate: number;
  };
  smartWatch: T;
  bike?: B;
}

//-----------------------------------------

type AppleWatch = {
  brand: string;
  model: string;
  releaseDate: number;
};

//Note : If a property is optional that is not required for like (poorDeveloper has not bike property ) but still give error for not  putting value in (bike property) that's use (null | undefine) For not getting the error

const poorDeveloper: Developer<AppleWatch, null> = {
  name: "Mehedi Hasan",
  computer: {
    brand: "HP",
    model: "Dragkneel69",
    releaseDate: 2023,
  },
  smartWatch: {
    brand: "Apple",
    model: "Apple Watch 4201",
    releaseDate: 2022,
  },
};

//------------------------------

type HuiwaiWatch = {
  brand: string;
  model: string;
  display: string;
  releaseDate: number;
  hearRate: boolean;
  sleepRate: boolean;
};

interface PulsareBike {
  name: string;
  modle: string;
  color: string;
}

const richDeveloper: Developer<HuiwaiWatch, PulsareBike> = {
  name: "Saiful Islam",
  computer: {
    brand: "Asus",
    model: "Asus69",
    releaseDate: 2023,
  },
  smartWatch: {
    brand: "Huiwai",
    model: "Huiwai Watch 4201",
    display: "Amould HD Display",
    releaseDate: 2022,
    hearRate: true,
    sleepRate: true,
  },
  bike: {
    name: "Pulsare",
    modle: "Pulsare Version 2023",
    color: "Red",
  },
};
```

## `Genric With Function`

```ts
//-----------Using Array--------------

const createArray = (value: string): string[] => {
  return [value];
};

const convertStringToArry = createArray("Bangladesh");

//--------CreatArray with Genric for we can dynamiclly pass type in funciton-------

const CreateGenricArray = <T>(value: T): T[] => {
  return [value];
};

const convertBoolenToBoolenArray = CreateGenricArray<boolean>(true);
const convertNumberToNumberArray = CreateGenricArray<number>(10);

type Info = {
  name: string;
  age: number;
};

const convertObjecToObjectArray = CreateGenricArray<Info>({
  name: "Mehedi",
  age: 20,
});

//-----------using Tuple in genric Funtion--------

const createGenricTuple = <T, Y>(value_1: T, Value_2: Y): [T, Y] => {
  return [value_1, Value_2];
};

const convertNumberToNumberArray = createGenricTuple<string, number>(
  "Mehedi Hasan",
  25
);

//---------------------------

const addCourseToStudent = <T>(student: T) => {
  const course = "Next Level Web Development";
  return {
    ...student,
    course,
  };
};

const Mehedi = addCourseToStudent<{
  name: string;
  age: number;
  devType: string;
}>({
  name: "Mehedi Hasan",
  age: 25,
  devType: "Frontend Development",
});

const saiful = addCourseToStudent<{
  name: string;
  email: string;
}>({
  name: "Saiful Islam",
  email: "saiful@gmail.com",
});

//-----------------------------------

const createFriendsArray = <T>(...name: T[]) => {
  return name;
};

createFriendArray("Mehedi", "Saiful");
```

## `Constraints` means `extends`

- If we try to enforce something on someone this called Contraints

```ts
const addCourseToStudent = <
  // useing (extends) we can tell the (T) that you have to have at least this property otherwise it will give error
  T extends { id: string; name: string; email: string }
>(
  student: T
) => {
  const course = "Next level Web Development";
  return {
    ...student,
    course,
  };
};

//----------------------------------

const reverseArray = <T extends string>(...value: T[]): T[] => {
  return value.reverse();
};

const result: string[] = reverseArray<string>("44", "45", "46");

console.log(result);
```

## Genric constraint with `(key of)` oparators

```ts
type vechile = {
  bike: string;
  car: string;
  privateJet: string;
};

//Now i have to create  union type which will have (bike,car,privateJet) for string litaral data;

type owner = "bike" | "car" | "privateJet"; //mannully

// using (keyof) oparator means it will take vachile object property as key and use it to owner_2 as string litaral

type owner_2 = keyof vechile;
const mehedi: owner_2 = "car";

//------------------------------------
// we access object property like this :
const user = {
  name: "Mehedi Hasan",
  age: 25,
};

user["name"] = "Rabiul alam Evan";

const getObjectPropety = <T, K extends keyof T>(obj: T, key: K) => {
  //( K extends keyof T) k ta  (T) object je property ache oigulo modde  je kono ekta thakte hobe
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
```

## `Asynchronous typescript`

```ts
type something = { something: string };

const createPromise = (): Promise<something> => {
  return new Promise<something>((resolve, reject) => {
    const data: something = { something: "Hello there" };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to load data");
    }
  });
};

//calling create promise
const showData = async (): Promise<something> => {
  const data: something = await createPromise();
  return data;
};
const result: Promise<something> = showData();

console.log("The result is :-", result);

//*Get Data from Api

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPost = async (): Promise<Post> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post: Post = await response.json();
  return post;
};
const posts: Promise<Post> = getPost();

console.log("The post is :-", posts);
```

## `Conditional Type`

- kono type onno ekta type depend thake kono condition upoer seta holo conditonal type

```ts
type x = number;
type y = string;
type post = y extends string ? string : unknown;

//----------------------

type shikh = {
  bike: string;
  car: string;
  plane: string;
};

type CheckVahicle<T> = T extends keyof shikh ? true : false;

type HasBike = CheckVahicle<"bike">;

type HasCar = CheckVahicle<"car">;

type HasPlane = CheckVahicle<"plane">;
s;
```

## `Mapped Types`

```ts
const arrayOfNumber: number[] = [10, 20, 30];

const arrayOfString: string[] = arrayOfNumber.map((number) =>
  number.toString()
);

//-------------------

type AreaNumber = {
  height: number;
  width: number;
};

//we can change type mananully
type AreaString = {
  height: string;
  width: string;
};

//We can change it dynamically

type AreaStringArray = {
  [key in keyof AreaNumber]: string; //etai je value deo sob string hobe
};

//---------Look Up type----------
type user = {
  name: string;
  age: number;
};

type BloodGroup = user["name"];

//we can make more dyanmicall give

type Area<T> = {
  [key in keyof T]: T[key];
};

const area_2: AreaBoolen<{ height: number; width: string }> = {
  height: 100,
  width: "100",
};
```

## `Utility Type`

- utility type work in `object` type

```ts
type User = {
  Name: string;
  age: number;
  contracNo: string;
  email?: string;
};

//----------Using (Pick)----------------
// use (Pick) we can get other data type

type NameAge = Pick<User, "Name" | "age">; //We can get (Name) (age) data type from (User) using (Pick) keyword

//----------Using (omit)----------------
//using (omit) we can cut (name | age) property and take the other property
type Contract = Omit<User, "Name" | "age">;

//------------Using (Require)--------------
//Note : using (Require) we can bring all the property if there any option property then that also bring to this type
type UserRequire = Required<User>;

//------------Using (pertial)-------------
//Note : using (Partial) we can make all property optional
type UserPartial = Partial<User>;

//----------------Using (ReadOnly)------------
//Note : using (ReadOnly) we can not the change the property value
type UserReadOnly = Readonly<User>;
const userMehedi: UserReadOnly = {
  Name: "Mr.X",
  age: 20,
  contracNo: "01455",
};

//---------------Using (Record)----------------
//Note : using (Record) we can assign property dynamically
//Record only when all propety are same data type

type Myobj = {
  name: string;
  color: string;
};

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
```
