{
  //?------------------------------------------------

  //*----------------Static-----------
  //?

  //In Object-Oriented Programming (OOP), the static keyword is used to create properties and methods that belong to the class itself, rather than to instances of the class.

  //Static : properties and methods belong to the class itself, not to any specific instance of the class. They are shared among all instances of the class and can be accessed directly using the class name, without creating an instance of the class.

  //Each instance of the class has its own copy properties and methods.

  //?

  class Counter {
    static count: number = 0;

    //?
    // when use static we have to use  className.(property) to access class property
    //?

    increment() {
      return (Counter.count = Counter.count + 1);
    }

    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  //?
  //when use (static) In this example, instance_1 and instance_2 and instance_3 are different instances of the Counter class, but they share the same (count) property and same method (decrement).
  //?

  const instance_1 = new Counter();
  console.log(instance_1.increment()); //1 -->different memoary

  const instance_2 = new Counter();
  console.log(instance_2.increment()); //1 -->different memoary

  const instance_3 = new Counter();
  console.log(instance_3.increment());

  //?
  console.log(Counter.decrement());

  //?------------------------------------------------
}
