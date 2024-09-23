// Write a program that calculates a single value from an array using the `reduce()` method.

let arr=[10,20,30,40,50];

console.log("Array before reduce :",arr);
let sum= arr.reduce((acc,curr)=>{return acc+curr});

console.log("Array after reduce :",sum);
