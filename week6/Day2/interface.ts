interface Payment{
    pay(amount:number):void
}

abstract class PaymentClass{
    abstract pay(amount:number):void
}

class UPI extends PaymentClass{

    pay(amount:number):void{
        console.log(`The amount ${amount} paid via UPI`);
        
    }
}

class CreditCard implements Payment{

    pay(amount:number):void{
        console.log(`The amount ${amount} paid via credit card`);
        
    }
}

class NetBanking implements Payment{

    pay(amount:number):void{
        console.log(`The amount ${amount} paid via Net banking`);
        
    }
}

const upiObj = new UPI()
upiObj.pay(2000)
const card = new CreditCard()
card.pay(3000)
const online = new NetBanking()
online.pay(1000)