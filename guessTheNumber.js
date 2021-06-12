const firstPlayer = prompt(`🤖\nHey, I'm a bot..\nWhat's your name?`)
const rndNumber = Math.floor(Math.random()*100)+1
let botWinning = true
//let hint = ''
//console.log(rndNumber)

let guess = parseInt(prompt(`🎰\nLet's play a game!\nGuess the number I'm thinking between 1 and 100 and win big! 💰`))

while (botWinning) {
    if (rndNumber === guess){
        console.log(`Oh Uau ${firstPlayer}, you won!\nHere's some virtual money.. 💰💰💰💰💰\nEnjoy!`)
        botWinning = false;
    } else {
        if (rndNumber < guess) {
            console.log('The number is Less ⬇️')
            // hint = 'The number is Less ⬇️'
        } else {
            console.log('The number is More ⬆️')
            // hint = 'The number is More ⬆️'
        }
        guess = parseInt(prompt(`Sorry, wrong number! Try again:\n💡: check console`))
    }
}
