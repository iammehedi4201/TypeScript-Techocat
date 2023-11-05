# <p style="color: blue">Be A TypeScript Technocrat: <p>

### What It TypeScript:

- ### TypeScript is a language for application-scale JavaScript
- ### Typescript is an object oriented Programming Language that build on top of JavaScript with Extra Feature.
- ### Typescript is superset of JavaScript developed by microsoft.
- ### Typescript is strongly Typed programming Languages.
- ### Typescript Designed By Andres Hejlsberg with c# or .net specification .
- ### Typescript can be transpiled older versions of javaScript

### Whats Wrong with JavaScript ?

- ### JavaScript is an Dynamically Typed Language.
- ### JavaScript is not suitable for Large scale application.
- ### Lack of Strong Typing.
- ### only errors during runtime.
- ### Suffers type correction.
- ### Hard to find bugs.
-

### Can Browser Recognize TypeScript Code ?

- ### No, We need to `transpiled` typeScript by using complier like `babel, swc etc.`
- ### Typescript convert into javaScript then Browser can read the code.

### Benefits of TypeScript:

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

### TypeScript Installation :

```ts
 npm i -g typescript
```

### TypeScript Configs or `tsconfig.js` Command:

```ts
   tsc --init
```

### TypeScript File Run:

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

### For Watch TypeScript File Out :

1. ```ts
      npm i ts-node-dev --save-dev
   ```
2. after Install the package run this commond :

```ts
   ts-node-dev --respawn --transpile-only server.ts
```

### How Many Types of Annotation In TypeScript ?

- There are two types of annotation in TypeScript.
  - Explicit
  - Implicit

### What is Implicit Type In TypeScript ?

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

### What is Explicit Type in TypeScript ?

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

### Define `String` Data type

```ts
let intro: string = "Hello there It's Me Mehedi Hasan"; //Explacite Data type
let IntorTwo = "Hello there it's me Mehedi's Wife Anika"; //Implacite Data type
console.log(intro);
```

### Define `Number` Data Type

```ts
const phoneNubmer: number = 1775777038;
console.log("The Phone Number :-", phoneNubmer);
```

### Define `boolen` data type

```ts
const isMarried: boolean = true;
console.log("Is it true that Mehedi is married ? Yes it's :-", isMarried);
```

### Define `undefine` Data type

```ts
const isValueAvilable: undefined = undefined;
```

### Define `null` Data type

```ts
const isValueNull: null = null;
```

### Define `Any` Data type

```ts
let name;
name = "Mehedi hasan";
name = 45;
name = true;
```

### Define `Array` Data type

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

### Define `Map In Array`

```ts
const numbers = [10, 20, 30, 40, 50];

const mapResult: number[] = numbers.map(
(number: number): number => number \* number
);
```

### Define` For Lop In Array`

```ts
for (let index: number = 0; index < numbers.length; index++) {
  const element: number = numbers[index];
  console.log("The For Loop Value :-", element);
}
```

### `reduce` In Array

```ts
let resutl: number = numbers.reduce(
  (accumulator: number, currentValue: number) => accumulator + currentValue
);
console.log("The Array Reduce Resutl :-", resutl);

console.log("--------The Map Result is :--------:", mapResult);
```

### We can define `Array of obejct` like this

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

### Define `Tuple Data` Type

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

### Define `Object`

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

### Define `Function`

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

### Define `function` in `object`

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

### Define `Spread Oparato`r

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

### Define `Rest Oparator `

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

### Define `Destructuring`

{

### Destucturing In Object

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

### Destucturing In `Array`

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

}

### ---------`Type Alias`---------

{

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

}

### ---------`Union Type (|)` ---------

{

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

}

### ---------`Intersection Type (&)` ---------

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

---- In Frontend and Backend there a common Data type (skills: string[]) that's why i put one skills -----

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

### ---------`Ternary Oparator`---------

{

```ts
const age: number = 20;
const isAdult = age >= 18 ? "Adult" : "Not adult ";
console.log(`Mehedi is ${isAdult} now `);
```

}

### ---------`nullish Coalescing Operator(??)`---------

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

### ---------`Optional Chaining`---------

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

### ---------`null Data type`---------

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

### ---------Unknow Data type---------

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

### ---------never Data type---------

- The never type represents the type of values that never occur. For instance, a function that always throws an error and never returns a value has a return type of never.

```ts
const throwErro = (msg: string) => {
  throw new Error(msg);
};

throwErro("Opps You Got Error!");
```


