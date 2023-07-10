let awayEl = document.getElementById("away-el")
let homeEl = document.getElementById("home-el")

let awayPoints = 0
let homePoints = 0

function addOneAway() {
    awayPoints += 1
    awayEl.textContent = awayPoints
}

function addTwoAway() {
    awayPoints += 2
    awayEl.textContent = awayPoints
}

function addThreeAway() {
    awayPoints += 3
    awayEl.textContent = awayPoints
}

function addOneHome() {
    homePoints += 1
    homeEl.textContent = homePoints
}

function addTwoHome() {
    homePoints += 2
    homeEl.textContent = homePoints
}

function addThreeHome() {
    homePoints += 3
    homeEl.textContent = homePoints
}

function reset(){
    awayPoints = 0
    homePoints = 0
    homeEl.textContent = 0
    awayEl.textContent = 0
}