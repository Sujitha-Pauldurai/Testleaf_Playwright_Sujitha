

export class NumericOperator{
    //public property
    num1:number = 10
    num2:number=20
    //Private property
    private num3:number = 90
    private num4:number =70
    //Protected property
    protected num5:number = 3
    protected num6:number = 78
    add(){
        return  this.num1+this.num2
    }
    private sub(){
        return this.num3 - this.num4
    }
    
    
    public get subVal() : number {
        return this.sub() 
    }

     
    public get getNum3() : number {
        return this.num3
    }

     public get getNum4() : number {
        return this.num4
    }
    
    
    
}

let calculation = new NumericOperator()

console.log(` Addition of ${calculation.num1} and ${calculation.num2} is ${calculation.add()}`);

console.log(`\n Addition of ${calculation.getNum3} and ${calculation.getNum4} is ${calculation.subVal}`);


