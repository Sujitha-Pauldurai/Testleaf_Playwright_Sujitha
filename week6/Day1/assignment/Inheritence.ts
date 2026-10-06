// Demonstrates inheritance and method overriding using reusable WebComponent classes.

// Parent class representing a generic web component
class WebComponent{

    //Property
    public selector:string

    // Constructor is called when an object is created and assigns "Username" as the default selector
    constructor(){
        this.selector = "Username"
    }

    //Method to perform click action
    click():void{
        console.log("Click on: ",this.selector);
        
    }

    //Method to perform focus on element
    focus():void{
        console.log("Focus on: ",this.selector);
        
    }
}

// Button class inherits properties and methods from WebComponent
class Button extends WebComponent{

    // Overrides the click() method of the parent class
    click(): void {

        console.log("Button Click ",this.selector);


        // Calls the click() method of the parent class
        super.click()
        
    }
}

// TextInput class inherits properties and methods from WebComponent
class TextInput extends WebComponent{
    value:string=""


    // Method to enter text into the input field
    enterText(text:string){
        this.value=text

        console.log("Text Input value is :",this.value);
        
    }
}

// Function to test Button and TextInput components
function testComponents():void{

    let buttonObj = new Button()
    let textObj = new TextInput()

    buttonObj.click()
    buttonObj.focus()

    textObj.enterText("Testing")
    textObj.click()
    textObj.focus()


}
testComponents()