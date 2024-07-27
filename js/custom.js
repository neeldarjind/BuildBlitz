$(function () {
  jQuery(window).scroll(function () {
    var windowpos = jQuery(window).scrollTop();
    if (windowpos > 60) {
      jQuery(".StagerDesignHeader").addClass("fixed-top");
    }
    if (windowpos < 60) {
      jQuery(".StagerDesignHeader").removeClass("fixed-top");
    }
  });
});

$(".btngroupsbtn").on("click", function () {
  var getID = $(this).attr("data-target");
  $(".card-container").hide();
  $(".card-container[data-id=" + getID + "]").show();
  $(".btngroupsbtn").removeClass("btnactive");
  $(this).addClass("btnactive");
});
// achievement script start
$(document).on("click", ".filter-button", function () {
  $(".filter-button").removeClass("active");
  $(".filter-button").removeClass("remove-border");
  $(this).addClass("active");
  $(".filter-button.active").prev().addClass("remove-border");
});

$(document).on("click", ".compatible1", function () {
  $(".filter").addClass("d-none");
  $(".compatible").removeClass("d-none");
});

$(document).on("click", ".data-storage1", function () {
  $(".filter").addClass("d-none");
  $(".data-storage").removeClass("d-none");
});

$(document).on("click", ".corporative-service1", function () {
  $(".filter").addClass("d-none");
  $(".corporative-service").removeClass("d-none");
});

$(document).on("click", ".accessible1", function () {
  $(".filter").addClass("d-none");
  $(".accessible").removeClass("d-none");
});
// achievement script end

// owl carousel start
let owl = $('#staff');
owl.owlCarousel({
  margin: 20,
  dots: true,
  loop: true,
  nav: true,
  navText: [
    "<i class='mdi mdi-arrow-left-thin'></i>",
    "<i class='mdi mdi-arrow-right-thin'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 1
    },
    1000: {
      items: 1
    },
    1200: {
      items: 1
    }
  }
});
// owl carousel end
