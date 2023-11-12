



    function getComputerChoice()  {
        const Choices = ["rock", "paper", "scissors"];
        return Choices[Math.floor(Math.random() * 3)];
        
    }
  
   playerSelction = prompt("Please make your choice of rock , paper or scissors!")
    function rockPaperScissor(playerSelction , computerSelection){
        computerSelection = computerSelection ;
         playerSelction = playerSelction ;
       
        if (playerSelction === "rock" && computerSelection === "scissors" || 
        playerSelction === "paper" && computerSelection === "rock" || 
        playerSelction === "scissors" && computerSelection === "paper" ) {
       return (`You win! ${playerSelction} beats ${computerSelection}` ) ;
       }
       else if (playerSelction === computerSelection){
        return(`Draw! ${playerSelection} and ${computerSelection}`);
       }
       else {
        console.log( `You Lose! ${computerSelection} beats ${playerSelection} Try Again.`)
       }   
    
       }
       const computerSelection = getComputerChoice();
       
   
    console.log(rockPaperScissor(playerSelction, computerSelection));
   