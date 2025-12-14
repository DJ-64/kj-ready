
const alert = function (msg) {
const alrtr = document.getElementById("warning");
alrtr.textContent = msg;
}

const sixseven = document.getElementById("sixseven");
const diag = document.getElementById("diagnos");
const scr = document.getElementById("scr");
sixseven.addEventListener("click", function () {
    window.location.href = "67ology.html";
});

diag.addEventListener("click", function () {
    alert("There is no diagnostic.");
});
if (document.cookie === "") {
    document.cookie = "score=0; path=/";
}
scr.textContent = `score: ${Number(document.cookie.split(";")[0].split("=")[1]) || 0}`