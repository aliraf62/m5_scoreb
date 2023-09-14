radio.onReceivedValue(function (name, value) {
    if (name == "TeamBScore" && value == 1) {
        teamBScore += 1
        if (teamBScore == 3) {
            for (let index = 0; index < 3; index++) {
                music.playMelody("C D E F G A B C5 ", 120)
                basic.showIcon(IconNames.Happy)
                basic.pause(500)
                basic.clearScreen()
                basic.pause(500)
            }
            // Reset for next game
            teamBScore = 0
        } else {
            basic.showNumber(teamBScore)
        }
    }
})
let teamBScore = 0
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(teamBScore)
    basic.pause(2000)
})
