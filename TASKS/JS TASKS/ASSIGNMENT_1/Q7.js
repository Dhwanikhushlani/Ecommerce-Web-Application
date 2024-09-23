//  Write a function `isBetweenOneAndTen` that takes a number as an argument and returns `true` if
// the number is between 1 and 10 (inclusive), otherwise `false`.

function isBetweenOneAndTen(num){
    if(num>=1 && num<=10){
        return true;
    }
    else{
        return false;
    }
}

console.log(isBetweenOneAndTen(7));