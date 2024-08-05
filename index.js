let latteCount = 0
let capCount = 0
///let latte = "Lattes "
///let cap = "Capuccinos "
///let msg = " Sold Today."
///let latteSold = latteCount + latte + msg
///let capSold = capCount + cap + msg
///console.log(latteSold)
///console.log(capSold)

let latteEl = document.getElementById("latte-el")
console.log(latteEl)

let capEl = document.getElementById("cap-el")
console.log(capEl)

function latteinc() {
    latteCount += 1
    latteEl.textContent = latteCount
    console.log(latteCount)
}

function capinc() {
    capCount += 1
    capEl.textContent = capCount
    console.log(capEl)
}

let saveLatte = document.getElementById("save-latte")
let saveCap = document.getElementById("save-cap")

function save() {
    let latteStr = latteCount + " - "
    saveLatte.textContent += latteStr
    let capStr = capCount + " - "
    saveCap.textContent += capStr
    latteCount = 0
    latteEl.textContent = 0
    capCount = 0
    capEl.textContent = 0
}