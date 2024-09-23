// Write a JavaScript program that creates an array of 5 numbers, calculates the sum of all the numbers in the array,
// and prints the result.

let arr = [10,20,30,40,50];
let sum =0;

for(let i=0 ; i<arr.length;i++){
    sum = sum+arr[i];
}

console.log("Sum of array elements is : " ,sum);


// SECOND METHOD---> USING REDUCE

// let arr=[10,20,30,40,50];

// let sum= arr.reduce((acc,curr)=>{return acc+curr});
// console.log(sum);
