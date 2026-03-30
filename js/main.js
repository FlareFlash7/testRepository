 /*make the animal counter*/
let animalsOnScreen = 0;
/*update the counter as it continues*/
function updateCounter() {
  document.getElementById("counter").textContent =
    "Animals on Screen: " + animalsOnScreen;
}
/*keeps track of which animal*/
function toggleAnimal(id) {
  const img = document.getElementById(id);

  if (img.style.display === "none") {
    img.style.display = "block";
    animalsOnScreen++;
  } else {
    img.style.display = "none";
    animalsOnScreen--;
  }

  updateCounter();
}
/*can reset everything*/
function resetZoo() {
  const animals = ["cat", "dog", "cow"];

  animals.forEach(id => {
    const img = document.getElementById(id);
    img.style.display = "none";
  });

  animalsOnScreen = 0;
  updateCounter();
}
