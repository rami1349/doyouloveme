const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Move the "No" button to a random spot (works with mouse and touch)
function moveNoButton(event) {
  if (event && event.cancelable) event.preventDefault();

  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton, { passive: false });
noBtn.addEventListener("click", moveNoButton); // fallback: "No" can never really be chosen

// "Yes" button: show heart loader, then the result
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play().catch(() => {});
  }, 3000);
});
