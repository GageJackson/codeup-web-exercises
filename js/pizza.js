$(function () {
  $("#btn-next-to-cheese").click(function (event) {
    event.preventDefault();
    $("a[href='#nav-cheese-and-sauce']").tab("show");
  });
});
