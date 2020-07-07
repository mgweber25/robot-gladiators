// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


var playerMoney = 10;
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// You can also log multiple values at once like this

// Alert users that they are starting the round


function fight(pickedEnemy) {

var roundNumber = (i + 1);

        window.alert("Welcome to Robot Gladiators! This is Round " + roundNumber + ". " + "Your opponent will be "  + pickedEnemy + ".");

        while ([playerHealth > 0 && enemyHealth > 0]) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? (Please enter 'FIGHT' or 'SKIP' to choose.)");

        // if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {

          // confirm user wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                
          // if yes (true), leave fight
          if (confirmSkip) {
              window.alert(playerName + " has decided to skip this fight. Goodbye!");
              // subtract money from playerMoney for skipping
              playerMoney = playerMoney - 10;
              console.log("PlayerMoney", playerMoney);
              break;
          }
          else {
                  window.alert("You need to pick a valid option. Try again!");
                  roundNumber = roundNumber - 1;
                  fight();
            }
        }  

    // if player choses to fight, then fight

       // if (promptFight === "fight" || promptFight === "FIGHT") {

            // check enemy's health
            if (enemyHealth < 1) {
              window.alert(pickedEnemy + " has died! Goodbye! End of round " + roundNumber);
              break;
            } 
            else {
              
              // remove enemy's health by subtracting the amount set in the playerAttack variable
              enemyHealth = enemyHealth - playerAttack;

              window.alert(playerName + " attacked " + pickedEnemy + ". ");
              
              window.alert(pickedEnemy + " has " + enemyHealth + " health left. " + playerName + " has " + playerHealth + " health left.");
              
              console.log(playerName + " attacked " + pickedEnemy + ". " + pickedEnemy + " now has " + enemyHealth + " health remaining.");
              
              if (enemyHealth < 1) {
                window.alert(pickedEnemy + " has died! " + playerName + " WINS Round " + roundNumber +  ".  Goodbye!");
                break;
              }
            }

            // check player's health
            if (playerHealth < 1) {
              window.alert(playerName + " has died! Goodbye! End of round " + roundNumber);
              break;
            } 
            else {
              
              // remove player's health by subtracting the amount set in the enemyAttack variable
              playerHealth = playerHealth - enemyAttack;

              window.alert(pickedEnemy + " attacked " + playerName + ". ");
              window.alert(playerName + " has " + playerHealth + " health left. " + pickedEnemy + " has " + enemyHealth + " health left.");
              console.log(pickedEnemy + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
              
              if (playerHealth < 1) {
                window.alert(playerName + " has died! " + playerName + " LOSES Round " + roundNumber +  ".  Goodbye!");
                break;
              }
          }
  }
};
                
    for(var i = 0; i < 3; i++) {
      var pickedEnemy = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemy);
    };

