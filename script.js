const filterButtons = document.querySelectorAll("[data-filter]");
const artistCards = document.querySelectorAll(".artist-card");
const submissionForm = document.querySelector(".submission-form");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    artistCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

submissionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(submissionForm);
  const name = formData.get("name") || "this musician";
  const relationship = formData.get("relationship");

  window.location.href = `mailto:music@example.org?subject=Musician profile submission: ${encodeURIComponent(
    name
  )}&body=${encodeURIComponent(`Name: ${name}\nRelationship: ${relationship}\nProfile link: ${formData.get("profile") || ""}`)}`;
});
