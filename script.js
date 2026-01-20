function configLibro() {
  let w = window.innerWidth;
  let h = window.innerHeight;

  if (w < 768) {
    return {
      width: w,
      height: h,
      display: "single"
    };
  } else {
    return {
      width: 900,
      height: 550,
      display: "double"
    };
  }
}

$(document).ready(function () {
  let cfg = configLibro();

  if ($("#book").length) {
    $("#book").turn({
      width: cfg.width,
      height: cfg.height,
      display: cfg.display,
      autoCenter: true
    });
  }

  $("#activar").on("click", function () {
    const audio = document.getElementById("musica");
    if (audio) {
      audio.play();
    }
    $("#activar").hide();
  });

  $(window).on("resize", function () {
    let newCfg = configLibro();
    $("#book").turn("size", newCfg.width, newCfg.height);
    $("#book").turn("display", newCfg.display);
  });
});
