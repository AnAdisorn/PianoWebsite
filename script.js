const filterButtons = document.querySelectorAll("[data-filter]");
const artistCards = document.querySelectorAll(".artist-card");
const artistSearch = document.querySelector("#artist-search");
const emptyState = document.querySelector("#empty-state");
const submissionForm = document.querySelector(".submission-form");
const profileButtons = document.querySelectorAll("[data-profile-target]");

const activeFilters = {
  relationship: "all",
  discipline: "all",
};

function applyArtistFilters() {
  const query = artistSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  artistCards.forEach((card) => {
    const matchesRelationship =
      activeFilters.relationship === "all" || card.dataset.relationship === activeFilters.relationship;
    const matchesDiscipline = activeFilters.discipline === "all" || card.dataset.discipline === activeFilters.discipline;
    const matchesSearch = query === "" || card.dataset.search.includes(query);
    const shouldShow = matchesRelationship && matchesDiscipline && matchesSearch;

    card.classList.toggle("is-hidden", !shouldShow);
    if (shouldShow) visibleCount += 1;
  });

  emptyState.hidden = visibleCount !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.dataset.filterGroup;
    const filter = button.dataset.filter;

    activeFilters[group] = filter;

    filterButtons
      .forEach((item) => {
        if (item.dataset.filterGroup === group) item.classList.remove("is-active");
      });
    button.classList.add("is-active");
    applyArtistFilters();
  });
});

artistSearch.addEventListener("input", applyArtistFilters);

profileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const profile = document.getElementById(button.dataset.profileTarget);
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    profile.hidden = isExpanded;
    button.setAttribute("aria-expanded", String(!isExpanded));
    button.textContent = isExpanded ? "View profile" : "Hide profile";
  });
});

submissionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(submissionForm);
  const name = formData.get("name") || "this musician";
  const relationship = formData.get("relationship");
  const discipline = formData.get("discipline") || "";
  const focus = formData.get("focus") || "";

  window.location.href = `mailto:music@example.org?subject=Musician profile submission: ${encodeURIComponent(
    name
  )}&body=${encodeURIComponent(
    `Name: ${name}\nInstrument or voice type: ${discipline}\nRelationship: ${relationship}\nProfile link: ${
      formData.get("profile") || ""
    }\nShort focus: ${focus}`
  )}`;
});
