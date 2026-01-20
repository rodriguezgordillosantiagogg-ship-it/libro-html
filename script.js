document.addEventListener("DOMContentLoaded", () => {

  const book = document.getElementById("book");

  const pageFlip = new St.PageFlip(book, {
    width: 400,
    height: 500,
    size: "fixed",
    showCover: true,
    maxShadowOpacity: 0.5
  });

  pageFlip.loadFromHTML(book.querySelectorAll(".page"));

  document.getElementById("next").onclick = () => pageFlip.flipNext();
  document.getElementById("prev").onclick = () => pageFlip.flipPrev();

});
