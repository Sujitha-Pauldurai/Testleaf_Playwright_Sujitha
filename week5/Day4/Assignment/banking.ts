export class BankAccount{

    // Public: accessible from anywhere
    accountNumber:number = 9045632

    // Private: protects balance from direct outside access
    private balance:number = 60000

    // Protected: accessible in this class and child classes
    protected accountHolder:string = "Sujitha"
    protected customerAddress:string ="Chennai/Tamilnadu"
  
    // Method: performs withdrawal by passing an amount
    withdraw(wAmount:number){
        this.balance = this.balance - wAmount
    }

   // Setter: deposits amount using assignment syntax (=)
    public set deposit(dAmount : number) {
        this.balance = this.balance + dAmount;
    }
    
    // Getter: reads the private balance from outside
    public get accountBalance() : number {
        return this.balance
    }
 }

 let account = new BankAccount()

 console.log(`Intial Balance : ${account.accountBalance}`);

 // Method call: uses ()
 account.withdraw(10000)

 console.log(`Balance after withdarw : ${account.accountBalance}`);

 // Setter: uses assignment (=)
 account.deposit=12000

 console.log(`Balance after deposit : ${account.accountBalance}`);

 