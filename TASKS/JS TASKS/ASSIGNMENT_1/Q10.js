// Create a function `getDayType` that takes a number (1-7) as an argument and returns:
//  - "Weekend" if the number is 6 (Saturday) or 7 (Sunday),
//  - "Weekday" if the number is between 1 and 5.
//  Use a `switch` statement to implement this logic.

function getDayType(day){
    switch(day){
        case 1 : {
            return "Weekday";
            break;
        }
        case 2 : {
            return "Weekday";
            break;
        }
        case 3 : {
            return "Weekday";
            break;
        }
        case 4 : {
            return "Weekday";
            break;
        }
        case 5 : {
            return "Weekday";
            break;
        }
        case 6 : {
            return "Weekend";
            break;
        }
        case 7 : {
           return "Weekend";
            break;
        }
        default:{
            return "Invalid day";
        }
    }
}
console.log(getDayType(7));
console.log(getDayType(9));
console.log(getDayType(2));