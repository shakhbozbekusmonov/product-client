var elModeBtn = document.querySelector(".mode-btn");
var elResourcesModeIcon = document.querySelector(".resources-mode-icon")

elMenuBtn.addEventListener("click", function () {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");

    elResourcesModeIcon.src = "./asstes/icons/resources-arrow.svg";
  } else {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");

    elResourcesModeIcon.src = "./asstes/icons/resources-arrow-dark.svg";
  }
});

localStorage.removeItem("theme");
