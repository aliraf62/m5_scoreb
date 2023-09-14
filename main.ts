let teamBScore = 0
radio.setGroup(1)

radio.onReceivedValue(function (name, value) {
    if (name == "TeamBScore" && value == 1) {
        teamBScore += 1
        if (teamBScore == 3) {
            // Celebrate victory
            for (let index = 0; index < 3; index++) {
                music.playMelody("C5 B A G F E D C", 120)
                basic.showIcon(IconNames.Happy)
                basic.pause(500)
                basic.clearScreen()
                basic.pause(500)
            }
            // Reset for the next game
            teamBScore = 0
        } else {
            basic.showNumber(teamBScore)
        }
    }
})

// Regularly show the current score
basic.forever(function () {
    basic.showNumber(teamBScore)
    basic.pause(2000)
})
