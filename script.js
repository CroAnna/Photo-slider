let brojac = 0;

$(document).ready(function () {
  $("#left").click(function () {
    $(".slike").animate({ left: "+=175px" });
    brojac--;
    console.log(brojac);
    $(".arrow-left").attr("src", "Assets/arrow-gray-left.png");
    odgoda("left");
  });

  $("#right").click(function () {
    $(".slike").animate({ left: "-=175px" });
    brojac++;
    $(".arrow-right").attr("src", "Assets/arrow-gray-right.png");
    odgoda("right");
  });
});

function odgoda(strana) {
  setTimeout(function () {
    $(`.arrow-${strana}`).attr("src", `Assets/arrow-blue-${strana}.png`);
  }, 300);
}
