(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  var text = document.querySelector(".theme-toggle-text");

  function applyTheme(theme) {
    root.dataset.theme = theme;

    if (button) {
      button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }

    if (text) {
      text.textContent = theme === "dark" ? "Dark" : "Light";
    }
  }

  applyTheme(root.dataset.theme || "light");

  if (!button) {
    return;
  }

  button.addEventListener("click", function () {
    var nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("reader-docs-theme", nextTheme);
    applyTheme(nextTheme);
  });
})();
