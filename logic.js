  
let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");

const scoreboard_div = document.querySelector(".Score");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ["r","p","s"];
    const randomNum = Math.floor(Math.random()*3)
    return choices[randomNum];
}
// getComputerChoice();


function win(){
    userScore++;
    // console.log("You won"+userScore);
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "You Won";
    
    
}
function lose(){
    compScore++;
    // console.log("You lost"+compScore);
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = "You lost";

}
function tie(){
    // console.log("It's a tie")
    result_div.innerHTML = "It's a tie"
    
}
function game(userChoice){
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice){
        case "rs":
        case "pr":
        case 'sp':
            win();
            break;
        
        case "sr":
        case "rp":
        case "ps":
            lose();
            break;
        
        case "rr":
        case "pp":
        case "ss":
            tie();
            break;
            
        

    }
}


function main(){
    rock_div.addEventListener("click",function(){
        game("r");
    })
    paper_div.addEventListener("click",function(){
        game("p");
    })
    scissor_div.addEventListener("click",function(){
        game("s");
    })
}
main();