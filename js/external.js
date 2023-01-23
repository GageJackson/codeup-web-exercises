"use strict";

//Intro prompts and alerts
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
var usersFavoriteColor = prompt("What is your favorite color?");
alert("Great, " + usersFavoriteColor + " is my favorite color too!");


var daysRentingLittleMermaid = parseInt(prompt("How many days are you renting the 'Little Mermaid'?"));
var daysRentingBrotherBear = parseInt(prompt("How many days are you renting the 'Brother Bear'?"));
var daysRentingHercules = parseInt(prompt("How many days are you renting the 'Hercules'?"));
var dayRentalRate = 3;
var totalRentalCost = (daysRentingLittleMermaid + daysRentingBrotherBear + daysRentingHercules) * dayRentalRate;
alert("That will cost you: $" + totalRentalCost);

var googleHourlyPayRate = 400;
var facebookHourlyPayRate = 350;
var amazonHourlyPayRate = 380;

var googleHoursWorked = prompt("How many hours did you work at Google this week?");
var facebookHoursWorked = prompt("How many hours did you work at Facebook this week?");
var amazonHoursWorked = prompt("How many hours did you work at Amazon this week?");

var weeklyPay = (googleHourlyPayRate * googleHoursWorked) + (facebookHourlyPayRate * facebookHoursWorked) + (amazonHourlyPayRate * amazonHoursWorked);
alert("Great! You earned $" + weeklyPay + " this week!");

var classSize = Math.floor((Math.random() * 100) + 1);
var maxClassSize = 50;
var classIsFull = false;

if(classSize >= maxClassSize){
    classIsFull = true;
}
console.log(classSize);
var isScheduleConflict = confirm("Does this class conflict with your schedule?");
if(!classIsFull && !isScheduleConflict){
    alert("You are enrolled in the class!")
}
if(classIsFull){
    alert("There are too many students in this class. You are not enrolled.");
}
if(isScheduleConflict){
    alert("Maybe try again next semester!")
}

