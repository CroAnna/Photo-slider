let brojac = 0;
let sirinaSlika = $(".slike").width();
// console.log(`sirinaSlika: ${sirinaSlika}`);
// console.log(`trenutni: ${brojac}`);

$(document).ready(function () {
  $("#left").click(function () {
    console.log(`brojac na pocetku: ${brojac}`);
    if (brojac <= 0) {
      brojac = 0;
      // console.log("nemrem");
      return;
    }

    let sirinaZaPomak = $(`.sl${brojac}`).width() + 20; // gleda se prethodna slika
    // console.log(`sirina za pomak: ${sirinaZaPomak}`);
    $(".slike").animate({ left: `+=${sirinaZaPomak}px` });

    brojac--;
    // console.log(`brojac malo poslije: ${brojac}`);
    $(".arrow-left").attr("src", "Assets/arrow-gray-left.png");
    odgoda("left");
  });

  $("#right").click(function () {
    // console.log(`brojac na pocetku: ${brojac}`);
    if (brojac >= 7) {
      brojac = 7;
      // console.log("nemrem");
      return;
    }

    let sirinaZaPomak = $(`.sl${brojac + 1}`).width() + 20; // 20px = margin svake slike, gleda se trenutna slika
    // console.log(sirinaZaPomak);
    $(".slike").animate({ left: `-=${sirinaZaPomak}px` });
    // $(".slike").animate({ left: "-=175px" });
    brojac++;
    // console.log(`brojac malo poslije: ${brojac}`);
    $(".arrow-right").attr("src", "Assets/arrow-gray-right.png");
    odgoda("right");
  });
});

function odgoda(strana) {
  setTimeout(function () {
    $(`.arrow-${strana}`).attr("src", `Assets/arrow-blue-${strana}.png`);
  }, 300);
}
