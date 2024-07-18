const paperBtn = document.querySelector('.js-paper');
const rockBtn = document.querySelector('.js-rock');
const scissorsBtn = document.querySelector('.js-scissors');


let scores = {
    wins: 0,
    ties: 0,
    losses: 0
}


let finalCompMove;

function robotMove(){
    let compPick = Math.random();

    if(compPick > 0 && compPick < 1/3){
        finalCompMove = 'rock';
    }
    else if(compPick > 1/3 && compPick < 2/3){
        finalCompMove = 'paper';
    }
    else if(compPick > 2/3 && compPick < 1){
        finalCompMove = 'scissors'
    }
    return finalCompMove;
}

let result;
function playerMove(move){

    robotMove()

    // Player played the rock move
    if(move === 'rock'){
        if(finalCompMove === 'rock'){
            result = 'Tie';
        }
        else if(finalCompMove === 'paper'){
            result = 'You Lose';
        }
        else if(finalCompMove === 'scissors'){
            result = 'You Win'
        }
    }

    // Player played the paper move
    else if(move === 'paper'){
        if(finalCompMove === 'rock'){
            result = 'You Win';
        }
        else if(finalCompMove === 'paper'){
            result = 'Tie';
        }
        else if(finalCompMove === 'scissors'){
            result = 'You Lose'
        }
    }

    // Player played the scissors move
    else if(move === 'scissors'){
        if(finalCompMove === 'rock'){
            result = 'You Lose';
        }
        else if(finalCompMove === 'paper'){
            result = 'You Win';
        }
        else if(finalCompMove === 'scissors'){
            result = 'Tie'
        }
    }

    // Scores during the game
    if(result === 'You Win'){
        scores.wins += 1;
    }
    else if(result === 'Tie'){
        scores.ties += 1;
    }
    else if(result === 'You Lose'){
        scores.losses += 1;
    }

    console.log(`${result}. You picked ${move}. The computer picked ${finalCompMove}
Wins: ${scores.wins} Ties: ${scores.ties}  Losses: ${scores.losses}`);

// Change color of section depending with result

const section = document.querySelector('.js-section');

if(result === 'You Win'){
    section.classList.add('green');
}
else if (result === 'Tie'){
    section.classList.remove('green');
    section.classList.remove('red');
}
else if(result === 'You Lose'){
    section.classList.add('red');
}

const scoreBlock = document.querySelector('.js-score');
const resultBlock = document.querySelector('.js-result');
const messageBlock = document.querySelector('.js-message');


resultBlock.innerHTML = `${result}`;
messageBlock.innerHTML = `You picked ${move}. The computer picked ${finalCompMove}.`;
scoreBlock.innerHTML = `Wins: ${scores.wins} Ties: ${scores.ties}  Losses: ${scores.losses}`


}

paperBtn.addEventListener('click', ()=>{
    playerMove('paper')
})

rockBtn.addEventListener('click', ()=>{
    playerMove('rock')
})

scissorsBtn.addEventListener('click', ()=>{
    playerMove('scissors')
})






    










































