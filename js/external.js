"use strict";

console.log("Hello from external Javascript");

alert("Welcome to my website!");

var favColor = prompt("What is your favorite color?");
alert("Great, " + favColor + " is my favorite color too!");

//first problem
var mermaidDays = prompt("How many days will you rent the little mermaid for?");
var bearDays = prompt("How many days will you rent brother bear for?");
var herculesDays = prompt("How many days will you rent hercules for?");
var pricePerDay = prompt("How much does it cost to rent a movie per day");
var totalCost = ((Number(mermaidDays) + Number(bearDays) + Number(herculesDays)) * Number(pricePerDay)).toFixed(2);
alert("Your total cost is $" + totalCost);

//second problem
var googleRate = prompt("What is the rate for Google?");
var amazonRate = prompt("What is the rate for Amazon?");
var facebookRate = prompt("What is the rate for Facebook?");
var googleHours = prompt("How many hours did you work for Google?");
var amazonHours = prompt("How many hours did you work for Amazon?");
var facebookHours = prompt("How many hours did you work for Facebook?");
var totalPay = ((googleHours * googleRate) + (amazonHours * amazonRate) + (facebookHours * facebookRate)).toFixed(2);
alert("Your total pay is $" + totalPay);

//third problem
var isFull = confirm("Is the class full?");
var conflicts = confirm("Does the class conflict with your schedule?");
var canJoin = (!isFull && !conflicts);
if (canJoin) {
    alert("You can join the class!");
}
else {
    alert("Sorry, you cannot join the class.");
}

//fourth problem
var userIsPremium = confirm("Are you a premium user?");
var expired = confirm("Has the offer expired?");
if (expired) {
    alert("Sorry, this offer has expired and cannot be applied.");
}
else {
    if (userIsPremium) {
        alert("The offer can be applied!");
    }
    else {
        var items = prompt("How many items are you buying?");
        if (items > 2) {
            alert("The offer can be applied!");
        }
        else {
            alert("You need to buy more than two items to apply the offer");
        }
    }
}