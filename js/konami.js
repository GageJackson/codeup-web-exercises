"use strict";
$(function () {
  // INSERT JAVASCRIPT CODE SAMPLE HERE
  let pressedKeys = [];
  $(document).keyup(function (event) {
    console.log(event.keyCode);
    if (event.keyCode === 13) {
      console.log(pressedKeys);
      checkSecretCode(pressedKeys);
      pressedKeys = [];
    } else {
      pressedKeys.push(event.keyCode);
    }
  });

  function checkSecretCode(codeArray) {
    const correctCode = [38, 38, 40, 40, 37, 39, 37, 39, 65, 66];
    if (codeArray.length <= 0) {
      console.log("nope");
      return;
    }
    for (let i = 0; i < codeArray.length; i++) {
      if (codeArray[i] !== correctCode[i]) {
        alert("That's not the secret code!");
        return;
      } else {
        console.log("Combo x " + [i] + "!");
      }
    }
    $("#winningText").html("YAAAAAAAAAAAAAAAY!");
    $("#winningText").css(
      "background-image",
      "linear-gradient(to bottom right, #ff7d57, #F44B6C)"
    );

    //alert("You're so cool!");
  }
});

/*
up:38
down:40
left:37
right:39
a:65
b:66
enter:13
 */
