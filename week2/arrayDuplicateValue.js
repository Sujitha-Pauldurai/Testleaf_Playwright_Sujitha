/* Classroom Activity:
-------------------

Write the JS program to print duplicates in an array.
let num=[56,78,90,23,90,76,43,56] */

let num=[56,78,90,23,90,76,43,56]

for(let i=0;i<=num.length;i++){
    for(let j=i+1;j<=num.length;j++){
      // console.log(num[i],num[j]);
        if(num[i]===num[j]){
             console.log("The number "+num[i]+" is duplicated");
             break;
        }
    }
}

console.log(num.filter((num) => num > 50 ));

