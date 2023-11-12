{
  //?------------------------------------------------

  //*----------------Access Modifier-------------
  //?By Defaultly property sathe (public) Acccess modifer thake

  //*Parent Class
  class BankAccount {
    public readonly id: number; //when we use readony then we can not change this property
    public name: string;
    protected _blance: number; //use (_) this for private variable

    //?----------------
    //*Private property only available inside class.but class ke extend kore tahole extend kora cls private property ta pabe nah
    //*jodi protected use kori tahole oi extend kore class pawa jabe kinto cls bahire use kora jabe nah
    // protected blance :number
    //?---------------

    constructor(id: number, name: string, _blance: number) {
      this.id = id;
      this.name = name;
      this._blance = _blance;
    }

    //We can get  blance and add deposti using function 

    public addDeposit(amount: number) {
      this._blance = this._blance + amount;
    }

    public getBlance() {
      console.log(`${this.name} blance is right now ${this._blance} `);
    }
  }

  const goribManusharAccount = new BankAccount(586258, "Mehedi Hasan", 100);
  goribManusharAccount.addDeposit(200);
  goribManusharAccount.getBlance();

  //*Child Class

  class StudentAccount extends BankAccount {
      test(){
         
      }
  }

  //?------------------------------------------------
}
