let brojac = 0;
let ukupnaSirina = 0;

$(document).ready(function () {
  sakrijPocetno();
  $("#left").click(klikLijevo);
  $("#right").click(klikDesno);
});

function klikLijevo() {
  if (brojac <= 0) {
    ukupnaSirina = 0;
    for (let i = 1; i <= 7; i++) {
      ukupnaSirina += $(`.sl${i}`).width();
    }
    $(".slike").animate({ left: `+=${$(`.sl8`).width() + 30}px` });
    odgodaPomicanja("lijevo");
    brojac = 7;
    return;
  }

  let sirinaZaPomak = $(`.sl${brojac}`).width() + 30;
  $(".slike").animate({ left: `+=${sirinaZaPomak}px` });
  brojac--;
  $(".arrow-left").attr("src", "Assets/arrow-gray-left.png");
  odgodaStrelice("left");
}

function klikDesno() {
  if (brojac >= 7) {
    ukupnaSirina = 0;
    for (let i = 2; i <= 8; i++) {
      ukupnaSirina += $(`.sl${i}`).width();
    }
    $(".slike").animate({ left: `-=${$(`.sl8`).width() + 30}px` });
    odgodaPomicanja("desno");
    brojac = 0;
    return;
  }
  let sirinaZaPomak = $(`.sl${brojac + 1}`).width() + 30;
  $(".slike").animate({ left: `-=${sirinaZaPomak}px` });
  brojac++;
  $(".arrow-right").attr("src", "Assets/arrow-gray-right.png");
  odgodaStrelice("right");
}

function odgodaStrelice(smjer) {
  setTimeout(function () {
    $(`.arrow-${smjer}`).attr("src", `Assets/arrow-blue-${smjer}.png`);
  }, 300);
}

function odgodaPomicanja(smjer) {
  if (smjer == "desno") {
    setTimeout(function () {
      $(".slike").css({
        left:
          $(".slike").position().left +
          ukupnaSirina +
          150 +
          $(`.sl1`).width() +
          "px",
      });
    }, 500);
  } else {
    setTimeout(function () {
      $(".slike").css({
        left:
          $(".slike").position().left -
          ukupnaSirina +
          //-200 -
          -180 -
          $(`.sl1`).width() +
          "px",
      });
    }, 500);
  }
}

function sakrijPocetno() {
  $(".slike").css({
    right: $(`.sl8`).width() + $(`.sl7`).width() + 60 + "px",
  });
}
