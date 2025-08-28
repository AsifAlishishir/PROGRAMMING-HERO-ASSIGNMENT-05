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
// const callCountBtns = document.querySelectorAll(".call-btn");
// for (const callBtn of callCountBtns) {
//   callBtn.addEventListener("click", function () {

//   });
// }

// CALL EVENT
const cardSection = document.getElementsByClassName("card-service");
const coinCount = document.getElementById("coin-count");
let coinTotal = parseInt(coinCount.innerText);
console.log(coinTotal);
for (const card of cardSection) {
  const cardH2 = card.querySelector("h2").innerText;
  const cardH3 = card.querySelector("h3").innerText;

  const callBtn = card.querySelector(".call-btn");
  callBtn.addEventListener("click", function () {
    if (coinTotal < 20) {
      alert("❌ insufficient Coin! You need 20 Coin to make a call.");
      return;
    }
    alert("📞 Calling " + cardH2 + " " + cardH3 + " ...");

    coinTotal -= 20;
    coinCount.innerText = coinTotal;
  });
}
