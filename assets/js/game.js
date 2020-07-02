// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


var playerMoney = 10;
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 20;


console.log(playerName, playerHealth, playerAttack);

let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// You can also log multiple values at once like this

// Alert users that they are starting the round
    
function fight(pickedEnemy) {

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        
        enemyHealth = enemyHealth - playerAttack;
        
        console.log(playerName + " attacked " + pickedEnemy + ". " + pickedEnemy + " now has " + enemyHealth + " health remaining.");

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        
        console.log(pickedEnemy + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
        // check enemy's health
        
        if (enemyHealth <= 0) {
          window.alert(pickedEnemy + " has died! Goodbye!");
          return;
        } else {
              window.alert(pickedEnemy + " still has " + enemyHealth + " health left.");
            }
    
          // check player's health
        
          if (playerHealth <= 0) {
            window.alert(playerName + " has died!  Goodbye!");
            return;
          } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }     
    }
            // if player choses to skip

    else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
              
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            return;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }

    } else {
        window.alert("You need to pick a valid option. Try again!");
        fight();
        };
      };

    for(var i = 0; i < 3; i++) {
      var pickedEnemy = enemyNames[i];
      fight(pickedEnemy);
    };

