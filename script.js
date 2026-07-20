const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll("[data-fund-card]").forEach((card) => {
  const raised = Number(card.dataset.raised) || 0;
  const goal = Number(card.dataset.goal) || 0;
  const percent = goal > 0 ? Math.min(100, Math.round((raised / goal) * 100)) : 0;

  const percentEl = card.querySelector("[data-fund-percent]");
  const barEl = card.querySelector("[data-fund-bar]");
  const detailEl = card.querySelector("[data-fund-detail]");

  const formatEuro = (value) => `€${value.toLocaleString("en-IE")}`;

  if (percentEl) percentEl.textContent = `${percent}%`;
  if (barEl) barEl.style.width = `${percent}%`;
  if (detailEl) detailEl.textContent = `${formatEuro(raised)} raised of ${formatEuro(goal)} goal.`;
});

document.querySelectorAll("[data-slideshow]").forEach((slideshow) => {
  const track = slideshow.querySelector(".event-track");
  const slides = Array.from(slideshow.querySelectorAll(".event-card"));
  const dotsContainer = slideshow.querySelector(".slideshow-dots");
  const previousButton = slideshow.querySelector("[data-slide-prev]");
  const nextButton = slideshow.querySelector("[data-slide-next]");

  if (!track || !dotsContainer || slides.length === 0) {
    return;
  }

  let currentSlide = 0;
  let timerId;

  dotsContainer.textContent = "";

  const dots = slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.className = "slide-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Show slide ${index + 1}`);
    dotsContainer.append(dot);
    return dot;
  });

  const showSlide = (nextSlide) => {
    currentSlide = (nextSlide + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
      const isActive = index === currentSlide;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  const stopSlideshow = () => {
    window.clearInterval(timerId);
  };

  const startSlideshow = () => {
    if (prefersReducedMotion || slides.length < 2) {
      return;
    }

    stopSlideshow();
    timerId = window.setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5200);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopSlideshow();
      showSlide(index);
      startSlideshow();
    });
  });

  if (previousButton) {
    previousButton.addEventListener("click", () => {
      stopSlideshow();
      showSlide(currentSlide - 1);
      startSlideshow();
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      stopSlideshow();
      showSlide(currentSlide + 1);
      startSlideshow();
    });
  }

  slideshow.addEventListener("mouseenter", stopSlideshow);
  slideshow.addEventListener("mouseleave", startSlideshow);
  slideshow.addEventListener("focusin", stopSlideshow);
  slideshow.addEventListener("focusout", startSlideshow);

  showSlide(0);
  startSlideshow();
});
