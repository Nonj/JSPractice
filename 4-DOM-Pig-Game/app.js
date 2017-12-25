/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. 
  Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. 
  After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score 
   gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice, state;

// To Initialize the Game
init();




// -- Our Roll Dice Function --
// Anonymous function - function thats only in the event listener
document.querySelector('.btn-roll').addEventListener('click', function() {
    // Setting our current dice to a random number from 1 - 6
    var die = Math.floor(Math.random() * 6) + 1;

    var diceDOM = document.querySelector('.dice');
    var currDOM = document.querySelector("#current-" + activePlayer);
    // Manipulates the current dice picture in the mididle of the 
    // program to display the current number that got rolled
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + die + '.png'; 

    
    if (state) {
        init();
    } else if (die === 1) {
        dontRepeatYoSelfNextPlayer();
        currDOM.textContent = roundScore;

        /* Code to manually add or remove "active" class
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        activePlayer = activePlayer === 0 ? 1 : 0;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
        */
    } else {
        roundScore += die;
        currDOM.textContent = roundScore;
    }

});
 

// Our Hold Function
document.querySelector('.btn-hold').addEventListener('click', function() {

    var diceDOM = document.querySelector('.dice');
    var currDOM = document.querySelector("#current-" + activePlayer);
    var scoreDOM = document.querySelector('#score-' + activePlayer); 
    // When player clicks hold, add it to their global score
    // update to show no die, update their curr to 0
    scores[activePlayer] += roundScore;
    scoreDOM.textContent = scores[activePlayer];

    // Winner Setting
    if (state) {
        init();
    }else if (scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = "Winner!";
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.dice').style.display = 'none';
        state = true;
    } else {
        dontRepeatYoSelfNextPlayer();
        currDOM.textContent = roundScore;
    }
});

function dontRepeatYoSelfNextPlayer() {
    // These are selected variables to manipulate DOM
    // So that I don't have to keep using redundant code
    var diceDOM = document.querySelector('.dice');
    var currDOM = document.querySelector("#current-" + activePlayer);

    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
    diceDOM.style.display = 'none'; 
    roundScore = 0;

}

// Our new Function
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    // The state of game, if its true we will reset to init;
    state = false;

    // Making dice so that it only gives a value from 1 - 6 
    dice = Math.floor(Math.random() * 6) + 1;



    // Setting the display to 'None' before game starts
    document.querySelector('.dice').style.display = 'none';

    // Setting each person's scores to zero initially
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    // Setting Player's names to 1 and 2
    document.getElementById('name-' + 0).textContent = "Player 1";
    document.getElementById('name-' + 1).textContent = "Player 2";

    // Removing 'Winner Class' that maybe lingering from prev game
    document.querySelector('.player-' + 0 + '-panel').classList.remove('winner');
    document.querySelector('.player-' + 1 + '-panel').classList.remove('winner');

    // Removing  Active Class that may be lingering
    document.querySelector('.player-' + 0 + '-panel').classList.remove('active');
    document.querySelector('.player-' + 1 + '-panel').classList.remove('active');

    // Initializing active player to be first
    document.querySelector('.player-' + 0 + '-panel').classList.add('active');

    // Chaning text content of current score back to zip
    document.querySelector("#current-" + 0).textContent = 0;
    document.querySelector("#current-" + 1).textContent = 0;
}


/*

function btn() {
}

// btn is a 'callback' function in this case because its a function
// that is passed into another function to get called by it, and not by us
document.querySelector('.btn-roll').addEventListener('click', btn);

*/

/*
// Selecting the 'current score' of the current active player and setting
// it to the dice (only for text content)
document.querySelector("#current-" + activePlayer).textContent = dice;

// Selecting the 'current score' of the current active player and setting
// it to the dice (for html)
//document.querySelector("#current-" + activePlayer).innerHTML = '<em>' + dice + '</em>';
*/