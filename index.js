const alert = function (msg) {
    const alrt = document.getElementById("warn");
    alrt.textContent = msg;
}

const button = document.getElementById("submit");
// Add a click event listener
button.addEventListener("click", function () {
    if (document.getElementById("login").value === "67") {
        window.location.href = "runtime.html";
    }
});
