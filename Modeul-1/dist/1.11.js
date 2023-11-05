"use strict";
var _a, _b;
{
    //*(---------Learning Ternary Oparator || Optional Chaining || Nullish Coalescing Operator--------------)
    //*------------------->Ternary Oparator<-------------------------
    //(if else) condition :-
    const age = 25;
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Not Adult");
    }
    //Using Ternary Oparator
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    console.log({ isAdult }); //Output : {isAdult : Adult}
    //*------------->nullish Coalescing Operator(??)<-----------------------
    //? (null) / (undefined) => duitar upor re defend kore Decision making korle nullish Coalescing Operator use kore.nullish Operator work  in (null) && (undefine) value
    const isAuthenticated = null;
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest"; //(??) nullish operator check if isAuthenticated is (null) or (undefine) if null and undefine not found then it will give (" ") empty string
    const result2 = isAuthenticated ? isAuthenticated : "Guest"; //Undefine and null is falsey value that why give (Guest)
    console.log({ result }, { result2 }); // Output : {result : Guest},{result2 : Guest}
    const user = {
        name: "Mehedi Hasan",
        address: {
            city: "Dhaka",
            Area: "Khilgoan",
            presentAddress: "Khilgoan",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Addresss";
    console.log("The Permanent Address is :-", permanentAddress);
    //
}
