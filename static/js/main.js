$(document).ready(function () {
  swiper.autoplay.stop();
  //animation promo
  $(".promo-image").animate(
    {
      opacity: 0.2,
    },
    500,
    function () {
      $(".promo-image-text").animate(
        {
          marginLeft: 0,
        },
        1000,
        function () {
          $(".promo-image").addClass("promo-image-animation");
          $(".promo-button-container").addClass(
            "promo-button-container-active"
          );
          setTimeout(() => {
            swiper.slideNext();
            swiper.autoplay.start();
          }, 1500);
        }
      );
    }
  );

  // let textArr = {};

  // function elHeight(el, h) {
  //   let height = 0;
  //   trackEl = document.getElementsByClassName(el);
  //   for (let i = 0; i < trackEl.length; i++) {
  //     if (trackEl[i].clientHeight > height) {
  //       height = trackEl[i].clientHeight;
  //     }
  //     let text = trackEl[i].innerHTML;
  //     textArr[trackEl[i].getAttribute("person")] = text;
  //     // textArr.push(text);

      
  //   }
  //   if (h) {
  //     $(`.${el}`).css({ height: height + "px" });
  //   }

  //   $(`.${el}`).on("click", function () {
  //     this.innerHTML = textArr[this.getAttribute("person")];
  //   });
  // }

  // elHeight("slider-description", true);
  // elHeight("slide-description", false);

  // $(".swiper-button").on("click", changeDescription);

  // changeDescription();

  // function changeDescription() {
  //   $(".slider-description").css({ display: "none" });
  //   document.getElementsByClassName("slider-description")[
  //     swiper2.realIndex 
  //   ].style.display = "block";
  // }

  $(".down-bottom").click(function () {
    swiper.slideTo($(".promo").index(), 0, false);
  });

  $("#show_switcher").on("click", function () {
    if ($("#password").attr("type") == "password") {
      // $(this).html('Скрыть пароль');
      $("#password").attr("type", "text");
    } else {
      // $(this).html('Показать пароль');
      $("#password").attr("type", "password");
    }
    return false;
  });

  $("form").submit(function (event) {
    event.preventDefault();

    val("login_id", "login_id_label");
    val("password", "password_label");

    function val(el, chang) {
      if (!$(`#${el}`).val()) {
        $(`#${chang}`).addClass("warning");
      } else {
        $(`#${chang}`).removeClass("warning");
        $(".massage").text("Invalid Login Details");
      }
    }
  });
});
