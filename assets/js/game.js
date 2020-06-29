
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 20;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack);

var fight = function() {
    // Alert users that they are starting the round
    
window.alert("Welcome to Robot Gladiators!");


//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
// Log a resulting message to the console so we know that it worked.
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
// Log a resulting message to the console so we know that it worked.
// put new code under this


//Player Attack//

enemyHealth = enemyHealth - playerAttack;

    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    window.alert(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    console.log(playerName + "'s current health is " + playerHealth + ". " + enemyName + "'s current health is " + enemyHealth + ".");
    window.alert(playerName + "'s current health is " + playerHealth + ". " + enemyName + "'s current health is " + enemyHealth + ".");


//Enemy Attack//
playerHealth = playerHealth - enemyAttack;

    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    window.alert(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    console.log(playerName + "'s current health is " + playerHealth + ". " + enemyName + "'s current health is " + enemyHealth + ".");
    window.alert(playerName + "'s current health is " + playerHealth + ". " + enemyName + "'s current health is " + enemyHealth + ".");


//Player Attack//
enemyHealth = enemyHealth - playerAttack;

    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    window.alert(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    console.log(playerName + "'s current health is " + playerHealth + ". " + enemyName + "'s current health is " + enemyHealth + ".");
    window.alert(playerName + "'s current health is " + playerHealth + ". " + enemyName + "'s current health is " + enemyHealth + ".");


//Player Attack//
enemyHealth = enemyHealth - playerAttack;

    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    window.alert(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    console.log(playerName + "'s current health is " + playerHealth + ". " + enemyName + "'s current health is " + enemyHealth + ".");
    window.alert(playerName + "'s current health is " + playerHealth + ". " + enemyName + "'s current health is " + enemyHealth + ".");


  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

};

fight();

