$(window).on("load", function () {

  setTimeout(function () {

    $("#book").turn({
      width: 800,
      height: 500,
      autoCenter: true
    });

  }, 100);

  $("#next").click(function () {
    $("#book").turn("next");
  });

  $("#prev").click(function () {
    $("#book").turn("previous");
  });

});
