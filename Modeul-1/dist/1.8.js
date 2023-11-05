"use strict";
{
    //----------------Destructuring-----------------
    //*In Object
    const user = {
        name: "Mehedi Hasan",
        address: {
            city: "Dhaka",
            Area: "KHilgoan",
        },
        phoneNumber: "017775777038",
    };
    //user.name = 51  //!give error that type "Number " is not assignable to "string" type
    const { name, address: { city }, } = user;
    // We can also give alias name to property
    const { name: fullName } = user; //fullName is alieas name of "name" property
    console.log("The Name is :-", fullName);
    //*Array Destructuring
    const friends = ["Tanim", "Evan", "Shoaib", "Akash", "Ohi", "Bijoy"];
    const [, closefriend, ...rest] = friends; //note : using  (...rest) i can set the rest of the array element in here
    console.log("The close Friend is :-", rest);
}
