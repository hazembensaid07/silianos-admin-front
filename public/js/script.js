// mobile offnavas triggerer for generic use
$("[data-trigger]").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  var offcanvas_id = $(this).attr("data-trigger");
  $(offcanvas_id).toggleClass("show");
  $("body").toggleClass("offcanvas-active");
  $(".screen-overlay").toggleClass("show");
});

$(".screen-overlay, .btn-close").click(function (e) {
  $(".screen-overlay").removeClass("show");
  $(".mobile-offcanvas, .show").removeClass("show");
  $("body").removeClass("offcanvas-active");
});

// minimize sideber on desktop

$(".btn-aside-minimize").on("click", function () {
  if (window.innerWidth < 768) {
    $("body").removeClass("aside-mini");
    $(".screen-overlay").removeClass("show");
    $(".navbar-aside").removeClass("show");
    $("body").removeClass("offcanvas-active");
  } else {
    // minimize sideber on desktop
    $("body").toggleClass("aside-mini");
  }
});
