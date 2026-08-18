const textInput = document.getElementById("text-input");
const p = document.getElementById("char-count");

textInput.addEventListener("input", displayCharCount);

function displayCharCount(e) {
  textInput.value = e.target.value.slice(0, 50);
  const charCount = e.target.value.length;
  p.style.color = charCount === 50 ? "red" : "black";
  p.textContent = `Character Count: ${charCount}/50`;
}
