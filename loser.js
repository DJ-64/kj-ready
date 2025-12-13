
const alert = function (msg) {
const alrtr = document.getElementById("warning");
alrtr.textContent = msg;
}

const sixseven = document.getElementById("67");
const diag = document.getElementById("diagnos");
sixseven.addEventListener("click", function () {
    window.location.href = "67ology.html";
});

diag.addEventListener("click", function () {
    alert("There is no diagnostic.");
});
