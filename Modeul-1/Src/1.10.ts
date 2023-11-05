{
  //*--------------Union Type (string|number)------------------

  //?note : Union type mean For example : const a : (string | number)  variable  (a) data type will string or number
  const phoneNumber: string | number = "1455";

  //*Union data type with litaral data type

  //?note : in litral type je value ta data type hishabe assign hoy oigulo use korte hoy like in this example you have to used these two ("jujutu kaisan" | "Deamon slayer")
  const fvrt: "jujutu kaisan" | "Deamon slayer" = "jujutu kaisan";

  //?Note : i used in this (type alias) (union) and (litral data type)
  type FvrtAnime = "jujutu kaisan" | "Deamon slayer";
  type Developer = "Web" | "React" | "Flutter";

  //* Merge two Type alias as one
  type MergeDataType = FvrtAnime | Developer;
  const Mehedi: MergeDataType = "Flutter";

  const likedMost: FvrtAnime = "jujutu kaisan";

  //*Use union with litaral Data type
  type User = {
    name: string;
    email: string;
    gender: "Male" | "Female"; //union with string litaral Data types
    bloodGroup: "O+" | "AB+" | "B+";
  };

  const userOne: User = {
    name: "khadija Akter Anika",
    email: "anika@gmail.com",
    gender: "Female",
    bloodGroup: "B+",
  };

  console.log("The User One is :-", userOne);

  //*----------------Intersection Type (string & Nubmer)---------------------
  //?Note : - In Intersection  when declare to a variable then it will have two data type

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  //?Note : In Frontend and Backend there a common Data type (skills: string[]) that's why  i put one skills
  const Ohi: FullStackDeveloper = {
    skills: ["Html", "Css", "Javascript", "React"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //*A Good Example :
  {
    type FrontendDeveloper = {
      skills: string[];
      designation_1: "FrontendDeveloper";
    };

    type BackendDeveloper = {
      skills: string[];
      designation_2: "BackendDeveloper";
    };

    type AppDeveloper = {
      skills: string[];
      designation_3: "AppDeveloper";
    };

    type HybirdDeveloper =
      | (FrontendDeveloper & BackendDeveloper)
      | AppDeveloper
      | FrontendDeveloper
      | BackendDeveloper;

    const Mehedi: HybirdDeveloper = {
      skills: ["Html", "Css", "JavaScript", "React", "Node.js"],
      designation_1: "FrontendDeveloper",
    };

    const Saiful: HybirdDeveloper = {
      skills: ["Flutter"],
      designation_3: "AppDeveloper",
    };
  }

  //
}
