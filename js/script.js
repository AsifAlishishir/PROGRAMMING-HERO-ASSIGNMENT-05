const heartCountBtns = document.querySelectorAll(".small-heart-btn");
const heartTotalElement = document.getElementById("heart-Total");
let heartTotal = parseInt(heartTotalElement.innerText);

for (const heartBtn of heartCountBtns) {
  heartBtn.addEventListener("click", function () {
    heartTotal++;
    heartTotalElement.innerText = heartTotal;
  });
}
