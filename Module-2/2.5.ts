{
  //?------------------------------

  //*----------------Genric With Function--------------

  //*Using Array
  const createArray = (value: string): string[] => {
    return [value];
  };

  const convertStringToArry = createArray("Bangladesh");

  //CreatArray with Genric for we can dynamiclly pass type in funciton
  const CreateGenricArray = <T>(value: T): T[] => {
    return [value];
  };

  type Info = {
    name: string;
    age: number;
  };

  const convertBoolenToBoolenArray = CreateGenricArray<boolean>(true);
  const convertNumberToNumberArray = CreateGenricArray<number>(10);
  const convertObjecToObjectArray = CreateGenricArray<Info>({
    name: "Mehedi",
    age: 20,
  });
  console.log(convertStringToArry);

  console.log("The convertObjecToObjectArray : ", convertObjecToObjectArray);

  //---------------------------------------
  //*using Tuple in genric Funtion
  {
    const createGenricTuple = <T, Y>(value_1: T, Value_2: Y): [T, Y] => {
      return [value_1, Value_2];
    };

    const convertNumberToNumberArray = createGenricTuple<string, number>(
      "Mehedi Hasan",
      25
    );

    const createNumberObject = createGenricTuple<
      string,
      {
        age: number;
        BooldGroup: string;
      }
    >("Mehedi", {
      age: 28,
      BooldGroup: "O+",
    });

    console.log(convertNumberToNumberArray);
  }

  //-------------------------------------------

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

  console.log("Mehedi Info :-");

  //-----------------------------------

  const createFriendsArray = <T>(...name: T[]) => {
    return name;
  };

  const Friends = createFriendsArray<{
    name: string;
    age: number;
  }>({ name: "mehedi", age: 20 }, { name: "Tanim", age: 20 });

  console.log(Friends);

  //?------------------------------
}
