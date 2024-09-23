//Modify an array by removing and/or adding elements using the `splice()` method.

let array = [10,20,30,40,50];

console.log("Before splice :",array);

let removedItems = array.splice(1, 1);
console.log("After splice :",array);

// After Adding:
let addedItems = array.splice(1, 1,"Dhwani");
console.log("After splice :",array);