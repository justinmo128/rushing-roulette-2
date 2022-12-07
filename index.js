let dieEl = document.getElementById("die")
dieEl.addEventListener("click", rollDie)

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    dieEl.style.fontSize = "100px";
    dieEl.innerHTML = roll;
}