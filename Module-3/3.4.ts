{
  //?--------------------------------------------

  //*------------Instanceof guard-------------
  //note : The instanceof guard is used in TypeScript to check if an `object is an instance` of a particular class.
  //parent class
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSoung() {
      console.log(`I am making sound`);
    }
  }

  //Child Class
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    mekeBark() {
      console.log("I am Barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am Meawing");
    }
  }

  //instance
  const dog_1 = new Dog("German shepard", "dog");
  const cat_1 = new Cat("Adorii", "Cat");

  //Creating function using (Animal) class as function parameter.and also we can access (Animla) class property inside function

  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.mekeBark();
    } else if (animal instanceof Cat) {
      animal.makeMeaw();
    } else {
      animal.makeSoung();
    }
  };

  getAnimal(cat_1);

  //There is another smartway
  {
    const isDog = (animal: Animal): animal is Dog => {
      return animal instanceof Dog;
    };

    const isCat = (animal: Animal): animal is Cat => {
      return animal instanceof Cat;
    };

    const getAnimal = (animal: Animal) => {
      if (isDog(animal)) {
        animal.mekeBark();
      } else if (isCat(animal)) {
        animal.makeMeaw();
      } else {
        animal.makeSoung();
      }
    };

    getAnimal(cat_1);
  }

  //?--------------------------------------------
}
