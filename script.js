const audio = document.getElementById("audio");
const activar = document.getElementById("activar");
const mensaje = document.querySelector(".mensaje");

activar.addEventListener("click", () => {
  audio.play().then(() => {
    mensaje.style.display = "none";
    activar.remove();
  }).catch(err => {
    console.error("Bloqueado:", err);
  });
}, { once: true });
