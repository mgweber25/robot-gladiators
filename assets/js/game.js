// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less



// Alert users that they are starting the round
var playerStats = {
  defeatNumber: 0,
  roundNumber: 0,
  skippedRounds: 0,
},

var fightOrSkip = function() {
  // ask user if they'd like to fight or skip using  function
  var promptFight = window.prompt("Would you like FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. To end the game, please type 'END GAME'.)");

  // Enter the conditional recursive function call here!
  promptFight = promptFight.toLowerCase();
  

  //if user wants to END GAME
  if (promptFight === "end game") {
    exit();
}
  if (promptFight === "fight")   {
    break;
  }

  // if user picks "skip" confirm and then stop the loop
  if (promptFight === "skip") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerInfo.playerMoney = playerInfo.money - 10;
      playerStats.skippedRounds++;

      console.log("Player's money", playerInfo.money);

      shop();
    }
  }
  // Conditional Recursive Function Call
  if (!promptFight) {

    window.alert("You need to provide a valid answer! Please try again.");

    return fightOrSkip();
  }

}

function fight(enemy) {


        //window.alert("Welcome to Robot Gladiators! This is Round " + playerStats.roundNumber + ". " + "Your opponent will be "  + enemy + ".");
        
        while ([playerInfo.health > 0 && enemy.health > 0]) {

          if (fightOrSkip()) {
            // if true, leave fight by breaking loop
            break;
          }

        //var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? (Please enter 'FIGHT' or 'SKIP' to choose. To end the game, please type 'END GAME'.)");
        

        //if (promptFight === "fight" || promptFight === "FIGHT") {

                
          // remove enemy's health by subtracting the amount from player's attack
          enemy.health = Math.max(0, enemy.health - damage);

          //checkHealth(enemy);

          if (enemy.health < 1) {
            window.alert(enemy + " has died! " + playerInfo.name + " WINS Round " + playerStats.roundNumber +  ".  Goodbye!");
            playerStats.defeatNumber = playerStats.defeatNumber + 1;
            playerInfo.money = playerInfo.money + 10;
            return;
          }

          window.alert(playerInfo.name + " attacked " + enemy + ". ");
          
          window.alert(enemy + " has " + enemy.health + " health left. " + playerInfo.name + " has " + playerInfo.health + " health left.");
          
          console.log(playerInfo.name + " attacked " + enemy + ". " + enemy + " now has " + enemy.health + " health remaining.");         
          
          // remove player's health by subtracting the amount from enemy's attack
          playerInfo.health = Math.max(0, playerInfo.health - damage);

          //checkHealth(playerInfo.name);

          if (playerInfo.health < 1) {
            window.alert(playerInfo.name + " has died! Goodbye! End of GAME!");
            endGame();
          } 

          window.alert(enemy + " attacked " + playerInfo.name + ". ");
          
          window.alert(playerInfo.name + " has " + playerInfo.health + " health left. " + enemy + " has " + enemy.health + " health left.");
          
          console.log(enemy + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        
      } 
    };   
        // if player choses to skip
       // if (promptFight === "skip" || promptFight === "SKIP") {

                // confirm user wants to skip
            //    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
                  // if yes (true), leave fight
              /*  if (confirmSkip) {
                      window.alert(playerInfo.name + " has decided to skip this fight.");
                      // subtract money from playerInfo.money for skipping
                      playerInfo.money = playerInfo.money - 10;
                      playerStats.skippedRounds++;
                      console.log("Player's money", playerInfo.money);
                      break;
                  }
         if(promptFight === "" || promptFight === undefined) {
                  window.alert("You need to pick a valid option. Try again!");
                  fight();
          } */
  
      
        
    
        // function to generate a random numeric value
        var randomNumber = function(min, max) {

          var value = Math.floor(Math.random() * (max - min + 1) + min);
        
          return value;
        };

         

        function endGame() {
          var continueGame = window.prompt("Would you like to RETURN to your game, start a NEW game, visit the STORE, or END the game? (Please type one of the following: RETURN, NEW, STORE, or END)");

          continueGame = continueGame.toLowerCase();

          if (continueGame === "return") {
            return;
          }
          if (continueGame === "store") {
            shop();
          }   
          if (continueGame === "new") {
            newGame();
        }
          else {
            var confirmEnd = window.confirm("Click 'OK' to END game!");

            if(confirmEnd) {
              window.alert("Thanks for playing.  Goodbye!");
              exit()
            }
            if(!confirmEnd) {
              endGame();
            }
          }
        };
        
var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health += 100;
    this.money += 10;
    this.attack += 10;
  }, // comma!
    refillHealth: function() {
      if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
  }, // comma!
    upgradeAttack: function() {
      if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
  },
        

        
//console.log(playerInfo.name, playerInfo.health, playerInfo.attack),
        
var enemyInfo = [
{
  name: "Roborto",
  attack: randomNumber(10, 14)
},
{
  name: "Amy Android",
  attack: randomNumber(10, 14)
},
{
  name: "Robo Trumble",
  attack: randomNumber(10, 14)
}
]

      
// generate random damage value based on player's attack power
var damage = randomNumber(enemy.attack - 3, enemy.attack),
        
enemy.health = randomNumber(40, 60),

        function startGame() {
          playerInfo.reset();
            for(var i = 0; i < enemyInfo.length; i++) {
              if(playerInfo.health > 0) {

                playerStats.roundNumber = (i + 1);

               // window.alert("Welcome to Robot Gladiators! Round " + playerStats.roundNumber);
                var enemy = enemyNames[i];

                enemy.health = randomNumber();
                
                fight(enemy);

                if (i < enemyInfo.length - 1) {
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
          storePrompt = storePrompt.toLowerCase();

          if(storePrompt === "refill") {
            
            if(playerInfo.money > 4){
            playerInfo.money = playerInfo.money - 7;
            playerInfo.health = playerInfo.health + 50;
      
            window.alert(playerInfo.name + "'s health is now at " + playerInfo.health + " Player's money is now at " + playerInfo.money);
            return;
            }
      
            else {
              window.alert("Insufficient funds to REFILL health.  Please LEAVE the store and play again");
              return;
              }
            }
    
            if(storePrompt === "upgrade") {
              if(playerInfo.money > 9) {
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                playerInfo.attack = playerInfo.attack + 25;
                window.alert(playerInfo.name + "'s attack is now at " + playerInfo.attack + ". Player's money is now at " + playerInfo.money);
                return;
                }
                
                else {
                  window.alert("Insufficient funds to UPGRADE attack.  Please LEAVE the store to play again or quit the game");
                  store();
                }
                

            if(storePrompt === "leave") {
              return;
            }
              else {
                return;
              }
          }
        };
    

startGame();
