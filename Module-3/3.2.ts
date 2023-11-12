{
  //?----------------------------------------------

  //*---------Class In Typescript----------

  //This is common property of (student) & (teacher) class
  class Parent {
    name: string;
    age: number;
    address: {
      city: string;
      area: string;
    };
    //?
    constructor(
      name: string,
      age: number,
      address: {
        city: string;
        area: string;
      }
    ) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    //?
    getSleep(numOfHour: number) {
      console.log(`${this.name} is sleep for ${numOfHour} Hour`);
    }
  }

  //-----------------------------------------`

  class Student extends Parent {
    constructor(
      name: string,
      age: number,
      address: {
        city: string;
        area: string;
      }
    ) {
      super(name, age, address); //using super() we can send property from child contuctor to parent contructor
    }
  }

  const studen_1 = new Student("Mehedi Hasan", 20, {
    city: "Dhaka",
    area: "Khilgoan",
  });
  studen_1.getSleep(9);
  console.log(studen_1);

  //------------------------------------------

  class Teacher extends Parent {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: {
        city: string;
        area: string;
      },
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numOfClass: number) {
      console.log(`${this.name} is take ${numOfClass} everyday`);
    }
  }

  const teacher_1 = new Teacher(
    "Jhankar sir",
    25,
    { city: "Dhaka", area: "khilgoan" },
    "Ceo"
  );
  teacher_1.getSleep(5);

  //?----------------------------------------------
}
