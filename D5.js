/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const area = function(l1, l2){
    return l1 * l2
}
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function (a, b){
    let sum = 0;
    if (a === b){
      sum = (a + b) * 3
    } else {
      sum = a + b
    }
    return sum;
  }
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function (a){
    let diff = 0;
  if(a > 19){
    diff = (Math.abs(a - 19)) * 3
  } else {
    diff = Math.abs(a - 19)
  }
    return diff;
  }
  console.log(crazyDiff(20))
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function (a){
    if ((a >= 20 && a <= 100) || a === 400){
      return true;
    } else {
      return false;
    }
    }

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (str1){
    let str = "Strive ";
    for (let i = 0; i < str1.length; i++){
         str1.slice(0, 6);
       if (str1.slice(0, 6) === "Strive"){
         return str1;
       } else{
         return str += str1;
       }
    }
    }

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function (num){
    if ((num % 3 === 0) && (num % 7 === 0)){
      return "it is a multiple of both 3 and 7"
    } else if (num % 3 === 0){
      return "its multiple of 3"
    } else if (num % 7 === 0){
      return "its multiple of 7"
    } else {
      return "its neither the maltiple of 3 nor 7"
    }
  }

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function (num){
    return num.split("").reverse().join("");
}

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function (num){
    return num && num.charAt(0).toUpperCase() + num.substring(1);
    }

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function (num){
    return num.slice(1, num.length-1) 
}

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/


const giveMeRandom = function (num){
    let arr1 = [];
    for (let i = 0; i < num; i++){
      arr1.push(Math.floor(Math.random() * 11))
    }
    return arr1;
  }

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/