const myBtn = document.querySelector(".buttons")
const turn = document.querySelector(".turn")
const moves = document.querySelector(".moves")
let yourTurn = true
let nrMoves= 0

for (let i = 1; i <= 25; i++) {
  let div = document.createElement("div")
  myBtn.appendChild(div)
  for (let j = 1; j <= 25; j++) {
    div.appendChild(document.createElement("button"))
  }
}

function movesDone(btn) {
  nrMoves++
  moves.textContent = `Drag gjorda: ${nrMoves}`
  btn.disabled = true
}

function whosTurn(controlTurn) {
  if (controlTurn) {
    turn.textContent = "Din tur: 😼"
  } else {
    turn.textContent = "Din tur: 🐭"
  }
}

const buttons = document.querySelectorAll("button")
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    if (yourTurn) {
      event.currentTarget.textContent = "😼"
    } else {
      event.currentTarget.textContent = "🐭"
    }
    movesDone(buttons[i])
    yourTurn = !yourTurn
    whosTurn(yourTurn)
  })
}