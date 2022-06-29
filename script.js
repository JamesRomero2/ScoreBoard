const homeScoreScreen = document.getElementById("homeScreen");
const guestScoreScreen = document.getElementById("guestScreen");
const homeWin = document.getElementById("homeWin");
const guestWin = document.getElementById("guestWin");
let homeScore = 0;
let guestScore = 0;

function incrementHomeScore(score) {
    homeScoreScreen.textContent = homeScore += score;
}
function incrementGuestScore(score) {
    guestScoreScreen.textContent = guestScore += score;
}
function winner() {
    if (homeScore > guestScore) {
        homeWin.style.display = "inline"
        homeWin.textContent = "WINNER";
        guestWin.style.display = "none"
    } else if (homeScore < guestScore) {
        guestWin.style.display = "inline"
        guestWin.textContent = "WINNER";
        homeWin.style.display = "none"
    } else {
        guestWin.textContent = "DRAW";
        homeWin.textContent = "DRAW";
        guestWin.style.display = "inline"
        homeWin.style.display = "inline"
    }
}