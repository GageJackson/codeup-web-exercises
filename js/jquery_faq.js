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

  $(".toggle-best-facts").click(function (event) {
    event.preventDefault();
    $(".fun-facts").children().next().next().next().css("background", "yellow");
  });
  $("h3").click(function (event) {
    event.preventDefault();
    $(this).next().css("font-weight", "bold");
  });
  $("li").click(function (event) {
    event.preventDefault();
    $(this).parent().parent().css("color", "#00f");
  });

  let galleryArray = [
    "assets/images/ipad.jpg",
    "assets/images/head.jpg",
    "assets/images/mobile-phone.jpg",
  ];

  $("#btn-swap-1").click(function (event) {
    event.preventDefault();
    swapImages(0, 1);
  });

  $("#btn-swap-2").click(function (event) {
    event.preventDefault();
    let randomNumber = Math.floor(Math.random() * 2 + 1);
    if (randomNumber === 1) {
      //swap left (1&2)
      swapImages(0, 1);
    } else {
      //swap right (2&3)
      swapImages(1, 2);
    }
  });

  $("#btn-swap-3").click(function (event) {
    event.preventDefault();
    swapImages(1, 2);
  });

  function swapImages(imageNumA, imageNumB) {
    let imageA = galleryArray[imageNumA];
    let imageB = galleryArray[imageNumB];
    galleryArray[imageNumA] = imageB;
    galleryArray[imageNumB] = imageA;

    $("#frame" + (imageNumA + 1)).html(
      '<img src="' + imageB + '" class="image" id="image-"+(imageNumA+1)/>'
    );
    $("#frame" + (imageNumB + 1)).html(
      '<img src="' + imageA + '" class="image" id="image-"+(imageNumB+1)/>'
    );
  }
});

/*
  $("#btn-swap-3").click(function (event) {
    event.preventDefault();
    let frame2GalleryImage = galleryArray[1];
    let frame3GalleryImage = galleryArray[2];
    galleryArray[1] = frame3GalleryImage;
    galleryArray[2] = frame2GalleryImage;
    $("#frame2").html(
      '<img src="' + frame3GalleryImage + '" class="image" id="image-2"/>'
    );
    $("#frame3").html(
      '<img src="' + frame2GalleryImage + '" class="image" id="image-3"/>'
    );
  });
   */
