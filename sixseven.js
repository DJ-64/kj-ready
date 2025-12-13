
const alert = function (msg) {
const alrtr = document.getElementById("warning");
alrtr.textContent = msg;
}
const back = document.getElementById("back");
back.addEventListener("click", function () {
    window.location.href = "runtime.html";
});
let score = 0;

const ans = document.getElementById("ans");
const q = document.getElementById("q");
const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    if (q.textContent === "question: who is the 67 kid?") {
    switch(ans.value.toLowerCase()){
        case "mason":
            ans.value = "";
            q.textContent = 'question: fill in the blank "6_"';
            score = score + 1;
            break;
        default:
            ans.value = "";
            score = score - 1;
            break;
    }
    }
    else if (q.textContent === 'question: fill in the blank "6_"') {
    switch(ans.value.toLowerCase()){
        case "7":
            ans.value = "";
            q.textContent = 'question: fill in the blank "___ seven"';
            score = score + 1;
            break;
        case "seven":
            ans.value = "";
            q.textContent = 'question: fill in the blank "___ seven"';
            score = score + 1;
            break;
        default:
            ans.value = "";
            score = score - 1;
            break;
    }
    }
    else if (q.textContent === 'question: fill in the blank "___ seven"') {
    switch(ans.value.toLowerCase()){
        case "six":
            ans.value = "";
            q.textContent = "question: who is the 67 kid?";
            score = score + 1;
            break;
        case "6":
            ans.value = "";
            q.textContent = "question: who is the 67 kid?";
            score = score + 1;
            break;
        default:
            ans.value = "";
            score = score - 1;
            break;
    }
    }
    alert(`score: ${score}`);
});