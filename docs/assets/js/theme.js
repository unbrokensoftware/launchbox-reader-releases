(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  var text = document.querySelector(".theme-toggle-text");

  function saveTheme(theme) {
    try {
      localStorage.setItem("reader-docs-theme", theme);
    } catch (error) {
      // Theme still works for this page view when storage is unavailable.
    }
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;

    if (button) {
      button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
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
    saveTheme(nextTheme);
    applyTheme(nextTheme);
  });
})();
