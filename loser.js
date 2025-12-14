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

switch (true) {
  case score < -1:
    setRank("Bronze I");
    break;
  case score < 2:
    setRank("Bronze II");
    break;
  case score < 4:
    setRank("Bronze III");
    break;
  case score < 6:
    setRank("Silver I");
    break;
  case score < 8:
    setRank("Silver II");
    break;
  case score < 10:
    setRank("Silver III");
    break;
  case score < 12:
    setRank("Gold I");
    break;
  case score < 13:
    setRank("Gold II");
    break;
  case score < 16:
    setRank("Gold III");
    break;
  case score < 19:
    setRank("Platinum I");
    break;
  case score < 21:
    setRank("Platinum II");
    break;
  case score < 23:
    setRank("Platinum III");
    break;
  case score < 25:
    setRank("Diamond I");
    break;
  case score < 27:
    setRank("Diamond II");
    break;
  case score < 29:
    setRank("Diamond III");
    break;
  case score < 34:
    setRank("Elite");
    break;
  case score < 39:
    setRank("Champion");
    break;
  case score < 41:
    setRank("Unreal");
    break;
  case score < 46:
    setRank("Sigma");
    break;
  case score < 50:
    setRank("Glubtastic");
    break;
  case score < 65:
    setRank("Lario");
    break;
  case score < 75:
    setRank("Super-Lario");
    break;
  default:
    setRank("CRACKED");
}