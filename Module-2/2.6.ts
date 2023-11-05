{
  //?-----------------------------------------

  //*---------Constraints-----------
  //Note : If we try to enforce something on someone this called Contraints

  const addCourseToStudent = <
    // useing (extends) we can tell the (T) that you have to have at least this property otherwise it will give error
    T extends { id: string; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student_1 = addCourseToStudent<{
    id: string;
    name: string;
    email: string;
    bloodGroup: string;
  }>({
    id: "192-15-13298",
    name: "Mehedi hasan",
    email: "iammehedi296@gmail.com ",
    bloodGroup: "O+",
  });

  const student_2 = addCourseToStudent<{
    id: string;
    name: string;
    email: string;
  }>({
    id: "192-15-13290",
    name: "Saif Mahamud",
    email: "iammehedi296@gmail.com",
  });

  //?-----------------------------------------
}
