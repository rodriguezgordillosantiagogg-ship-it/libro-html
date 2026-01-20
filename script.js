function tamañoLibro() {
  let anchoPantalla = window.innerWidth;
  let altoPantalla = window.innerHeight;

  let anchoLibro, altoLibro;

  if (anchoPantalla < 768) {
    // Celular
    anchoLibro = anchoPantalla * 0.9;
    altoLibro = altoPantalla * 0.7;
  } else {
    // PC
    anchoLibro = 800;
    altoLibro = 500;
  }

  return { width: anchoLibro, height: altoLibro };
}

$(document).ready(function () {

  let size = tamañoLibro();

  $("#book").turn({
    width: size.width,
    height: size.height,
    autoCenter: true
  });

  // Recalcular al cambiar tamaño (rotar móvil, etc.)
  $(window).on("resize", function () {
    let size = tamañoLibro();
    $("#book").turn("size", size.width, size.height);
  });

  // Activar música
  $("#activar").on("click touchstart", function () {
    document.getElementById("musica").play();
    $(this).fadeOut();
  });

});
