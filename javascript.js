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


function playRound(humanChoice, ComputerChoice){
    switch(humanChoice.toLowerCase()){
        case "rock":
            switch(ComputerChoice.toLowerCase()){
                case "scissors":
                    
                    console.log(`you win! ${humanChoice} beats ${ComputerChoice}`);
                    return 1;
                case "paper":
                    
                    console.log(`you lose! ${humanChoice} loses to ${ComputerChoice}`);
                    return 2;
                default:
                    console.log('tie no one won!');
                    return 0;
            }
            break;
        case "paper":
            switch(ComputerChoice.toLowerCase()){
                case "rock":
                    
                    console.log(`you win! ${humanChoice} beats ${ComputerChoice}`);
                    return 1;
                case "scissors":
                    
                    console.log(`you lose! ${humanChoice} loses to ${ComputerChoice}`);
                    return 2;
                default:
                    console.log('tie no one won!');
                    return 0;
            }
            break;
            case "scissors":
                switch(ComputerChoice.toLowerCase()){
                    case "paper":
                        
                        console.log(`you win! ${humanChoice} beats ${ComputerChoice}`);
                        return 1;
                    case "rock":
                        
                        console.log(`you lose! ${humanChoice} loses to ${ComputerChoice}`);
                        return 2;
                    default:
                        console.log('tie no one won!');
                        return 0;
                }
                break;
    }
}

function playGame(){
    let human_score = 0;
    let computer_score = 0;
    for(let i = 0; i < 5; i++){
        const humanSelection= getUsersChoice();
        const computerSelection= getComputersChoice();
        switch(playRound(humanSelection,computerSelection)){
            case 1:
                human_score++;
                break;
            case 2:
                computer_score++;
                break;
        }
    }
    // console.log("final score: " + human_score + ", computer score:" + computer_score);
}



