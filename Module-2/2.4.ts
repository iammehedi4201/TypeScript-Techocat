{
  //?--------------------------------------------------
  //*--------------Generic Type With (Interface) --------------------

  interface Developer<T, B = null> {
    // We set default value for this.bcz if someone not  send a parameter value then that will not a problem it wil then use default parameter
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseDate: number;
    };
    smartWatch: T;
    bike?: B;
  }

  //------------------------

  type AppleWatch = {
    brand: string;
    model: string;
    releaseDate: number;
  };

  //Note : If a property is optional that is not required for like (poorDeveloper has not bike property ) but still give error for not  putting value in (bike property) that's use (null | undefine) For not getting the error
  //   const poorDeveloper: Developer<AppleWatch, null> = {}

  const poorDeveloper: Developer<AppleWatch, null> = {
    name: "Mehedi Hasan",
    computer: {
      brand: "HP",
      model: "Dragkneel69",
      releaseDate: 2023,
    },
    smartWatch: {
      brand: "Apple",
      model: "Apple Watch 4201",
      releaseDate: 2022,
    },
  };

  //------------------------------

  type HuiwaiWatch = {
    brand: string;
    model: string;
    display: string;
    releaseDate: number;
    hearRate: boolean;
    sleepRate: boolean;
  };

  interface PulsareBike {
    name: string;
    modle: string;
    color: string;
  }

  const richDeveloper: Developer<HuiwaiWatch, PulsareBike> = {
    name: "Saiful Islam",
    computer: {
      brand: "Asus",
      model: "Asus69",
      releaseDate: 2023,
    },
    smartWatch: {
      brand: "Huiwai",
      model: "Huiwai Watch 4201",
      display: "Amould HD Display",
      releaseDate: 2022,
      hearRate: true,
      sleepRate: true,
    },
    bike: {
      name: "Pulsare",
      modle: "Pulsare Version 2023",
      color: "Red",
    },
  };

  console.log("The rich Developer is :-", richDeveloper);

  //?---------------------------------------------------
}
