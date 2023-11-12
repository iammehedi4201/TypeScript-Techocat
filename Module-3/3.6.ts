{
  //?------------------------------------------------

  //*----------------Getter & Setter-----------

  class BankAccount {
    public readonly id: number;
    public name: string;
    private _blance: number;

    constructor(id: number, name: string, _blance: number) {
      this.id = id;
      this.name = name;
      this._blance = _blance;
    }

    //We can get  blance and add deposti using  (getter & setter) and access it outside like object property
    get blance() {
      return this._blance;
    }

    set deposit(amount: number) {
      this._blance = this._blance + amount;
    }
  }
  const goribManusharAccount = new BankAccount(586258, "Mehedi Hasan", 100);
  const myBlance = goribManusharAccount.blance;
  goribManusharAccount.deposit = 1500;
  console.log(goribManusharAccount.blance);

  //?------------------------------------------------
}
