const logic = {
    "rock": [
        "lizard",
        "scissors"
    ],
    "paper": [
        "rock",
        "spock"
    ],
    "scissors": [
        "paper",
        "lizard"
    ],
    "lizard": [
        "spock",
        "paper"
    ],
    "spock": [
        "scissors",
        "rock"
    ]
}

export function rps(player) {
    const options = ["rock", "paper", "scissors"]
    if(player != null && !options.includes(player)) {
        console.error(`${player} is out of range.`)
        return null
    }
    return play_rps(player, options)
}

export function rpsls(player) {
    const options = ["rock", "paper", "scissors", "lizard", "spock"]
    if(player != null && !options.includes(player)) {
        console.error(`${player} is out of range.`)
        return null
    }
    return play_rps(player, options)
}

function play_rps(player, options) {
    var output = {}
    if(player == null) {
        output.player = random_option(options)
    } else {
        output.player = player
        output.opponent = random_option(options)
        if(output.player == output.opponent) {
            output.result = "tie"
        } else {
            output.result = rpsls_logic(output.player, output.opponent) ? "win" : "lose"
        }
    }
    return output
}

function rpsls_logic(a, b) {
    return logic[a].includes(b)
}

function random_option(options) {
    return options[Math.floor(Math.random() * options.length)]
}