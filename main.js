// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function() {
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");

  const likeButtons = document.querySelectorAll(".like");
  likeButtons.forEach(button => {
      button.addEventListener("click", function() {
          mimicServerCall()
              .then(() => {
                  button.querySelector(".like-glyph").classList.add("activated-heart");
                  button.querySelector(".like-glyph").innerHTML = "&#x2665;";
              })
              .catch(() => {
                  errorModal.classList.remove("hidden");
                  const modalMessage = document.getElementById("modal-message");
                  modalMessage.textContent = "Server error. Please try again later.";
                  setTimeout(() => {
                      errorModal.classList.add("hidden");
                  }, 3000);
              });
      });
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
