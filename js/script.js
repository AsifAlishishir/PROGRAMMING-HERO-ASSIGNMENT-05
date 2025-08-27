// HEART COUNT EVENT
const heartCountBtns = document.querySelectorAll(".small-heart-btn");
const heartTotalElement = document.getElementById("heart-Total");
let heartTotal = parseInt(heartTotalElement.innerText);

for (const heartBtn of heartCountBtns) {
  heartBtn.addEventListener("click", function () {
    heartTotal++;
    heartTotalElement.innerText = heartTotal;
  });
}

// CALL EVENT
const callCountBtns = document.querySelectorAll(".call-btn");
for (const callBtn of callCountBtns) {
  callBtn.addEventListener("click", function () {
    alert('Calling');
  });
}
