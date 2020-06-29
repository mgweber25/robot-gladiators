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

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames, enemyHealth, enemyAttack);
console.log(enemyNames.length);

function fight(enemyNames) {

        while(enemyHealth > 0) {
            for(var i = 0; i > enemyNames.length; i++) {
                fight(enemyNames[i]);
            }
        }

//var x = Number(enemyNames.length);

// Alert users that they are starting the round
    
//window.alert("Welcome to Robot Gladiators!");

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

console.log(promptFight);

// if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        
        enemyHealth = enemyHealth - playerAttack;
        
        console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");
    
        // check enemy's health
        
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");
        }   else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left.");
            }
    
        // remove player's health by subtracting the amount set in the enemyAttack variable
        
        playerHealth = playerHealth - enemyAttack;
        
        console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
            // check player's health
        
                if (playerHealth <= 0) {
                    window.alert(playerName + " has died!");
                }   else {
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
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }

    } else {
        window.alert("You need to pick a valid option. Try again!");
        }
}

while(enemyHealth > 0) {
            for(var i = 0; i > enemyNames.length; i++) {
                fight(enemyNames[i]);
            }
        }