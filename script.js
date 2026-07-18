const suggestButton = document.querySelector("[data-suggest-event]");
const suggestionNote = document.querySelector("#suggestion-note");

suggestButton.addEventListener("click", () => {
  suggestionNote.hidden = !suggestionNote.hidden;
});
