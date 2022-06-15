let brojac = 0;
let ukupnaSirina = 0;
let sirinaSlika = $(".slike").width();
console.log($(`.sl8`).width());
console.log("khm");

console.log(`sirinaSlika: ${sirinaSlika}`);
console.log(`trenutni: ${brojac}`);

$(document).ready(function () {
  $("#left").click(function () {
    console.log(`brojac na pocetku: ${brojac}`);
    if (brojac <= 0) {
      brojac = 0;
      // console.log("nemrem");
      return;
    }

    let sirinaZaPomak = $(`.sl${brojac}`).width() + 20; // gleda se prethodna slika
    console.log(`sirina za pomak: ${sirinaZaPomak}`);
    $(".slike").animate({ left: `+=${sirinaZaPomak}px` });

    brojac--;
    console.log(`brojac malo poslije: ${brojac}`);
    $(".arrow-left").attr("src", "Assets/arrow-gray-left.png");
    odgoda("left");
  });

  $("#right").click(function () {
    console.log(`brojac na pocetku: ${brojac}`);
    if (brojac >= 7) {
      ukupnaSirina = 0;
      for (let i = 2; i <= 8; i++) {
        // il 8
        // ukupna sirina za povratak
        console.log($(`.sl${i}`).width());
        console.log(`ukupna sirina: ${ukupnaSirina}`);

        ukupnaSirina += $(`.sl${i}`).width();
      }
      console.log(`ukupna sirina: ${ukupnaSirina}`);

      console.log("sad se vrati na pocetak");
      // $(".slike").css({
      //   left: $(".slike").position().left + ukupnaSirina + 180 + "px",
      // });

      $(".slike").animate({ left: `-=${$(`.sl8`).width() + 20}px` });

      odgodaPomaka();
      brojac = 0;
      console.log("broajc vracen na 0");
      return;
    }

    let sirinaZaPomak = $(`.sl${brojac + 1}`).width() + 20; // 20px = margin svake slike, gleda se trenutna slika
    console.log(sirinaZaPomak);
    $(".slike").animate({ left: `-=${sirinaZaPomak}px` });
    brojac++;
    console.log(`brojac malo poslije: ${brojac}`);
    $(".arrow-right").attr("src", "Assets/arrow-gray-right.png");
    odgoda("right");
  });
});

function odgoda(strana) {
  setTimeout(function () {
    $(`.arrow-${strana}`).attr("src", `Assets/arrow-blue-${strana}.png`);
  }, 300);
}

function odgodaPomaka() {
  setTimeout(function () {
    $(".slike").css({
      left:
        $(".slike").position().left +
        ukupnaSirina +
        200 +
        $(`.sl8`).width() +
        "px",
    });
  }, 500);
}
