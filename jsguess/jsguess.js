var targetnum;
var guessnum;
var numguesses = 0;

function StartGame () {
    targetnum = parseInt(prompt ("Player 1, enter a positive number: "));
    guessnum = null;
    numguesses = 0;
    while (targetnum !== guessnum) {
        guessnum = parseInt(prompt ("Player 2, guess the number: "));
        numguesses++;
        if (guessnum > targetnum) {
            alert("Your guess is too high!");
        } else if (guessnum < targetnum) {
            alert("Your guess is too low!");
        }
    }
    alert("Congradulations! You guessed correct number in " + parseInt(numguesses) + " tries!");
}