let userPickedNumber = userPicksOddNumber();
breakAndContinue(userPickedNumber);
function breakAndContinue(pickedNumber) {
  console.log("Number to skip is: " + pickedNumber);
  for (let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
      continue;
    }
    if (i !== pickedNumber) {
      console.log("Here is an odd number: " + i);
    } else {
      console.log("Yikes! Skipping number: " + pickedNumber);
    }
  }
}

function userPicksOddNumber() {
  let pickedNumber = parseInt(prompt("Pick an odd number between 1 and 50!"));
  /**while (userPickedNumber % 2 !== 1) {
  userPickedNumber = parseInt(prompt("Pick an odd number between 1 and 50!"));
}*/
  for (let i = 0; i < 9001; i++) {
    if (pickedNumber % 2 === 1) {
      break;
    } else {
      pickedNumber = parseInt(
        prompt("Please pick an odd number between 1 and 50?")
      );
    }
  }
  console.log("work" + pickedNumber);
  return pickedNumber;
}
