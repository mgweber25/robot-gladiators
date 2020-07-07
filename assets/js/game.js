// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


var playerMoney = 10;
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var defeatNumber = 0;
var roundNumber = 0;
var skippedRounds = 0;

console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// You can also log multiple values at once like this

// Alert users that they are starting the round

function fight(pickedEnemy) {

  function checkHealth() {
    if (enemyHealth < 1) {
      window.alert(pickedEnemy + " has died! " + playerName + " WINS Round " + roundNumber +  ".  Goodbye!");
      defeatNumber = defeatNumber + 1;
      return startGame();
    }
    if (playerHealth < 1) {
      window.alert(playerName + " has died! Goodbye! End of GAME!");
      endGame();
    } 

    return;
  }


        window.alert("Welcome to Robot Gladiators! This is Round " + roundNumber + ". " + "Your opponent will be "  + pickedEnemy + ".");
        
        while ([playerHealth > 0 && enemyHealth > 0]) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? (Please enter 'FIGHT' or 'SKIP' to choose.)");
        
        if (promptFight === "fight" || promptFight === "FIGHT") {

                
          // remove enemy's health by subtracting the amount set in the playerAttack variable
          enemyHealth = enemyHealth - playerAttack;

          checkHealth(pickedEnemy);

          window.alert(playerName + " attacked " + pickedEnemy + ". ");
          
          window.alert(pickedEnemy + " has " + enemyHealth + " health left. " + playerName + " has " + playerHealth + " health left.");
          
          console.log(playerName + " attacked " + pickedEnemy + ". " + pickedEnemy + " now has " + enemyHealth + " health remaining.");         
          
          
          playerHealth = playerHealth - enemyAttack;

          checkHealth(playerName);

          window.alert(pickedEnemy + " attacked " + playerName + ". ");
          
          window.alert(playerName + " has " + playerHealth + " health left. " + pickedEnemy + " has " + enemyHealth + " health left.");
          
          console.log(pickedEnemy + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
      }    
        // if player choses to skip
        else if (promptFight === "skip" || promptFight === "SKIP") {

                // confirm user wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
                  // if yes (true), leave fight
                if (confirmSkip) {
                      window.alert(playerName + " has decided to skip this fight.");
                      // subtract money from playerMoney for skipping
                      playerMoney = playerMoney - 10;
                      skippedRounds++;
                      console.log("PlayerMoney", playerMoney);
                      break;
                  }
        } else {
                  window.alert("You need to pick a valid option. Try again!");
                  
                  fight();
            }
          }
        };
    // if player choses to fight, then fight

       

            // check enemy's health
           /* if (enemyHealth < 1) {
              
              window.alert(pickedEnemy + " has died! Goodbye! End of round " + roundNumber);
              
              defeatNumber = defeatNumber + 1;
              
              break;
            } 
            else {
              
              
              if (playerHealth < 1) {
                
                window.alert(playerName + " has died! " + playerName + " LOSES Round " + roundNumber +  ".  Goodbye!");

                endGame();
                
              }
        }
      };
      */


  
    function startGame() {
      
        for(var i = 0; i < 3; i++) {
          if(playerHealth > 0) {
            roundNumber = (i + 1);
           // window.alert("Welcome to Robot Gladiators! Round " + roundNumber);
            var pickedEnemy = enemyNames[i];
            enemyHealth = 50;
            
            fight(pickedEnemy);
          }

          else {
            window.alert("You have lost your robot battle! GAME OVER! THANKS FOR PLAYING");
            break;
          }
        }
      };


    function addPoints() {
      return(playerMoney + (defeatNumber * 20));
    };
    

    function shop() {

      var storePrompt = window.prompt("Would you like to REFILL your health (5pts), UPGRADE your attack (20pts), or LEAVE the store?  Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
  
      if(storePrompt === "REFILL" || storePrompt === "refill") {
        
        if(playerMoney > 4){
        playerMoney = playerMoney - 5;
        playerHealth = 50;
  
        window.alert(playerName + "'s health is now at 50.  PlayerMoney is now at " + playerMoney);
        startGame();
        }
  
        else {
          window.alert("Insufficient funds to REFILL health.  Please LEAVE the store and play again");
          startGame();
          }
        }

        if(storePrompt === "UPGRADE" || storePrompt === "upgrade") {
          if(playerMoney > 20) {
            playerMoney = playerMoney - 20;
            playerAttack = 30;
            window.alert(playerName + "'s attack is now at 30.  Player's money is now at " + playerMoney);
            startGame();
            }
            
            else {
              window.alert("Insufficient funds to UPGRADE attack.  Please LEAVE the store and play again or quit the game");
              startGame();
            }
            
      }
    };
  
function endGame() {
  var continueGame = window.prompt("Would you like to START the game, visit the STORE, or END the Game?");
  

  if(continueGame === "RESTART" || continueGame === "restart") {
      startGame();
  }

  else if(continueGame === "STORE" || continueGame === "store") {
    shop();
  }

  else {
    startGame();
  }
};

//endGame();

startGame();
