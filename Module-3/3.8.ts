{
  //?------------------------------------------------

  //*----------------polymorphisom-----------

  class Person {
    getSleep() {
      console.log("I am sleeping for 8 Hours Per day");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I am sleeping for 7 Hours per day");
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log("I am sleeping for 6 hours per day");
    }
  }

  //Getting Sleeping Hour using function
  const getSleepingHour = (param: Person) => {
    param.getSleep();
  };

  const person_1 = new Person();
  const person_2 = new Student();
  const person_3 = new Developer();
  getSleepingHour(person_1);
  getSleepingHour(person_2);
  getSleepingHour(person_3);

  //----------------------------------
  //parent classs method je shape thake same oi shape likhte hobe tor class
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
    getArea(): number {
      return this.width * this.height;
    }
  }

  //get Area Shape
  const getAreaShape = (param: Shape) => {
    const result = param.getArea();
    console.log(result);
  };

  const shape = new Shape();
  const circleShape = new Circle(50);
  const rectangleShape = new Rectangle(100, 100);

  getAreaShape(shape);
  getAreaShape(circleShape);
  getAreaShape(rectangleShape);

  //?------------------------------------------------
}
