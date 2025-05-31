document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const customSelect = document.getElementById("customSelect");
  const selected = customSelect.querySelector(".selected");
  const options = customSelect.querySelector(".options");

  // Handle select dropdown toggle
  selected.addEventListener("click", () => {
    customSelect.classList.toggle("open");
  });

  // Handle select option click
options.querySelectorAll("div").forEach(option => {
  option.addEventListener("click", () => {
    const selectedText = selected.querySelector(".selected-text");
    selectedText.textContent = option.textContent; // ← This updates only the text span
    customSelect.classList.remove("open");
  });
});

  // Close dropdown if clicked outside
  document.addEventListener("click", function (e) {
    if (!customSelect.contains(e.target)) {
      customSelect.classList.remove("open");
    }
  });

  // Handle form reset to also reset custom select
form.addEventListener("reset", () => {
  setTimeout(() => {
    const selectedText = selected.querySelector(".selected-text");
    selectedText.textContent = "What can we help you with ?";
    customSelect.classList.remove("open");
  }, 0);
});
});
