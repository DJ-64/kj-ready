const alert = function (msg) {
    const alrt = document.getElementById("warn");
    alrt.textContent = msg;
}
if (document.cookie === "") {
    document.cookie = "score=0"
}
console.log(document.cookie);
const button = document.getElementById("submit");
// Add a click event listener
button.addEventListener("click", function () {
    if (document.getElementById("login").value === "67") {
        window.location.href = "runtime.html";
    }
});
