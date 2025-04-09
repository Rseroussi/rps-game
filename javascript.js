function getComputersChoice(){
    let rand_val = Math.random()*3;
    if(rand_val < 1){
        return "rock";
    } else if(rand_val < 2){
        return "paper";
    } 
    return "scissors";
}

function getUsersChoice(){
    return prompt("choose rock, paper, or scissors:");
}
let human_score = 0;
let computer_score = 0;

function playRound(humanChoice){
    let outDiv = document.querySelector("#results");
    let ComputerChoice = getComputersChoice();
    switch(humanChoice.toLowerCase()){
        case "rock":
            switch(ComputerChoice.toLowerCase()){
                case "scissors":
                    
                    outDiv.textContent = `you win! ${humanChoice} beats ${ComputerChoice}`;
                    human_score++;
                    break;
                case "paper":
                    
                    outDiv.textContent = `you lose! ${humanChoice} loses to ${ComputerChoice}`;
                    computer_score++;
                    break;
                default:
                    outDiv.textContent = 'tie no one won!';
                    
            }
            break;
        case "paper":
            switch(ComputerChoice.toLowerCase()){
                case "rock":
                    
                    outDiv.textContent =`you win! ${humanChoice} beats ${ComputerChoice}`;
                    human_score++;
                    break;
                case "scissors":
                    
                    outDiv.textContent =`you lose! ${humanChoice} loses to ${ComputerChoice}`;
                    computer_score++;
                    break;
                default:
                    outDiv.textContent ='tie no one won!';
            }
            break;
            case "scissors":
                switch(ComputerChoice.toLowerCase()){
                    case "paper":
                        
                        outDiv.textContent =`you win! ${humanChoice} beats ${ComputerChoice}`;
                        human_score++;
                        break;
                    case "rock":
                        
                        outDiv.textContent =`you lose! ${humanChoice} loses to ${ComputerChoice}`;
                        computer_score++;
                        break;
                    default:
                        outDiv.textContent ='tie no one won!';
                        
                }
                break;
    }
}
let outDiv = document.querySelector("#results");
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", (event) => playRound("rock"));
paperBtn.addEventListener("click", (event) => playRound("paper"));
scissorsBtn.addEventListener("click", (event) => playRound("scissors"));
function playGame(){
    let outDiv = document.querySelector("#results");
    if(human_score > 5 || computer_score > 5){
        if(human_score > computer_score){
            outDiv.textContent = "You won!";
        } else {
            outDiv.textContent = "Sorry the Computer won...";
        }
        human_score = 0;
        computer_score = 0;
        return;
    }

    setTimeout(playGame, 100);

    // console.log("final score: " + human_score + ", computer score:" + computer_score);
}

playGame();

