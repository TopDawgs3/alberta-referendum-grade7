/* Classroom helpers: glossary filter + smooth nav highlight */
(function () {
  const input = document.getElementById("glossary-search");
  const items = document.querySelectorAll(".glossary-item");
  const empty = document.getElementById("glossary-empty");

  if (input && items.length) {
    input.addEventListener("input", function () {
      const q = input.value.trim().toLowerCase();
      let shown = 0;
      items.forEach(function (el) {
        const term = (el.getAttribute("data-term") || "").toLowerCase();
        const text = el.textContent.toLowerCase();
        const match = !q || term.includes(q) || text.includes(q);
        el.classList.toggle("hidden", !match);
        if (match) shown += 1;
      });
      if (empty) empty.hidden = shown > 0;
    });
  }

  // Collapse/expand all question columns on small screens is optional —
  // cards stay open by default for classroom projector use.
})();
