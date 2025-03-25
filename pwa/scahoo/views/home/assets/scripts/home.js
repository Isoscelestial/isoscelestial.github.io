// --- COLOR SCHEME ---

document.querySelectorAll("#color-scheme-switcher").forEach((element) => {
  element.addEventListener("click", cycleColorMode);
});

document.querySelectorAll("body").forEach((element) => {
  element.addEventListener("load", refreshColorScheme());
  element.addEventListener("load", enableTransitions());
});


// --- ENABLE TRANSITIONS ON BODY CHILDREN ---

function enableTransitions() {
  setTimeout(() => {
    document.querySelectorAll(".stop-transitions").forEach((element) => {
      element.classList.remove("stop-transitions");
    });
  }, 10);
}