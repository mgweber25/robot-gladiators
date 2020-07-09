// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


var playerMoney = 10;
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 25;
var defeatNumber = 0;
var roundNumber = 0;
var skippedRounds = 0;

console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



// You can also log multiple values at once like this

// Alert users that they are starting the round

/*
function checkHealth() {
  if (enemyHealth < 1) {
    window.alert(pickedEnemy + " has died! " + playerName + " WINS Round " + roundNumber +  ".  Goodbye!");
    defeatNumber = defeatNumber + 1;
  }
  if (playerHealth < 1) {
    window.alert(playerName + " has died! Goodbye! End of GAME!");
    endGame();
  } 

  return;
}
*/


function fight(pickedEnemy) {


        window.alert("Welcome to Robot Gladiators! This is Round " + roundNumber + ". " + "Your opponent will be "  + pickedEnemy + ".");
        
        while ([playerHealth > 0 && enemyHealth > 0]) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? (Please enter 'FIGHT' or 'SKIP' to choose. To end the game, please type 'END GAME'.)");
        
        if (promptFight === "fight" || promptFight === "FIGHT") {

                
          // remove enemy's health by subtracting the amount set in the playerAttack variable
          enemyHealth = Math.max(0, enemyHealth - playerAttack);

          //checkHealth(pickedEnemy);

          if (enemyHealth < 1) {
            window.alert(pickedEnemy + " has died! " + playerName + " WINS Round " + roundNumber +  ".  Goodbye!");
            defeatNumber = defeatNumber + 1;
            playerMoney = playerMoney + 10;
            return;
          }

          window.alert(playerName + " attacked " + pickedEnemy + ". ");
          
          window.alert(pickedEnemy + " has " + enemyHealth + " health left. " + playerName + " has " + playerHealth + " health left.");
          
          console.log(playerName + " attacked " + pickedEnemy + ". " + pickedEnemy + " now has " + enemyHealth + " health remaining.");         
          
          
          playerHealth = playerHealth - enemyAttack;

          //checkHealth(playerName);

          if (playerHealth < 1) {
            window.alert(playerName + " has died! Goodbye! End of GAME!");
            endGame();
          } 

          window.alert(pickedEnemy + " attacked " + playerName + ". ");
          
          window.alert(playerName + " has " + playerHealth + " health left. " + pickedEnemy + " has " + enemyHealth + " health left.");
          
          console.log(pickedEnemy + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
      }    
        // if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {

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
        } if(promptFight === "" || promptFight === undefined) {
                  window.alert("You need to pick a valid option. Try again!");
                  fight();
          }

          if (promptFight === "END GAME" || promptFight === "end game") {

            exit();
        }
      }
        };
    
        function newGame() {
          //reset player values
          playerHealth = 100;
          playerAttack = 10;
          playerMoney = 10;
          startGame();
        };

    /*    function addPoints() {
          return(playerMoney + 20);
        };*/
          

        function endGame() {
          var continueGame = window.prompt("Would you like to RETURN to your game, start a NEW game, visit the STORE, or END the game? (Please type one of the following: RETURN, NEW, STORE, or END)");
          
          if (continueGame === "RETURN" || continueGame === "return") {
            return;
          }
          if (continueGame === "STORE" || continueGame === "store") {
            shop();
          }   
          if (continueGame === "NEW" || continueGame === "new") {
            newGame();
        }
          else {
            var confirmEnd = window.confirm("Click 'OK' to END game!");

            if(confirmEnd) {
              window.alert("Thanks for playing.  Goodbye!");
              exit()
            }
            else {
              endGame();
            }
          }
        };

        function startGame() {

            for(var i = 0; i < enemyNames.length; i++) {
              if(playerHealth > 0) {

                roundNumber = (i + 1);
               // window.alert("Welcome to Robot Gladiators! Round " + roundNumber);
                var pickedEnemy = enemyNames[i];
                enemyHealth = 50;
                
                fight(pickedEnemy);

                if (i < enemyNames.length - 1) {
                  shop();
                }
              }
    
              else {
                window.alert("You have lost your robot battle! GAME OVER! THANKS FOR PLAYING");
                endGame();
                }
              }

              endGame();
          };


        function shop() {

          var storePrompt = window.prompt("Would you like to REFILL your health (5pts), UPGRADE your attack (10pts), or LEAVE the store?  Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
      
          if(storePrompt === "REFILL" || storePrompt === "refill") {
            
            if(playerMoney > 4){
            playerMoney = playerMoney - 5;
            playerHealth = playerHealth + 50;
      
            window.alert(playerName + "'s health is now at " + playerHealth + " Player's money is now at " + playerMoney);
            return;
            }
      
            else {
              window.alert("Insufficient funds to REFILL health.  Please LEAVE the store and play again");
              return;
              }
            }
    
            if(storePrompt === "UPGRADE" || storePrompt === "upgrade") {
              if(playerMoney > 9) {
                playerMoney = playerMoney - 10;
                playerAttack = playerAttack + 25;
                window.alert(playerName + "'s attack is now at " + playerAttack + ". Player's money is now at " + playerMoney);
                return;
                }
                
                else {
                  window.alert("Insufficient funds to UPGRADE attack.  Please LEAVE the store to play again or quit the game");
                  store();
                }
                

            if(storePrompt === "LEAVE" || storePrompt === "leave") {
              return;
            }
              else {
                return;
              }
          }
        };
    

startGame();
