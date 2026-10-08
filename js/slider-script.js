function initSlider(slider) {
  const cards = [...slider.children];
  const dots = slider.parentElement.querySelector(".dots");
  if (!cards.length || !dots) {
    return;
  }

  cards.forEach((card, index) => {
    const dot = document.createElement("button");
    dot.className = index === 0 ? "dot active" : "dot";
    dot.addEventListener("click", () => {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    });
    dots.appendChild(dot);
  });
  slider.addEventListener(
    "scroll",
    () => {
      const gap = parseFloat(getComputedStyle(slider).gap) || 0;
      const width = cards[0].offsetWidth + gap;
      const index = Math.round(slider.scrollLeft / width);
      dots.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    },
    {
      passive: true,
    },
  );
}

document.querySelectorAll("[data-slider]").forEach(initSlider);
const reviewSlider = document.querySelector(".reviews-slider");
const reviewPrev = document.querySelector(".review-prev");
const reviewNext = document.querySelector(".review-next");
if (reviewSlider && reviewPrev && reviewNext) {
  const reviews = [...reviewSlider.children];
  let currentIndex = 0;
  function updateReviewButtons() {
    reviewPrev.classList.toggle("disabled", currentIndex === 0);
    reviewNext.classList.toggle(
      "disabled",
      currentIndex === reviews.length - 1,
    );
  }
  function moveReview(index) {
    currentIndex = Math.max(0, Math.min(index, reviews.length - 1));
    reviews[currentIndex].scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
    updateReviewButtons();
  }

  reviewPrev.addEventListener("click", () => {
    moveReview(currentIndex - 1);
  });
  reviewNext.addEventListener("click", () => {
    moveReview(currentIndex + 1);
  });

  reviewSlider.addEventListener(
    "scroll",
    () => {
      const width = reviewSlider.clientWidth;
      if (!width) {
        return;
      }
      currentIndex = Math.round(reviewSlider.scrollLeft / width);
      updateReviewButtons();
    },
    {
      passive: true,
    },
  );
  updateReviewButtons();
}
