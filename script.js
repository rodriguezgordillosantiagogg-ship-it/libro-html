const audio = document.getElementById("audio");
const activar = document.getElementById("activar");

activar.addEventListener("click", () => {
  audio.play()
    .then(() => {
      activar.style.display = "none"; // ← CLAVE
    })
    .catch(err => {
      console.error("Audio bloqueado:", err);
    });
}, { once: true });

$(window).on("load", function () {
  $("#book").turn({
    width: 320,
    height: 480,
    autoCenter: true
  });
});
