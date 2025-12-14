
// custom warning display (renamed from alert)
function showWarning(msg) {
  const alrtr = document.getElementById("warning");
  alrtr.textContent = msg;
}

const back = document.getElementById("back");
back.addEventListener("click", () => {
  window.location.href = "runtime.html";
});

// safely read score cookie (defaults to 0)
let score = Number(document.cookie.split(";")[0].split("=")[1]) || 0;
showWarning(`score: ${score}`)
const ans = document.getElementById("ans");
const q = document.getElementById("q");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const answer = ans.value.toLowerCase();
  ans.value = "";

  if (q.textContent === "question: who is the 67 kid?") {
    if (answer === "mason") {
      q.textContent = 'question: fill in the blank "6_"';
      score++;
    } else {
      score--;
    }

  } else if (q.textContent === 'question: fill in the blank "6_"') {
    if (answer === "7" || answer === "seven") {
      q.textContent = 'question: fill in the blank "___ seven"';
      score++;
    } else {
      score--;
    }

  } else if (q.textContent === 'question: fill in the blank "___ seven"') {
    if (answer === "six" || answer === "6") {
      q.textContent = "question: who is the 67 kid?";
      score++;
    } else {
      score--;
    }
  }
  document.cookie = "score=" + score + "; path=/"
  showWarning(`score: ${score}.67`);
});
