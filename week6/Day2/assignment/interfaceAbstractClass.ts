import { Page } from "@playwright/test";

interface PageRules{
    verifyPage():void
}

abstract class  BasePage implements PageRules{

    abstract verifyPage(): void

    waitForPageLoad(){
        console.log("Waiting to be page loaded...");
        
    }

    getPageTitle():string{
        
        return "Page Title : Home Page"
        
    }


}

class LoginPage extends BasePage implements PageRules{

    verifyPage(): void {
        console.log("Login page verified");
        
    }

    enterUsername():void{
        console.log("Username: Sujitha");
        
    }

    enterPassword():void{
        console.log("Password: Tes@123");
        
    }

    clickLogin():void{
        console.log("Login Success");
        
    }

}

class ProductPage extends BasePage implements PageRules{

    verifyPage(): void {
        console.log("Product page verified");
        
    }

    searchProduct(product:string){
        console.log(`The ${product} is visible`);
    
    }


    addToCart(product:string):void{
        console.log(`The ${product} is added to the cart`);

    }

}



const login = new LoginPage()

console.log("\n************Login  Page **************");

login.waitForPageLoad()
login.verifyPage()

login.enterUsername()

login.enterPassword()
login.clickLogin()
console.log(
    login.getPageTitle()
);
 

console.log("\n************Product  Page **************");


const product = new ProductPage()

product.waitForPageLoad()
product.verifyPage()
product.searchProduct("Bag")
product.addToCart("Bag")
console.log(product.getPageTitle());
 



