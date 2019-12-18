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


// Declaring variables to hold the random numbers.
var randomNumber = randGen();
var crystalNum1 = randCrystal1();
var crystalNum2 = randCrystal2();
var crystalNum3 = randCrystal3();
var crystalNum4 = randCrystal4();


// Declaring variables to hold the score, and the number of wins and losses.
var scoreNum = 0;
var wins = 0;
var losses = 0;


$(document).ready(function() {


    // Assigning random numbers to start the game and to the crystals. 
    $("#randomNum").text(randomNumber);

    $("img#red").on("click", function() {
        $(this).val(crystalNum1);
        $("#score").text(crystalNum1);
    });

    $("img#blue").on("click", function() {
        $(this).val(crystalNum2);
        $("#score").text(crystalNum2);
    });

    $("img#orange").on("click", function() {
        $(this).val(crystalNum3);
        $("#score").text(crystalNum3);
    });

    $("img#green").on("click", function() {
        $(this).val(crystalNum4);
        $("#score").text(crystalNum4);
    });


    // Creating function to restart the game.
    function restart() {
        randGen();
        randCrystal1();
        randCrystal2();
        randCrystal3();
        randCrystal4();
    }

    
    // Determines the outcome of the game.
    if (scoreNum === randomNumber) {
        wins++;
        restart();
    }
 
    if (scoreNum > randomNumber) {
        losses++;
        restart();
    }


    console.log(randomNumber);
    console.log(crystalNum1);
    console.log(crystalNum2);
    console.log(crystalNum3);
    console.log(crystalNum4);

});

