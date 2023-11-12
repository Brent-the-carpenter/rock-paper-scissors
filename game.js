



    function getComputerChoice()  {
        let number = Math.floor((Math.random() * 3)) + 1;
        if (number === 1){
           return "scissor" ;
         
         }
        else if (number === 2){
            return "rock" ;
            
    
        } else {
            return "paper" ;
          }
        
    }
    console.log("The Computer chooses" + " " + getComputerChoice());
    
    function rockPaperScissor(playerSelction , computerSelection){
       if (playerSelction === "rock" && computerSelection === "paper" ) {
       console.log("You lose!") ;
       }
       else  if (playerSelction =="paper" && computerSelection == "rock"){
        console.log("you win!!") ;
        
       }
     }
     const computerSelection = getComputerChoice();
     const playerSelction = "rock";
     console.log(rockPaperScissor(playerSelction, computerSelection));