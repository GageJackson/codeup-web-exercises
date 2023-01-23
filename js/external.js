"use strict";

//Intro prompts and alerts
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
var usersFavoriteColor = prompt("What is your favorite color?");
alert("Great, " + usersFavoriteColor + " is my favorite color too!");

//Cost calculator for renting 3 predetermined movies at $3 / day each.
var daysRentingLittleMermaid = parseInt(
  prompt("How many days are you renting the 'Little Mermaid'?")
);
var daysRentingBrotherBear = parseInt(
  prompt("How many days are you renting the 'Brother Bear'?")
);
var daysRentingHercules = parseInt(
  prompt("How many days are you renting the 'Hercules'?")
);
var dayRentalRate = 3;

var totalRentalCost =
  (daysRentingLittleMermaid + daysRentingBrotherBear + daysRentingHercules) *
  dayRentalRate;
alert("That will cost you: $" + totalRentalCost);

//Weekly pay based on amount of hours worked per week
var googleHourlyPayRate = 400;
var facebookHourlyPayRate = 350;
var amazonHourlyPayRate = 380;

var googleHoursWorked = prompt(
  "How many hours did you work at Google this week?"
);
var facebookHoursWorked = prompt(
  "How many hours did you work at Facebook this week?"
);
var amazonHoursWorked = prompt(
  "How many hours did you work at Amazon this week?"
);

var weeklyPay =
  googleHourlyPayRate * googleHoursWorked +
  facebookHourlyPayRate * facebookHoursWorked +
  amazonHourlyPayRate * amazonHoursWorked;
alert("Great! You earned $" + weeklyPay + " this week!");

//Checks to see if user can take class based on randomly generated class size and a prompt if user can fit class in schedule
var classSize = Math.floor(Math.random() * 100 + 1);
var maxClassSize = 50;
var classIsFull = false;

if (classSize >= maxClassSize) {
  classIsFull = true;
}
console.log(classSize);
var isScheduleConflict = confirm(
  "Does this class conflict with your schedule?"
);
if (!classIsFull && !isScheduleConflict) {
  alert("You are enrolled in the class!");
}
if (classIsFull) {
  alert("There are too many students in this class. You are not enrolled.");
}
if (isScheduleConflict) {
  alert("Maybe try again next semester!");
}

//Asks user if they are a premium member and how many items they purchased in order to use a coupon
var isCouponValid = true;
var isPremiumMember = confirm("Are you a premium member?");
var itemsPurchased = parseInt(
  prompt("How many items are you purchasing today?")
);

if (isCouponValid && (isPremiumMember || itemsPurchased >= 2)) {
  alert("You can use the coupon!");
} else {
  alert("You cannot use the coupon...");
}
