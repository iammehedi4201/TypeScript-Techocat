{
  const CreateStringArray = (value: string): string[] => {
    return [value];
  };
  const CreateNumberArray = (value: number): number[] => {
    return [value];
  };

  const stringArray = CreateStringArray("Hello");
  const NumberArray = CreateNumberArray(456);
  //For not repeating same process againe againe that's i create genricArray
  // const CreateGenricArray = <T>(value: T): T[] => {
  //   return [value];
  // };

  const CreateGenricArray = <T>(...value: T[]): T[] => {
    return value;
  };

  const stringsArray = CreateGenricArray<{
    name: string;
    age?: number;
  }>(
    { name: "Mehei", age: 20 },
    { name: "Mehei" },
    { name: "Mehei" },
    { name: "Mehei" },
    { name: "Mehei" }
  );

  console.log(stringsArray);

  // const addCourseToStudent = (student: object) => {
  //   const course: string = "Next Level Web Development ";
  //   return {
  //     ...student,
  //     course,
  //   };
  // };

  const addCourseToStudent = <T extends { id: string; name: string }>(
    student: T
  ) => {
    const course: string = "Next Level Web Development ";
    return {
      ...student,
      course,
    };
  };

  const student_1 = addCourseToStudent({ id: "192-15-1285", name: "Saiful" });
  const student_2 = addCourseToStudent({ id: "155445", name: "Saiful" });

  console.log(student_1);

  type vechile = {
    bike: string;
    car: string;
    privetJet: string;
  };

  type owner = "bike" | "car" | "Privatejet";

  const user = {
    name: "evan",
    age: 25,
  };

  user["age"];

  const getObjectPropety = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const propertyValue = getObjectPropety(user, "age");

  interface something {
    something: string;
  }
  const createPromise = (): Promise<something> => {
    return new Promise<something>((resolve, reject) => {
      // const data: string = "Something is Here";
      const data = { something: "Something is also Here" };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  const callingPromise = async () => {
    const response: something = await createPromise();
    console.log(response);
  };

  callingPromise();

  const getPost = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  };

  getPost();
}
