{
  //?----------------------------------------------

  //*---------Class In Typescript----------
  class Animal {
    public name: string;
    public spacis: string;
    public sound: string;
    constructor(name: string, spacis: string, sound: string) {
      this.name = name;
      this.spacis = spacis;
      this.sound = sound;
    }
    makeSound() {
      console.log(`${this.name} sound is ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepar", "Dog", "Ghew Ghew");
  const cat = new Animal("Adorii", "Cat", "Mhew Mhew");
  dog.makeSound();

  //---------------------------------------
  class Animal_2 {
    //if we use parameter (public) property then we don't have repeat the data type declaration twice
    constructor(
      public name: string,
      public spacis: string,
      public sound: string
    ) {}
  }

  const tiger = new Animal_2("Royel Bengal Tiger", "Tiger", "Teaw");

  //?----------------------------------------------
}
