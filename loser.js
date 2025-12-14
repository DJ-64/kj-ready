function showWarning(msg) {
  const alrtr = document.getElementById("warning");
  alrtr.textContent = msg;
}

const sixseven = document.getElementById("sixseven");
const diag = document.getElementById("diagnos");
const scr = document.getElementById("scr");
const rank = document.getElementById("rank");

sixseven.addEventListener("click", () => {
  window.location.href = "67ology.html";
});

diag.addEventListener("click", () => {
  showWarning("There is no diagnostic.");
});

// ensure score cookie exists
if (!document.cookie.includes("score=")) {
  document.cookie = "score=0; path=/";
}

// safe cookie read
function getScore() {
  const value = document.cookie
    .split("; ")
    .find(c => c.startsWith("score="))
    ?.split("=")[1];
  return Number(value) || 0;
}

function setRank(rank) {
    rank.textContent = `rank: ${rank}`;
}
let score = getScore();
scr.textContent = `score: ${score}`;