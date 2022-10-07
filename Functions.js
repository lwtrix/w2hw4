/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2) {
    console.log((l1 * l2) / 2);
}

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(x, z) {
    if(x === z) {
        return console.log((x + z) * 3)
    } else {
        return x + z;
    }
}

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(num) {
    const num2 = 19;

    if(num > num2) {
        return console.log((num - num2) * 3);
    } else {
        return console.log(num2 - num)
    }
}


/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

const boundary = x => {
    if(x >= 20 && x <= 100 || x === 400) {
        return console.log(true);
    } else {
        return false;
    }
}


/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = str => {
    if (str.toUpperCase() === "Strive".toUpperCase()) {
        return console.log(str);
    } else {
        return console.log("Strive" + str)
    }
}


/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

const check3And7 = num => {
    if(num % 3 === 0 || num % 7 === 0) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}


/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/


const reverseString = str => {
    // const strArray = str.split("");
    const strArray = [...str];

    console.log(strArray.reverse().join(""));
}

// reverseString('string')

const reverseStringv2 = str => {
    let finalStr = '';

    for(let i = str.length - 1; i >= 0; i--) {
        finalStr += str[i]
    }
    return console.log(finalStr)
}

// reverseStringv2('string')

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = str => {
    return console.log(str.charAt(0).toUpperCase() + str.slice(1));
}

upperFirst('dniwan')

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

const cutString = str => {
    const strArray = [...str];
    strArray.pop() + strArray.shift();
    const finalStr = strArray.join(" ");

    return console.log(finalStr)
}

cutString('string')

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = num => {
    const numbersArray = [];
    for(let i = 0; i < num; i++) {
        const randomNum = Math.floor((Math.random() * 10) + 1) 
        arr.push(randomNum);
    }

    return console.log(arr)
}

giveMeRandom(5);

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
