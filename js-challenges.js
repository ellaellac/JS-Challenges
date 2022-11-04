//1. Write a function that takes a number and returns true 
//if it is a positive number and 
//false if it is a negative number.

const numChecker = (num1) => {
    if (num1 > 0){
        return true
    } else if (num1 == 0) {
        return "you entered zero"
    }else if (num1 < 0) {
        return false
    }

}

console.log (numChecker (-1));
console.log (numChecker (10));

// 2. Write a function that takes a number of days 
// and converts it into an age.

const convertDaystoAge = (days) => {
    console.log(days/365);
}

convertDaystoAge(3650);
convertDaystoAge(6570);

