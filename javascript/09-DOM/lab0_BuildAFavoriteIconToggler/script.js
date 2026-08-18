const buttons = document.querySelectorAll(".favorite-icon");

buttons.forEach(button => button.addEventListener("click", () => {
  const isFilled = button.classList.contains("filled");
  if (isFilled) {
    button.classList.remove("filled");
    button.innerHTML = "&#9825;";
  } else {
    button.classList.add("filled");
    button.innerHTML = "&#10084;";
  }
}));
