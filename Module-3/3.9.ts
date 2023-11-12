{
  //?------------------------------------------------

  //*----------------Abstraction -----------

  //?
  //two to create Abstraction : interface and abstract
  //Class jodi interface structure follow kore banite gele amadar `( class Car implemants vechile) evabe likhete hobe `
  //?

  //we can get idea see this structure
  {
    interface Vechicle {
      name: string;
      model: string;
      color: string;
      startEngine(): void;
    }

    class Car implements Vechicle {
      name: string;
      model: string;
      color: string;
      OwnerName: string;
      constructor(
        name: string,
        model: string,
        color: string,
        OwnerName: string
      ) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.OwnerName = OwnerName;
      }
      startEngine(): void {}
    }

    const car_1 = new Car("Toyota Alian", "2020", "red", "Mehedi Hasan");

    class Truck implements Vechicle {
      name: string;
      model: string;
      color: string;
      constructor(name: string, model: string, color: string) {
        this.name = name;
        this.model = model;
        this.color = color;
      }
      startEngine(): void {}
    }

    const truck_1 = new Truck("Toyota Magi", "2020", "red");
  }
  //------------------------------------------

  //* Now using Abstract Class also called Leader Class
  //?when we use abstract key in class then
  // we can not create instance  use (abstract) class vechile becuse it's a structer ;
  {
    //abstract structure
    abstract class Vechicle {
      abstract name: string;
      abstract model: string;
      abstract color: string;
      abstract startEngine(): void;
      abstract stopEngine(): void;
    }
    //implimentation
    class Car extends Vechicle {
      name: string;
      model: string;
      color: string;
      owner: string; //own property
      constructor(name: string, model: string, color: string, owner: string) {
        super();
        this.name = name;
        this.model = model;
        this.color = color;
        this.owner = owner;
      }

      startEngine(): void {}

      stopEngine(): void {}
    }

    const car_1 = new Car("Toyota", "2023", "Black", "anika");

    class Truck extends Vechicle {
      name: string;
      model: string;
      color: string;
      owner: string; //own property
      constructor(name: string, model: string, color: string, owner: string) {
        super();
        this.name = name;
        this.model = model;
        this.color = color;
        this.owner = owner;
      }
      startEngine(): void {}
      stopEngine(): void {}
    }
    const Truck_1 = new Truck("Toyota", "2023", "Black", "anika");
  }

  //?------------------------------------------------
}
