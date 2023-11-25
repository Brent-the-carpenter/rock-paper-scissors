



  
   
let round = document.querySelector('div.results');
round.classList.add('gametext'); 

let gameWinner = document.createElement("div");
gameWinner.classList.add('gametext');

   let playerScore = 0 ; // keeps track of player score
   let computerScore = 0 ; // keeps track of computer score
    
   let playerSelction = " ";
        const buttons = document.querySelectorAll('button');
        
        buttons.forEach((button) =>{
             button.addEventListener('click', () => {
             playerSelction = button.id;
                game()
              });
         });
    
        
    function game(){
        function getComputerChoice()  { // gets computers random choice using an array and picks one string using math random
            const Choices = ["rock", "paper", "scissors"];
            return Choices[Math.floor(Math.random() * 3)];
            }

        const computerSelection = getComputerChoice(); // stores the computers random choice in variable used for parameter
        
         playerScore == 0; // sets score to zero for each round
        computerScore == 0; // sets score to zero for each round 
        
        function rockPaperScissor(playerSelction , computerSelection){
                    
                    computerSelection = computerSelection ;
                    playerSelction = playerSelction ;
                
                    if (playerSelction === "rock" && computerSelection === "scissors" || 
                    playerSelction === "paper" && computerSelection === "rock" || 
                    playerSelction === "scissors" && computerSelection === "paper" ) {
                        ++playerScore;
                        round = document.querySelector("div.results");
                        round.textContent=
                         (`You win! ${playerSelction} beats ${computerSelection} 
                         The computer score is ${computerScore}  Your score is ${playerScore} ` ) ;
                        
                    }
                    else if (playerSelction === computerSelection){
                        round = document.querySelector("div.results");
                        round.textContent = 
                        (`Draw! ${playerSelction} and ${computerSelection} are equal.
                        The computer score ${computerScore}  Your score ${playerScore}  `);
                        
                    }
                    else {
                        computerScore++;
                        round = document.querySelector("div.results");
                        round.textContent =
                        
                        ( `You Lose! ${computerSelection} beats ${playerSelction} Try Again.
                        The computer score is ${computerScore}     Your score is ${playerScore}`)
                       
                    }   
                
                }
               
       console.log(rockPaperScissor(playerSelction.toLowerCase(), computerSelection));

           
                if ((playerScore === 5) || (computerScore === 5)){
                    if (playerScore > computerScore){
                        round.appendChild(gameWinner);
                        gameWinner.textContent = 'You won The Game!!!';
                    } else if (playerScore < computerScore){
                        round.appendChild(gameWinner);
                        gameWinner.textContent = ' You Lost the Game. Please try again.';
                    } else{
                        round.appendChild(gameWinner);
                        round.textContent = ' It Is a Draw. Both players tied!!!';
                    }
                }else{}
        }
    
    
    
            
            
           
        
                
            

                