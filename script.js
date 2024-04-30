document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("area");
  const save = document.getElementById("save");
  const bold = document.getElementById("bold");
  const italic = document.getElementById("italic");
  const underline = document.getElementById("underline");
  save.addEventListener("click", () => {
    localStorage.setItem("save", text.value);
    console.log(localStorage.getItem("save"));
  })
  function load() {
    let local = localStorage.getItem("save");
    if (local){
      text.value = local;
      console.log(local);
    }
  }
  load();
})