/* ===== AUDIO + DISCO ===== */
const audio = document.getElementById("audio");
const activar = document.getElementById("activar");
const disco = document.querySelector(".disco");

activar.addEventListener("click", () => {
  audio.play().then(() => {
    activar.remove();
    disco.classList.add("girando");
  }).catch(err => {
    console.error("Audio bloqueado:", err);
  });
}, { once: true });

/* ===== LIBRO ===== */
$(window).on("load", function () {
  $("#book").turn({
    width: 320,
    height: 480,
    autoCenter: true
  });
});
