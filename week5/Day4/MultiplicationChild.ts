import { NumericOperator } from "./class_AccessModifier";

class Multiplication extends NumericOperator{
    mul(){
        console.log(`The multiplication of numbers ${this.num5} and ${this.num6} is ${this.num5 * this.num6} `);
         
    }
}

let numMul = new Multiplication()
numMul.mul()
