"use strict";

$(function () {
  $(".toggle-hidden").click(function (event) {
    event.preventDefault();
    $(".hidden").toggleClass("shown");
    console.log("button clicked");
  });

  $(".highlight").click(function (event) {
    event.preventDefault();
    $(this).toggleClass("highlighted");
  });
});
