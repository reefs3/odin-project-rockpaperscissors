// function game(num) {

//     // for (let num=0; num<5;num++) {
//         // write function computerPlay that will randomly return Rock, Paper or Scissors
//         let move = Math.floor(Math.random() * 3);
        
//         function computerPlay() {
//             if (move === 1) {
//             return 'rock';
//             } else if (move === 2) {
//             return 'paper';
//             } else {
//             return 'scissors';
//             }
//         }

//         // write function that that plays the game with parameters playerSelection and computerSelection
//         // get player input

//         // let playerSelection = window.prompt('let\'s play rock paper and scissors!');
//         let playerSelection = document.getElementsByTagName('button').addEventListener('click', buttonClick);

//         function buttonClick(e){
//             console.log(e);
//         }
//         console.log(playerSelection)
        
//         const computerSelection = computerPlay();


//         // compare playerSelection vs computerSelection

//         function outcome(playerSelection, computerSelection) {
//             if (playerSelection==='paper' && computerSelection==='rock') {
//                 return 'You win!!! Paper beats Rock!';
//             } else if (playerSelection==='scissors' && computerSelection==='paper') {
//                 return 'You win!!! Scissors beats Paper!';
//             } else if (playerSelection==='rock' && computerSelection==='scissors') {
//                 return 'You win!!! Rock beats Scissors!';
//             } else if (playerSelection===computerSelection) {
//                 return 'It\'s a tie! Roll again!';
//             } else {
//                 return 'You lose!!! ' + computerSelection[0].toUpperCase() + computerSelection.substring(1) + ' beats ' + playerSelection[0].toUpperCase() + playerSelection.substring(1) + '!';
//             }

//         }
//         console.log(playerSelection)
//         // console.log(outcome(playerSelection,computerSelection))
//     // }
// }

// console.log(game())

let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');
rockBtn.addEventListener('click',buttonClick);
paperBtn.addEventListener('click',buttonClick);
scissorsBtn.addEventListener('click',buttonClick);
    
function outcome(playerSelection, computerSelection) {
    if (playerSelection==='paper' && computerSelection==='rock') {
        return 'Player wins!!! Paper beats Rock!';
    } else if (playerSelection==='scissors' && computerSelection==='paper') {
        return 'Player wins!!! Scissors beats Paper!';
    } else if (playerSelection==='rock' && computerSelection==='scissors') {
        return 'Player wins!!! Rock beats Scissors!';
    } else if (playerSelection===computerSelection) {
        return 'It\'s a tie! Roll again!';
    } else {
        return 'AI wins!!! ' + computerSelection[0].toUpperCase() + computerSelection.substring(1) + ' beats ' + playerSelection[0].toUpperCase() + playerSelection.substring(1) + '!';
    }            
}

function buttonClick (e) {

    const playerSelection = e.target.textContent.toLowerCase();
    
    let move = Math.floor(Math.random() * 3);

    function computerPlay() {
        if (move === 1) {
            return 'rock';
        } else if (move === 2) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

    const computerSelection = computerPlay();
    
    let result = outcome(playerSelection,computerSelection);

    const para2 = document.querySelector('.displayResult');
    const text = document.createElement('p');
    text.textContent = result;
    para2.replaceChild(text,para2.children[0]);

    if (result.includes('Player')) {
        const para = document.createElement('p');
        para.classList.add('playerWins');
        para.textContent = result;
        document.querySelector('.playerWinsTotal').appendChild(para);
    } else if (result.includes('AI')) {
        const para = document.createElement('p');
        para.classList.add('compWins');
        para.textContent = result;
        document.querySelector('.compWinsTotal').appendChild(para);
    } else {
        const para = document.createElement('p');
        para.textContent = result;
        document.querySelector('.ties').appendChild(para);
    }
    
    let pWinsArray = Array.from(document.querySelectorAll('.playerWins'));
    let cWinsArray = Array.from(document.querySelectorAll('.compWins'));
    
    document.querySelector('.numP').textContent = pWinsArray.length;
    document.querySelector('.comP').textContent = cWinsArray.length;

    if(pWinsArray.length === 5) {
        document.querySelector('.player').textContent = 'Player Wins!';
        rockBtn.removeEventListener('click',buttonClick);
        paperBtn.removeEventListener('click',buttonClick);
        scissorsBtn.removeEventListener('click',buttonClick);

        const para2 = document.querySelector('.displayResult');
        const text = document.createElement('p');
        text.textContent = "";
        para2.replaceChild(text,para2.children[0]);

    } else if (cWinsArray.length === 5) {
        document.querySelector('.comp').textContent = 'AI Wins!';
        rockBtn.removeEventListener('click',buttonClick);
        paperBtn.removeEventListener('click',buttonClick);
        scissorsBtn.removeEventListener('click',buttonClick);

        const para2 = document.querySelector('.displayResult');
        const text = document.createElement('p');
        text.textContent = "";
        para2.replaceChild(text,para2.children[0]);
    }
    
}   










