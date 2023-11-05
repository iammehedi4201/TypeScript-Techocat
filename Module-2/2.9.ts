{
  //?-----------------------------------------------

  //*------------Conditional Type-------------
  //Note : kono type onno ekta type depend thake kono condition upoer seta holo conditonal type

  type x = number;
  type y = string;
  type post = y extends string ? string : unknown; //conditional type
  type comments = y extends number ? any : x extends number ? string : any;

  type shikh = {
    bike: string;
    car: string;
    plane: string;
  };

  type CheckVahicle<T> = T extends keyof shikh ? true : false;

  type HasBike = CheckVahicle<"bike">;

  type HasCar = CheckVahicle<"car">;

  type HasPlane = CheckVahicle<"plane">;

  //?-----------------------------------------------
}
