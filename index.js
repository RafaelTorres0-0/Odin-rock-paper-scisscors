function selection(){
    let selection = Math.floor(Math.random() * 3) + 1;
    if (selection == 1){
        return "rock";
    }else if(selection == 2){
        return "paper";
    }else{
        return "scisscor";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        console.log("drag");
    }else if(playerSelection == "rock" && computerSelection == "scisscor"){
        console.log("Player Win this round!");
        return 1;
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("Player Win this round!");
        return 1;
    }else if(playerSelection == "scisscor" && computerSelection == "paper"){
        console.log("Player Win this round!");
        return 1;
    }else{
        console.log("computer win this round!");
        return 2;
    }
}

function game(){
    let computerWins = 0;
    let userWins = 0;
    let result = "";
    for (let round = 0; round < 5; round++){
        let playerSelection = prompt("Rock, paper or scisscor.    1     2    3",).toLowerCase();
        let computerSelection = selection();
        result = playRound(playerSelection, computerSelection);
        if( result == 1){
            userWins++;
        }else if(result == 2){
            computerWins++;
        }
    }
    if(computerWins == userWins){
        console.log("Drag");
    }else if( computerWins > userWins){
        console.log("The computer win the game");
    }else{
        console.log("The player win the game!")
    }
}
console.log(game());