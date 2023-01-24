//This function takes a user input and generates a multiple from 1 to 10 and displays in console.log
function showMultiplicationTable(number) {
  for (let i = 0; i < 10; i++) {
    let currentMultiple = i + 1;
    console.log(
      number + " X " + currentMultiple + " = " + currentMultiple * number
    );
  }
}

var userNumber = parseFloat(
  prompt("Pick a number and I will give you the multiples for it from 1-10!")
);
showMultiplicationTable(userNumber);

//This function generates 10 random numbers between 20 and 200, and will tell us if it's even or odd.
function doThing() {
  for (let i = 0; i < 10; i++) {
    let generatedNumber = numberGenerator();
    let evenOrOdd = isEvenOrOdd(generatedNumber);
    console.log(generatedNumber + evenOrOdd);
  }
}
function numberGenerator() {
  return Math.floor(Math.random() * 200 + 20);
}
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return " is even";
  } else {
    return " is odd";
  }
}

doThing();

function numberTree() {
  for (let i = 0; i < 9; i++) {
    let numberLine = "";
    for (let j = 0; j < i + 1; j++) {
      numberLine += i + 1;
    }
    console.log(numberLine);
  }
}
numberTree();

function hundredToFive() {
  for (let i = 100; i > 0; i -= 5) {
    console.log(i);
  }
}
hundredToFive();
