$(window).on("load", function () {

  const book = $("#book");

  book.turn({
    width: 800,
    height: 500,
    autoCenter: true
  });

  $("#next").on("click", function () {
    book.turn("next");
  });

  $("#prev").on("click", function () {
    book.turn("previous");
  });

});
