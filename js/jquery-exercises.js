"use strict";

$(function () {
  // INSERT JAVASCRIPT CODE SAMPLE HERE
  var myAlert = $(".container").html();
  alert(myAlert);

  $("#aSectionId").css("border", "1px solid #F00");
  $(".codeUp").css("background-color", "#6159a9");

  $("h2").click(function (e) {
    $(this).css("font-size", "3em");
  });

  $("li").hover(
    function () {
      $(this).css("background-color", "#2b2b59");
      $(this).css("color", "#b6acd5");
    },
    function () {
      $(this).css("background-color", "#fff");
      $(this).css("color", "#000");
    }
  );
});
