class TextBox{

    // This is optional
    fill(text:string,locator:string):void
    fill(text:string):void

    //typeScript allows only one method implementation we can achive overloading using the optioanl parameter
    fill(text:string,locator?:string):void{
        if(locator){
            console.log("The method has 2 parameters text and locator");
            
            console.log("Text : ",text);
            
            console.log("Locator : ",locator);
            
        }
        else{
            console.log("\nThe method has only one Parameter \n Text : ",text);
            
        }
    }
}

const textboxL = new TextBox()
textboxL.fill("Name:Sujitha", "#name")
textboxL.fill("Name:Test")