export function Rater(ratingElement) {
  const stars = ratingElement.querySelectorAll(".star");

  const setRating = (ev) => {
    ratingElement.setAttribute(
      "data-rating",
      ev.currentTarget.getAttribute("data-value")
    );
    resetRating();
  };

  const ratingHover = (ev) => {
    const currentHover = ev.currentTarget.getAttribute("data-value");
    highlightRating(currentHover);
  };

  const resetRating = (ev) => {
    const currentRating = ratingElement.getAttribute("data-rating");
    highlightRating(currentRating);
  };

  const highlightRating = (rating) => {
    stars.forEach((star) => {
      star.style.color =
        rating >= star.getAttribute("data-value") ? "yellow" : "gray";
    });
  };

  resetRating();

  stars.forEach((star) => {
    star.addEventListener("click", setRating);
    // star.addEventListener("mouseover", ratingHover);
  });
}
