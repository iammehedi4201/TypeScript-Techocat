"use strict";
{
    //--------------Spread Oparator--------------
    //(Note):Spread has another cousin name Rest Oparator
    //*  Learn spread oparator
    //In Array
    const namesOne = ["Mehedi", "Mishu", "Anika"];
    const namesTwo = ["Nargis", "Ovi", "Rashida"];
    //   namesOne.push(namesTwo)  //!Error :  string[] is not assignable to parametar type of string
    namesOne.push(...namesTwo);
    //In Object
    const mentors1 = {
        typeScript: "Mizba Vai",
        redux: "Mir Vai",
        DBS: "Mizan vai ",
    };
    const mentors2 = {
        Prisma: "Firoz Vai",
        Next: "Tanmoy vai",
        cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    //* Learn rest opeartor
    //?Note : The rest operator (...) is used to collect the rest of the element into array. it's commonly used in (functon parameter & destructing assignments)
    const greetFriends = (...friends) => {
        friends.forEach((friend) => {
            console.log(friend);
        });
    };
    greetFriends("Mehedi", "tanim", "eavana");
}
