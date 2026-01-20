function iniciarLibro() {
  const ancho = window.innerWidth < 600
    ? window.innerWidth * 0.9
    : 800;

  const alto = window.innerWidth < 600
    ? window.innerHeight * 0.6
    : 500;

  if ($("#book").data("turn")) {
    $("#book").turn("destroy");
  }

  $("#book").turn({
    width: ancho,
    height: alto,
    autoCenter: true
  });
}

window.addEventListener("load", iniciarLibro);
window.addEventListener("resize", iniciarLibro);
