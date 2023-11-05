"use strict";
//Reference Type ---> object
const user = {
    firstName: "Imam",
    middleName: "Mahadi",
    lastName: "Hasan",
};
const userTwo = {
    firstName: "Mehedi",
    lastName: "Hasan",
    isMarried: true,
};
const userThree = {
    company: "programming Heror",
    firstName: "Jhankar",
    lastName: "Mahamub",
    isMarried: true,
};
userThree.firstName = "Mehedi";
console.log("The User Three is :-", userThree);
