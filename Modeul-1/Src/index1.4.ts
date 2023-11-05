//----------string-------------
let firstName = "Mehedi"; //implicite data Type. infer maddome se date type detect kore
let lastName: string = "Hasan"; //Explicite date type.

//----------number----------
let phoneNumber: number = 1775777038;

//----------boolean----------
let isAdmin: boolean = true;

//----------undefine----------
let x: undefined = undefined;

//----------null----------
let y: null = null;

//----------any data type----------
let d; //ekhane ts complier infer kore (d) ke bhuje nibe any  date type. jekono data type use korte parbo
d = "Hello it's Me uzumaki Naruto";

//----------only put Number Data type----------
let rollNumber: number;
rollNumber = 13298;

//----------Array----------
let friends: string[];
friends = ["Tanim", "Even", "Shoaib"];
friends.push("Ohi");

let cpga: number[] = [3.54, 3.55, 3.56];
cpga.push(3.94);

//----------Tuple----------
//Note : A tuple is like an Array with a fixed number of elements of known Data types
let student: [string, number, boolean] = ["Mehedi Hasan", 123, true];
student[0] = "Khadija Akter Anika";

console.log("The cpga is :-", cpga);
