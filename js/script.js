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
const historyCard = document.getElementById("history-card");

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

    const call = {
      serviceName: cardH2,
      serviceNumber: cardH3,
      date: new Date().toLocaleTimeString(),
    };

    const div = document.createElement("div");
    div.innerHTML = `
    <div
              class="call-history-content p-2 xl:p-4 mx-2 xl:mx-6 mb-3 flex justify-between items-center gap-2 bg-[#FAFAFA] rounded-lg"
            >
              <div class="history-description">
                <h2 class="inter text-[16px] xl:text-[18px] font-medium">
                  ${call.serviceName}
                </h2>
                <p class="hind text-[16px] xl:text-[18px] text-[#5C5C5C] font-normal">${call.serviceNumber}</p>
              </div>
              <div class="call-history-date hind text-[16px] xl:text-[18px] font-normal">
                <p>${call.date}</p>
              </div>
            </div>`;
    historyCard.appendChild(div);
  });
}

// CLEAR BUTTON EVENT
document.getElementById("clear-btn").addEventListener("click", function () {
  const historyCard = document.getElementById("history-card");
  historyCard.innerHTML = ``;
});

// COPY BUTTON EVENT
const copyCount = document.getElementById("copy-count-total");
let copyTotal = parseInt(copyCount.innerText);

for (const card of cardSection) {
  const cardH3 = card.querySelector("h3").innerText;
  const copyBtn = card.querySelector(".copy-btn");
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(cardH3);
    alert("Number has been copied: " + cardH3);

    copyTotal++;
    copyCount.innerText = copyTotal;
  });
}
