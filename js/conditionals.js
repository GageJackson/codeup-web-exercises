"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
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
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
//console.log(randomColor);

function analyzeColor(color) {
  if (color === "red") {
    return "Fire trucks are red";
  } else if (color === "orange") {
    return "Orange you glad I didn't say banana?";
  } else if (color === "yellow") {
    return "Hello mellow yellow fellow";
  } else if (color === "green") {
    return "Green bean money machine";
  } else if (color === "blue") {
    return "I'm blue dabi di dabi di...";
  } else if (color === "indigo") {
    return "Made up color for sake of 7 colors...";
  } else if (color === "violet") {
    return "Violet, you're turning violet!";
  } else {
    return "I do not know anything about " + color;
  }
}
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
alert(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
/**
 * function analyzeColor(color) {
    switch (randomColor) {
      case "red":
        return("Fire trucks are red");

      case "orange":
        return("Orange you glad I didn't say banana?");

      case "yellow":
        return("Hello mellow yellow fellow");

      case "green":
        return("Green money is gross money...");

      case "blue":
        return("I'm blue dabi di dabi di...");

      case "indigo":
        return("Made up color for sake of 7 colors...");

      case "violet":
        return("Violet, you're turning violet!");

      default:
        return("I don't know anything about " + randomColor);

    }
 }
*/
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let userColor = prompt("Give me a basic color and I'll say something witty");
alert(analyzeColor(userColor.toLowerCase()));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
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
  let discount = 0;
  switch (luckyNum) {
    case 1:
      discount = 0.1;
      return total - discount * total;
    case 2:
      discount = 0.25;
      return total - discount * total;
    case 3:
      discount = 0.35;
      return total - discount * total;
    case 4:
      discount = 0.5;
      return total - discount * total;
    case 5:
      discount = 1;
      return total - discount * total;
    default:
      discount = 0;
      return total - discount * total;
  }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

const luckyNumber = Math.floor(Math.random() * 6);
let userTotalBill = parseFloat(
  prompt(
    "Hello, lucky diner! Please insert your bill total and see what discount you may reap!"
  )
);
console.log(luckyNumber);
alert(
  "Of your total bill, $" +
    userTotalBill +
    " you have to pay $" +
    calculateTotal(luckyNumber, userTotalBill)
);

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
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let userWantToEnterNumber = confirm("Would you like to enter a number?");
funNumberInfo(userWantToEnterNumber);
function funNumberInfo(userWantToEnterNumber) {
  if (userWantToEnterNumber) {
    let userNumber = parseFloat(prompt("Enter a number"));
    let checkedNumber = checkIfNumber(userNumber);
    evenOrOdd(checkedNumber);
    numberPlus100(checkedNumber);
    positiveOrNegativeNumber(checkedNumber);
  } else {
    alert("Okay, no fun for you");
  }
}

function evenOrOdd(number) {
  if (number % 2 === 0) {
    alert(number + ": is even!");
  } else {
    alert(number + ": is odd!");
  }
}
function numberPlus100(number) {
  let plus100 = number + 100;
  alert("If  you add 100 to your number, you would get: " + plus100);
}
function positiveOrNegativeNumber(number) {
  if (number > 0) {
    alert(number + ": is positive!");
  } else {
    alert(number + ": is negative!");
  }
}
function checkIfNumber(number) {
  while (isNaN(number)) {
    alert(number + ": is not a number");
    number = parseFloat(prompt("Enter a number"));
  }
  alert(number + ": is a number");
  return number;
}
