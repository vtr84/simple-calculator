const firstPlayer = prompt(`š¤\nHey, I'm a bot..\nWhat's your name?`)
const rndNumber = Math.floor(Math.random()*100)+1
let botWinning = true
//let hint = ''
//console.log(rndNumber)

let guess = parseInt(prompt(`š°\nLet's play a game!\nGuess the number I'm thinking between 1 and 100 and win big! š°`))

while (botWinning) {
    if (rndNumber === guess){
        console.log(`Oh Uau ${firstPlayer}, you won!\nHere's some virtual money.. š°š°š°š°š°\nEnjoy!`)
        botWinning = false;
    } else {
        if (rndNumber < guess) {
            console.log('The number is Less ā¬ļø')
            // hint = 'The number is Less ā¬ļø'
        } else {
            console.log('The number is More ā¬ļø')
            // hint = 'The number is More ā¬ļø'
        }
        guess = parseInt(prompt(`Sorry, wrong number! Try again:\nš”: check console`))
    }
}
