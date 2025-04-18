let happiness = 80;
let hunger = 20;
const music = document.getElementById("bg-music");

function updateBars() {
  // Update the width of the bars
  document.getElementById("happiness").style.width = happiness + "%";
  document.getElementById("hunger").style.width = hunger + "%";

  // Save the current state to localStorage
  localStorage.setItem("happiness", happiness);
  localStorage.setItem("hunger", hunger);
}

function feedPet() {
  // Decrease hunger, ensure it doesn't go below 0
  hunger = Math.max(0, hunger - 10);
  document.getElementById("speech").innerText = "Yummy! 🍔";
  updateBars();
}

function playWithPet() {
  // Increase happiness, ensure it doesn't go above 100
  happiness = Math.min(100, happiness + 10);
  document.getElementById("speech").innerText = "Yay! 🎾";
  updateBars();
}

// Play background music on user interaction
document.body.addEventListener("click", () => {
  if (music.paused) {
    music.play();
  }
});

window.onload = () => {
  // Retrieve saved happiness and hunger values, defaulting to initial values if not set
  happiness = parseFloat(localStorage.getItem("happiness")) || 80;
  hunger = parseFloat(localStorage.getItem("hunger")) || 20;

  // Update the bars based on the saved state
  updateBars();
};
