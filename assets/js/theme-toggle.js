// assets/js/theme-toggle.js
(function () {
  const root = document.documentElement;
  const KEY = "theme";   // stored key in localStorage ("dark" | "light" | null)

  // 1️⃣ Apply any saved choice (so the site remembers user preference)
  const saved = localStorage.getItem(KEY);
  if (saved === "dark" || saved === "light") {
    root.setAttribute("data-theme", saved);
  }

  // 2️⃣ Define the toggle sequence: Auto → Dark → Light → Auto
  window.toggleTheme = function () {
    const current = root.getAttribute("data-theme"); // null | "dark" | "light"

    if (current === "dark") {
      // currently dark → switch to light
      root.setAttribute("data-theme", "light");
      localStorage.setItem(KEY, "light");
      console.log("Switched to LIGHT mode");
    } else if (current === "light") {
      // currently light → back to system default (auto)
      root.removeAttribute("data-theme");
      localStorage.removeItem(KEY);
      console.log("Switched to AUTO (system) mode");
    } else {
      // currently auto → switch to dark
      root.setAttribute("data-theme", "dark");
      localStorage.setItem(KEY, "dark");
      console.log("Switched to DARK mode");
    }
  };
})();
