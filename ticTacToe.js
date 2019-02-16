$(document).ready(function(){
    
    let player1 = prompt('Player 1 (X) please enter your name', 'Player 1');
    let player2 = prompt('Player 2 (O) please enter your name', 'Player 2');
    let player = 1;
    let player1Score = 0;
    let player2Score = 0;
    let ties = 0;
    let numOfButtons = 0;
    let playerMessage = '<h2>' + player1 + ' it is your turn</h2>';
    let playerScore = '<h2>Score - ' + player1 + ': ' + player1Score + '   ' + player2 + ': ' + player2Score + '   ' + 'Ties: ' + ties + '</h2>';
    let buttonsPushed = {
        a1: '',
        a2: '',
        a3: '',
        b1: '',
        b2: '',
        b3: '',
        c1: '',
        c2: '',
        c3: ''
    };

    document.getElementById('player').innerHTML = playerMessage;
    document.getElementById('score').innerHTML = playerScore;

    $(".button").on('click', function(){
        markBox(this.id);
    });

    $("#startover").on('click', function(){
        resetGame();
    });

    function markBox(id) {
        if(player === 1) {
            $('#'+id).html("<b1>X</b1>");
            $('#'+id).prop('disabled', true);
            buttonsPushed[id] = "X";

        } else if(player === 2){
            $('#'+id).html("<b1>O</b1>");
            $('#'+id).prop('disabled', true);
            buttonsPushed[id] = "O";    
        }
        numOfButtons += 1;
        setTimeout(checkWinner, 50);
        changePlayer();
        return;
        
    }
 
   function changePlayer() {
        if(player === 1) {
            player = 2;
            $('#player').html("<h2>" + player2 + " it is your turn</h2>")
        } else if (player === 2){
            player = 1;
            $('#player').html("<h2>" + player1 + " it is your turn</h2>");
        }
            return;           
        }

function checkWinner() {
    if((buttonsPushed.a1 === 'X' && buttonsPushed.a2 === 'X' && buttonsPushed.a3 === 'X') || 
       (buttonsPushed.b1 === 'X' && buttonsPushed.b2 === 'X' && buttonsPushed.b3 === 'X') ||
       (buttonsPushed.c1 === 'X' && buttonsPushed.c2 === 'X' && buttonsPushed.c3 === 'X') ||
       (buttonsPushed.a1 === 'X' && buttonsPushed.b1 === 'X' && buttonsPushed.c1 === 'X') ||
       (buttonsPushed.a2 === 'X' && buttonsPushed.b2 === 'X' && buttonsPushed.c2 === 'X') ||
       (buttonsPushed.a3 === 'X' && buttonsPushed.b3 === 'X' && buttonsPushed.c3 === 'X') ||
       (buttonsPushed.a1 === 'X' && buttonsPushed.b2 === 'X' && buttonsPushed.c3 === 'X') ||
       (buttonsPushed.c1 === 'X' && buttonsPushed.b2 === 'X' && buttonsPushed.a3 === 'X')) {
           alert(player1 + " Wins!");
           $('.button').prop('disabled', true);
           player1Score += 1;
    } else if
       ((buttonsPushed.a1 === 'O' && buttonsPushed.a2 === 'O' && buttonsPushed.a3 === 'O') || 
        (buttonsPushed.b1 === 'O' && buttonsPushed.b2 === 'O' && buttonsPushed.b3 === 'O') ||
        (buttonsPushed.c1 === 'O' && buttonsPushed.c2 === 'O' && buttonsPushed.c3 === 'O') ||
        (buttonsPushed.a1 === 'O' && buttonsPushed.b1 === 'O' && buttonsPushed.c1 === 'O') ||
        (buttonsPushed.a2 === 'O' && buttonsPushed.b2 === 'O' && buttonsPushed.c2 === 'O') ||
        (buttonsPushed.a3 === 'O' && buttonsPushed.b3 === 'O' && buttonsPushed.c3 === 'O') ||
        (buttonsPushed.a1 === 'O' && buttonsPushed.b2 === 'O' && buttonsPushed.c3 === 'O') ||
        (buttonsPushed.c1 === 'O' && buttonsPushed.b2 === 'O' && buttonsPushed.a3 === 'O')) {
            alert(player2 + " Wins!");
            $('.button').prop('disabled', true);
            player2Score += 1;
    } else if (numOfButtons === 9) {
        alert('It is a tie!');
        ties += 1;
    }
    
    $('#score').html('<h2>Score - ' + player1 + ': ' + player1Score + '   ' + player2 + ': ' + player2Score + '   ' + 'Ties: ' + ties + '</h2>');
}

function resetGame() {
    buttonsPushed = {
        a1: '',
        a2: '',
        a3: '',
        b1: '',
        b2: '',
        b3: '',
        c1: '',
        c2: '',
        c3: ''
    };
    numOfButtons = 0;
    $('.button').html('<p></p>');
    $('.button').prop('disabled', false);
    return;

}

});

    



