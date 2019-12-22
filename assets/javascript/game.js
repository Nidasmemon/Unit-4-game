 // Declaring variables to hold the score, and the number of wins and losses.
 var scoreNum = 0;
 var wins = 0;
 var losses = 0;

 
 // Declaring variables to hold the random numbers.
 var randomNumber = randGen();
 var crystalNum1 = randCrystal1();
 var crystalNum2 = randCrystal2();
 var crystalNum3 = randCrystal3();
 var crystalNum4 = randCrystal4();

 
 // Creating functions to generate random numbers.
 function randGen() {
     randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
     return randomNumber;
 }

 function randCrystal1() {
     crystalNum1 = Math.floor(Math.random() * 12) + 1;
     return crystalNum1;
 }

 function randCrystal2() {
     crystalNum2 = Math.floor(Math.random() * 12) + 1;
     return crystalNum2;
 }

 function randCrystal3() {
     crystalNum3 = Math.floor(Math.random() * 12) + 1;
     return crystalNum3;
 }

 function randCrystal4() {
     crystalNum4 = Math.floor(Math.random() * 12) + 1;
     return crystalNum4;
 }


 // Creating a function to restart the game.
 function restart() {
    randomNumber = randGen();
    crystalNum1 = randCrystal1();
    crystalNum2 = randCrystal2();
    crystalNum3 = randCrystal3();
    crystalNum4 = randCrystal4();
    scoreNum = 0;
    $("#score").text(scoreNum);
    $("#randomNum").text(randomNumber);


    console.log("Restart function has been called with these values.")
    console.log("Random Number: " + randomNumber);
    console.log("Crystal Num1: " + crystalNum1);
    console.log("Crystal Num2: " + crystalNum2);
    console.log("Crystal Num3: " + crystalNum3);
    console.log("Crystal Num4: " + crystalNum4);
}


$(document).ready(function() {


    // Assigning random numbers to start the game and to the crystals. 
    $("#randomNum").text(randomNumber);

    $("img#red").on("click", function() {
        scoreNum = scoreNum + crystalNum1;
        $("#score").text(scoreNum);

        if (scoreNum === randomNumber) {
            wins++;
            $("#win").text(wins);
            restart();
        }
     
        else if (scoreNum > randomNumber) {
            losses++;
            $("#lose").text(losses);
            restart();
        }
    });

    $("img#blue").on("click", function() {
        scoreNum = scoreNum + crystalNum2;
        $("#score").text(scoreNum);

        if (scoreNum === randomNumber) {
            wins++;
            $("#win").text(wins);
            restart();
        }
     
        else if (scoreNum > randomNumber) {
            losses++;
            $("#lose").text(losses);
            restart();
        }
    });

    $("img#orange").on("click", function() {
        scoreNum = scoreNum + crystalNum3;
        $("#score").text(scoreNum);

        if (scoreNum === randomNumber) {
            wins++;
            $("#win").text(wins);
            restart();
        }
     
        else if (scoreNum > randomNumber) {
            losses++;
            $("#lose").text(losses);
            restart();
        }
    });

    $("img#green").on("click", function() {
        scoreNum = scoreNum + crystalNum4;
        $("#score").text(scoreNum);;

        if (scoreNum === randomNumber) {
            wins++;
            $("#win").text(wins);
            restart();
        }
     
        else if (scoreNum > randomNumber) {
            losses++;
            $("#lose").text(losses);
            restart();
        }
    });


    console.log("Random Number: " + randomNumber);
    console.log("Crystal Num1: " + crystalNum1);
    console.log("Crystal Num2: " + crystalNum2);
    console.log("Crystal Num3: " + crystalNum3);
    console.log("Crystal Num4: " + crystalNum4);
    

});

