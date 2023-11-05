//Reference Type ---> object
const user: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: "Imam",
  middleName: "Mahadi",
  lastName: "Hasan",
};

const userTwo: {
  firstName: string;
  middleName?: string; //optional Thakte o pare nh thakte pare
  lastName: string;
  isMarried: boolean;
} = {
  firstName: "Mehedi",
  lastName: "Hasan",
  isMarried: true,
};

const userThree: {
  readonly company: "programming Heror"; //type --> literal type.jokhon ekta value Data type hishabe beheviour korbe  //readonly property accesmodifer je use korle company property change korar access dive nah
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  company: "programming Heror",
  firstName: "Jhankar",
  lastName: "Mahamub",
  isMarried: true,
};

userThree.firstName = "Mehedi";

console.log("The User Three is :-", userThree);
