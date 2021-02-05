"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/*
function analyzeColor(color) {
    if (color === "red") {
        return "The color is red, like a firetruck.";
    }
    else if (color === "orange") {
        return "The color is orange, like an orange(the fruit)."
    }
    else if (color === "yellow") {
        return "The color is yellow, like the sun.";
    }
    else if (color === "green") {
        return "The color is green, like grass."
    }
    else if (color === "blue") {
        return "The color is blue, like the sky."
    }
    else if (color === "indigo") {
        return "The color is indigo, like the ocean."
    }
    else if (color === "violet") {
        return "The color is violet, like a plum."
    }
    else {
        return "Hmmm. I do not know anything about that color."
    }
}
*/

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

    analyzeColor(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

    function analyzeColor(color) {
        switch (color) {
            case ("red"):
                return "The color is red, like a firetruck.";
                break;
            case ("orange"):
                return "The color is orange, like an orange(the fruit)."
                break;
            case ("yellow"):
                return "The color is yellow, like the sun.";
                break;
            case ("green"):
                return "The color is green, like grass."
                break;
            case ("blue"):
                return "The color is blue, like the sky.";
                break;
            case ("indigo"):
                return "The color is indigo, like the ocean."
                break;
            case ("violet"):
                return "The color is violet, like a plum."
                break;
            default:
                return "Hmmm. I do not know anything about that color."
        }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var color = prompt("Input a color, please.");
alert(analyzeColor(color));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

    function calculateTotal(luckyNum, total) {
        switch (luckyNum) {
            case (0):
                return total;
                break;
            case(1):
                return total - (total * .1);
                break;
            case(2):
                return total - (total * .25);
                break;
            case(3):
                return total - (total * .35);
                break;
            case(4):
                return total - (total * .50);
                break;
            default:
                return 0;
        }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt("Please enter total bill.");
var newBill = calculateTotal(luckyNumber, totalBill);

alert("Your new bill is $" + newBill.toFixed(2));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

    /*
    TODO: make function to get input and check instead of doing it all in the if statement
    */

var wannaPlay = confirm("Would you like to enter a number?");

if (wannaPlay) {
    var num = Number(prompt("Awesome! Please enter a number."));

    if (isNaN(num)) {
        alert("Sorry, your input is not a number.");
    }
    else {
        alert("The number is " + evenOrOdd(num));
        alert("The number plus 100 is " + (num + 100));
        alert("The number is " + posOrNeg(num));
    }
}
else {
    alert("Okay, maybe we can play next time.");
}

//returns if input num is odd or even
//note that 0 is even (i googled it)
function evenOrOdd(num) {
    if (num % 2 === 1) {
        return "odd";
    }
    else {
        return "even";
    }
}

//returns if num is positive, negative, or neither
function posOrNeg(num) {
    if (num === 0) {
        return "neither negative or positive";
    }
    else if (num > 0) {
        return "positive";
    }
    else {
        return "negative";
    }
}
