function toggleDescription(id) {
  const dots = document.getElementById("dots-" + id);
  const moreText = document.getElementById("more-" + id);
  const btn = document.getElementById("btn-" + id);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btn.innerText = "Ler mais";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.innerText = "Mostrar menos";
  }
}
