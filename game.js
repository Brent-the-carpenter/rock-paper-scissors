



    function getComputerChoice()  {
        const Choices = ["rock", "paper", "scissors"];
        return Choices[Math.floor(Math.random() * 3)];
        
    }
  
   


   let playerScore = 0 ; // keeps track of player score
   let computerScore = 0 ; // keeps track of computer score
    
    for ( let round = 0 ; round < 5 ; round ++){ // loop that runs the game 5 times through
     
        console.log(game());
        
    }
    
    
    
    
    function game(){
        function getComputerChoice()  { // gets computers random choice using an array and picks one string using math random
            const Choices = ["rock", "paper", "scissors"];
            return Choices[Math.floor(Math.random() * 3)];
            
        }
        const computerSelection = getComputerChoice(); // stores the computers random choice in variable used for parameter
        playerSelction = prompt("Please make your choice of rock , paper or scissors!") ; // takes users input and stores it in player section
        playerScore == 0; // sets score to zero for each round
        computerScore == 0; // sets score to zero for each round 
        
        function rockPaperScissor(playerSelction , computerSelection){
                    
                    computerSelection = computerSelection ;
                    playerSelction = playerSelction ;
                
                    if (playerSelction === "rock" && computerSelection === "scissors" || 
                    playerSelction === "paper" && computerSelection === "rock" || 
                    playerSelction === "scissors" && computerSelection === "paper" ) {
                        alert("You win!!");
                        playerScore++ ;
                        return (`You win! ${playerSelction} beats ${computerSelection} 
                        your score is ${playerScore} the computer score is ${computerScore}` ) ;
                    }
                    else if (playerSelction === computerSelection){
                        alert("It is a Draw!!")
                        return(`Draw! ${playerSelction} and ${computerSelection} are equal.
                        your score ${playerScore}  the computer score ${computerScore}`);
                    }
                    else {
                        alert("You lose!! Try again")
                        computerScore++;
                        return( `You Lose! ${computerSelection} beats ${playerSelction} Try Again.
                        the computer score is ${computerScore} your score is ${playerScore}`)
                    }   
                
                }
               
       
   
                console.log(rockPaperScissor(playerSelction.toLowerCase(), computerSelection));
    
        
    }
    //evaluates score to determine overall winner.
            if (playerScore > computerScore){
                alert("You win the game!!")
            }else if (computerScore === playerScore){
                alert("It is a Draw!!")
            
            }else{ alert("You lose the game!! Try again")
        
                
            }

                