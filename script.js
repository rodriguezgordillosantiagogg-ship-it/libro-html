$(window).on("load", function () {

  const book = $("#book");

  book.turn({
    width: 800,
    height: 500,
    autoCenter: true,
    display: "double"
  });

  $("#next").on("click", function () {
    book.turn("next");
  });

  $("#prev").on("click", function () {
    book.turn("previous");
  });

});
