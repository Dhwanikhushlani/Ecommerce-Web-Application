//Create a new array by transforming each element in an existing array using the `map()` method.

let array = [10,20,30,40,50];
console.log("Existing array :",array);

let newArray = array.map((item)=>{
    return item * 10;
})
console.log("New Array :",newArray);