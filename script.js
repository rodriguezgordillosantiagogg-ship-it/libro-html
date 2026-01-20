function tamañoLibro() {
  let w = window.innerWidth;
  let h = window.innerHeight;

  if (w < 768) {
    return {
      width: w * 0.9,
      height: h * 0.65
    };
  } else {
    return {
      width: 800,
      height: 500
    };
  }
}

$(document).ready(function () {

  let size = tamañoLibro();

  $("#book").turn({
    width: size.width,
    height: size.height,
    autoCenter: true
  });

  // Ajustar tamaño al cambiar pantalla
  $(window).on("resize", function () {
    let size = tamañoLibro();
    $("#book").turn("size", size.width, size.height);
  });

  /* =========================
     PASAR PÁGINA CON CLIC
     ========================= */
  $("#book").on("click", function (e) {
    let x = e.pageX;
    let mitad = $(window).width() / 2;

    if (x > mitad) {
      $("#book").turn("next");
    } else {
      $("#book").turn("previous");
    }
  });

  /* =========================
     ACTIVAR MÚSICA (FIJO)
     ========================= */
  let musica = document.getElementById("musica");
  musica.volume = 0.7;

  function iniciarMusica() {
    musica.play().catch(() => {});
    document.removeEventListener("click", iniciarMusica);
    document.removeEventListener("touchstart", iniciarMusica);
  }

  document.addEventListener("click", iniciarMusica);
  document.addEventListener("touchstart", iniciarMusica);

});
