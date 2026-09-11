/* Custom Array Callback Function :
	Create processArray(array, callback) and use it to double, square, test evenness, and stringify values. */

	//function doubleValue(num) { return num * 2}
	const doubleValue = num => num * 2

	function squareValue(num){ return num ** 2}

	function testEven(num){ return num % 2 === 0}

	function numberToString(num){ return num.toString()}

	function processArray(array,callback){
		let resultArray = []
		for (let i = 0; i < array.length;  i++){
			resultArray[i]=callback(array[i])
		}
		return resultArray
	}

	const numbers = [1, 2, 3, 4, 5];
	console.log("Double Value : ",processArray(numbers,doubleValue));
	console.log("Square Value : ",processArray(numbers,squareValue));
	console.log("is Even : ",processArray(numbers,testEven));
	console.log("Number to String : ",processArray(numbers,numberToStrinng));
	