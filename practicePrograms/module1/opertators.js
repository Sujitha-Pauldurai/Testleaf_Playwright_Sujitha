let x = "64";
let y = 8;

/* 
 The important point is that JavaScript automatically converts the string "64" to a number for /, *, and -.
    However, + is special: when one operand is a string, JavaScript treats + as string concatenation */
console.log(x/y);
console.log(x*y);
console.log(x-y);
console.log(x+y)

// (10==9) -> false, so z = false
let z = 10 == 9;
console.log(z);

/* Boolean function in JavaScript converts any non-empty string or non-zero number to true.
     Since "true", "False", and 300 are all truthy values, Boolean will return true for these */
console.log(Boolean("true"));
console.log(Boolean("False"));
console.log( Boolean(300));
console.log(true);
