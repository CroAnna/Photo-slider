$(document).ready(function () {
  let counter = 0;
  let totalWidth = 0;
  hideStart();
  $("#left").click(clickLeft);
  $("#right").click(clickRight);

  function clickLeft() {
    if (counter <= 0) {
      totalWidth = 0;
      for (let i = 1; i <= 7; i++) {
        totalWidth += $(`.sl${i}`).width();
      }
      $(".images").animate({ left: `+=${$(`.sl8`).width() + 30}px` });
      movementTimeout("left");
      counter = 7;
      return;
    }

    let widthMovement = $(`.sl${counter}`).width() + 20;
    $(".images").animate({ left: `+=${widthMovement}px` });
    counter--;
    $(".arrow-left").attr("src", "Assets/arrow-gray-left.png");
    arrowTimeout("left");
  }

  function clickRight() {
    if (counter >= 7) {
      totalWidth = 0;
      for (let i = 2; i <= 8; i++) {
        totalWidth += $(`.sl${i}`).width();
      }
      $(".images").animate({ left: `-=${$(`.sl8`).width() + 20}px` });
      movementTimeout("right");
      counter = 0;
      return;
    }
    let widthMovement = $(`.sl${counter + 1}`).width() + 20;
    $(".images").animate({ left: `-=${widthMovement}px` });
    counter++;
    $(".arrow-right").attr("src", "Assets/arrow-gray-right.png");
    arrowTimeout("right");
  }

  function arrowTimeout(direction) {
    setTimeout(function () {
      $(`.arrow-${direction}`).attr(
        "src",
        `Assets/arrow-blue-${direction}.png`
      );
    }, 300);
  }

  function movementTimeout(direction) {
    if (direction == "right") {
      setTimeout(function () {
        $(".images").css({
          left:
            $(".images").position().left +
            totalWidth +
            110 +
            $(`.sl1`).width() +
            "px",
        });
      }, 500);
    } else {
      setTimeout(function () {
        console.log(totalWidth);
        $(".images").css({
          left:
            $(".images").position().left -
            totalWidth +
            //-200 -
            -83 -
            // +110 +
            $(`.sl1`).width() +
            "px",
        });
      }, 500);
    }
  }

  function hideStart() {
    $(".images").css({
      right: $(`.sl8`).width() + $(`.sl7`).width() + 40 + "px",
    });
  }
});
