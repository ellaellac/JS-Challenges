//1. Write a function that takes a number and returns true 
//if it is a positive number and 
//false if it is a negative number.

const numChecker = (num) => {
    if (num > 0){
        return true
    } else if (num == 0) {
        return "you entered zero"
    }else if (num < 0) {
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

//3.Write a function that takes three numbers and 
// returns the largest of the three numbers.

const getLargestNumber = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3 ) {
        return num1
    } else if (num2 > num1 && num2 > num3 ) {
        return num2
    } else return num3
}

console.log (getLargestNumber(2,1,4));
console.log (getLargestNumber(6,2,3));


