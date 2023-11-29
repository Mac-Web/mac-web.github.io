document.addEventListener("DOMContentLoaded", function () {
  const wrap = document.getElementById("wrap");
  const bar = document.getElementById("sidebar");
  document.addEventListener("mousemove", function (event) {
    if (event.clientX <= 5 && bar.classList.contains("movingbar") !== true) {
      bar.classList.add("movingbar");
    }
  });

  document.addEventListener("click", function () {
    bar.classList.remove("movingbar");
  })

  wrap.addEventListener("click", function () {
    console.log("sl");
  });
});

document.addEventListener("click", function () {});
