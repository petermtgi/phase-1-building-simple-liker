// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Select the error modal and hide it initially
const errorModal = document.getElementById("modal");
errorModal.classList.add("hidden");

// Select all like buttons
const hearts = document.querySelectorAll(".like-glyph");

// Function to handle heart click events
function handleHeartClick(event) {
  const heart = event.target;

  // Simulating server request
  mimicServerCall()
    .then(() => {
      // Toggle between full and empty heart
      if (heart.textContent === EMPTY_HEART) {
        heart.textContent = FULL_HEART;
        heart.classList.add("activated-heart");
      } else {
        heart.textContent = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      }
    })
    .catch((error) => {
      // Show the error modal with message
      errorModal.classList.remove("hidden");
      errorModal.querySelector("#modal-message").textContent = error;

      // Hide the error modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add("hidden");
      }, 3000);
    });
}

// Attach click event listeners to all hearts
hearts.forEach((heart) => {
  heart.addEventListener("click", handleHeartClick);
});
