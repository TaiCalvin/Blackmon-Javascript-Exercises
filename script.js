//Question 1
var enter = "enter a number"
var name = prompt(enter);
alert("Thank you.");
var total = 0;
for (var i = 1; i<=name; i++) {
 total=total+i
}
   console.log("the total is " + total);

// End of question 1

// Question 2
var game = "Do you want to play a game?";
var again = "Do you want to play again";
var playGame = prompt(game);
var word = "Enter a word";
var i = [];

if(playGame == "yes") {
do {
  var playGame;
 var enterWord = prompt(word);
 i += enterWord + " ";
  var playAgain = prompt(again);

} while (playAgain == "yes");

console.log(i);
}
else if (playGame == "no") {

alert("Thanks anyways");

}

// End of  Question 2

// Question 3 //

var print = "Would you like to print your name?";
var printName = prompt(print);
var input = "What is your name?";
var again = "Would you like to print this again?";
var i = [];

if (printName == "yes"){

  var userName = prompt(input);
  var printAgain = prompt(again);
}
else if (printName == "no"){
alert("Thanks anyway.");
}

while (printAgain == "yes") {
i += "!";
var printAgain = prompt(again);
}

console.log("Hello. My name is " + userName + i);


// End Question 3 //

// Question 4

var time = "what time of day is it? (morning, noon, evening)";
var day = prompt(time);
var breakfast = "Since it is morning, you should be eating breakfast. We suggest eggs and toast.";
var lunch = "Since it is noon, you should be eating lunch. We suggest you eat a salad.";
var dinner = "Since it is evening, you should be eating dinner. We suggest chicken and rice.";


// breakfast
if (day=="morning"){
  console.log(breakfast);
}
// dinner
else if (day=="evening") {
  console.log(dinner);
}
// lunch
else {
  console.log(lunch);
}
