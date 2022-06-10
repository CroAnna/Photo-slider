$(document).ready(function () {
  $("#left").click(function () {
    $(".slike").animate({ left: "+=175px" });
  });

  $("#right").click(function () {
    $(".slike").animate({ left: "-=175px" });
  });
});
