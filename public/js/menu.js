$(".open-overlay").click(function () {
  let overlay_navigation = $(".overlay-navigation"),
    nav_item_1 = $("nav li:nth-of-type(1)"),
    nav_item_2 = $("nav li:nth-of-type(2)"),
    nav_item_3 = $("nav li:nth-of-type(3)"),
    nav_item_4 = $("nav li:nth-of-type(4)"),
    nav_item_5 = $("nav li:nth-of-type(5)"),
    nav_item_6 = $("nav li:nth-of-type(6)"),
    nav_item_7 = $("nav li:nth-of-type(7)"),
    nav_item_8 = $("nav li:nth-of-type(8)"),
    overlay_navigation2 = $(".overlay-navigation2"),
    nav_item2_1 = $("#navigation2 li:nth-of-type(1)"),
    nav_item2_2 = $("#navigation2 li:nth-of-type(2)"),
    nav_item2_3 = $("#navigation2 li:nth-of-type(3)"),
    top_bar = $(".bar-top"),
    middle_bar = $(".bar-middle"),
    bottom_bar = $(".bar-bottom");

  overlay_navigation.toggleClass("overlay-active");
  if (overlay_navigation.hasClass("overlay-active")) {
    top_bar.removeClass("animate-out-top-bar").addClass("animate-top-bar");
    middle_bar
      .removeClass("animate-out-middle-bar")
      .addClass("animate-middle-bar");
    bottom_bar
      .removeClass("animate-out-bottom-bar")
      .addClass("animate-bottom-bar");
    overlay_navigation
      .removeClass("overlay-slide-up")
      .addClass("overlay-slide-down");
    nav_item_1
      .removeClass("slide-in-nav-item-reverse")
      .addClass("slide-in-nav-item");
    nav_item_2
      .removeClass("slide-in-nav-item-delay-1-reverse")
      .addClass("slide-in-nav-item-delay-1");
    // PRODUCTS LAYOUT ON MENU
    nav_item_3
      .removeClass("slide-in-nav-item-delay-2-reverse")
      .addClass("slide-in-nav-item-delay-2");
    $("#products-menu").click(function () {
      overlay_navigation2.toggleClass("overlay-active2");
      if (overlay_navigation2.hasClass("overlay-active2")) {
        overlay_navigation2
          .removeClass("overlay-slide-up2")
          .addClass("overlay-slide-down2");
        nav_item2_1
          .removeClass("slide-in-nav-item-reverse2")
          .addClass("slide-in-nav-item2");
        nav_item2_2
          .removeClass("slide-in-nav-item-delay2-1-reverse")
          .addClass("slide-in-nav-item-delay2-1");
        nav_item2_3
          .removeClass("slide-in-nav-item-delay2-2-reverse")
          .addClass("slide-in-nav-item-delay2-2");
      }
    });
    // PRODUCTS LAYOUT ENDS
    nav_item_4
      .removeClass("slide-in-nav-item-delay-3-reverse")
      .addClass("slide-in-nav-item-delay-3");
    nav_item_5
      .removeClass("slide-in-nav-item-delay-4-reverse")
      .addClass("slide-in-nav-item-delay-4");
    nav_item_6
      .removeClass("slide-in-nav-item-delay-5-reverse")
      .addClass("slide-in-nav-item-delay-5");
    nav_item_7
      .removeClass("slide-in-nav-item-delay-6-reverse")
      .addClass("slide-in-nav-item-delay-6");
    nav_item_8
      .removeClass("slide-in-nav-item-delay-7-reverse")
      .addClass("slide-in-nav-item-delay-7");
  } else {
    overlay_navigation2
      .removeClass("overlay-slide-down2")
      .addClass("overlay-slide-up2");
    nav_item2_1
      .removeClass("slide-in-nav-item2")
      .addClass("slide-in-nav-item-reverse2");
    nav_item2_2
      .removeClass("slide-in-nav-item-delay2-1")
      .addClass("slide-in-nav-item-delay2-1-reverse");
    nav_item2_3
      .removeClass("slide-in-nav-item-delay2-2")
      .addClass("slide-in-nav-item-delay2-2-reverse");
    top_bar.removeClass("animate-top-bar").addClass("animate-out-top-bar");
    middle_bar
      .removeClass("animate-middle-bar")
      .addClass("animate-out-middle-bar");
    bottom_bar
      .removeClass("animate-bottom-bar")
      .addClass("animate-out-bottom-bar");
    overlay_navigation
      .removeClass("overlay-slide-down")
      .addClass("overlay-slide-up");
    nav_item_1
      .removeClass("slide-in-nav-item")
      .addClass("slide-in-nav-item-reverse");
    nav_item_2
      .removeClass("slide-in-nav-item-delay-1")
      .addClass("slide-in-nav-item-delay-1-reverse");
    nav_item_3
      .removeClass("slide-in-nav-item-delay-2")
      .addClass("slide-in-nav-item-delay-2-reverse");
    nav_item_4
      .removeClass("slide-in-nav-item-delay-3")
      .addClass("slide-in-nav-item-delay-3-reverse");
    nav_item_5
      .removeClass("slide-in-nav-item-delay-4")
      .addClass("slide-in-nav-item-delay-4-reverse");
    nav_item_6
      .removeClass("slide-in-nav-item-delay-5")
      .addClass("slide-in-nav-item-delay-5-reverse");
    nav_item_7
      .removeClass("slide-in-nav-item-delay-6")
      .addClass("slide-in-nav-item-delay-6-reverse");
    nav_item_8
      .removeClass("slide-in-nav-item-delay-7")
      .addClass("slide-in-nav-item-delay-7-reverse");
  }
});
