const audio = document.getElementById("audio");
const activar = document.getElementById("activar");

activar.addEventListener("click", () => {
  audio.play().then(() => {
    activar.style.display = "none";
    activar.style.pointerEvents = "none"; // ← CLAVE PARA PASAR PÁGINAS
  }).catch(err => {
    console.error("Audio bloqueado:", err);
  });
}, { once: true });

$(window).on("load", function () {

  const ancho = Math.min(window.innerWidth * 0.9, 400);
  const alto  = ancho * 1.4;

  $("#book").turn({
    width: ancho,
    height: alto,
    autoCenter: true
  });

});

