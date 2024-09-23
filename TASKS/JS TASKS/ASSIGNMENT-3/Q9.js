// Filter elements from an array that meet a certain condition using the `filter()` method.

let array = [10,20,30,40,50];
console.log("Array before filter :",array);

let filterArray = array.filter((item)=>{
    return item>=30;
})
console.log("Filtered Array :",filterArray);