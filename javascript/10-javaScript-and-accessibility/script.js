const themes = [
  {
    name: "light",
    message: "Nothing special - Light theme is on!"
  },
  {
    name: "ocean",
    message: "Let's dive in - Ocean theme is on!",
    dark: true
  },
  {
    name: "sunset",
    message: "What a romantic scene - Sunset theme is on!",
    dark: true
  },
  {
    name: "cloudy",
    message: "Cloudy day always makes me blue - Cloudy theme is on!"
  }
];

const themeSwitcherBtn = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const menuItems = document.querySelectorAll("[role='menuitem']");
const body = document.querySelector("body");
const ariaLiveEl = document.querySelector("[aria-live='polite']");

// ["theme-light", "theme-ocean", ...]
const menuItemsTexts = [];
menuItems.forEach(item => menuItemsTexts.push(item.id));

themeSwitcherBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  const currentStatus = themeDropdown.hidden;
  themeDropdown.hidden = !currentStatus;
  themeSwitcherBtn.ariaExpanded = `${currentStatus}`;
});

menuItems.forEach(item => item.addEventListener("click", () => {
  body.classList.remove(...menuItemsTexts);
  body.classList.add(item.id);
  const theme = themes.filter(theme => theme.name === item.textContent.toLowerCase())[0];
  ariaLiveEl.textContent = theme.message;
  ariaLiveEl.style.color = theme.dark && theme.dark === true ? "white" : "black";
}));

body.addEventListener("click", () => {
  themeDropdown.hidden = true;
  themeSwitcherBtn.ariaExpanded = "false";
});
