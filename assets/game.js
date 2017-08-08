    //Maximum number of guesses
    var guesses = 12;

    //number of wins
    var wins = 0;

    var losses = 0;

    //array where userGuess will be passed into
    var guessedLetters = ["_"];

    //div where main content of the game will be displayed
    var gameElement = document.getElementById("game");

    //div where guesseed letters will be displayed
    var guessElement = document.getElementById("yourGuesses");

    // div where number of guesses will be displayed
    var guessesmade = document.getElementById("guessesMade");

    //place holders for each letter that's not correctly guessed.
    var compGuessedLetters = ["_"];

   
    startOver();

    function startOver() {

        //list of words (African countries) for comouter to randomly choose
        var word = ["Algeria", "Angola", "Benin", "Botswana", "Burundi", "Cameroon",
            "Djibouti", "Egypt", "Eritrea", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea",
            "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania",
            "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Zambia", "Tanzania", "Zimbabwe"
        ];

        //computer randomly generated word.
        var computerGuess = word[Math.floor(Math.random() * word.length)];

        function win() { //display correctly guessed letter(s)
            document.getElementById("game").innerHTML = text.join("");

            //alert user that they have won game
            alert("The country is " + computerGuess + "! You Won!");

            //empty guessedLetters Array
            guessedLetters = ["_"];

            //restart game
            startOver();

        }

        //the below code replaces computer generated vounty
        var text = [];

        for (var i = 0; i < computerGuess.length; i++) {

            text.push(" _ ");
        }

        //get game element. Add text to game element.
        document.getElementById("game").innerHTML = text.join("");

        //On key function, waits for user to type input 
        document.onkeyup = function(event) {

            if (guesses > 0) {

                //Determines which key was pressed
                var userGuess = event.key;

                //add guessed letter to the "guessedLetters" array.
                guessedLetters.push(userGuess);

                //variable to create array without the last pushed string
                var slicedArray = guessedLetters.slice(0, guessedLetters.length - 1);

                //if user guessed a letter already      
                if (slicedArray.indexOf(userGuess) > 0) {

                    //alert user 
                    alert("you have guessed this letter already")

                    //remove repeated guess from guessedLetters array
                    guessedLetters = guessedLetters.slice(0, guessedLetters.length - 1);

                    //increment guesses since last guess does not count
                    guesses++;

                }

                for (var i = 0; i < computerGuess.length; i++) {

                    //If you have guessed a letter that is in the word
                    if (userGuess.toUpperCase() === computerGuess[i].toUpperCase()) {

                        //add letter at the approprate index
                        text[i] = computerGuess[i];

                        //display correctly guessed letter(s)
                        document.getElementById("game").innerHTML = text.join("");

                    }
                }

            }

            //if user guesses is more than zero.
            if (guesses > 0) {

                //decrease guess by 1
                guesses--;

                //print current number of guesses
                document.getElementById("guessElement").innerHTML = "Guesses Left: " + guesses;

            }

            //If user is out of guesses...
            if (guesses === 0) {

                //alert user that they have lost game
                alert("You Lost");

                //empty guessedLetters Array
                guessedLetters = ["_"];

                //reset guesses
                guesses = 10;

                //print current number of guesses
                document.getElementById("guessElement").innerHTML = "Guesses Left: " + guesses;

                //increase amount of losses by one
                losses++;

                //display score
                document.getElementById("score").innerHTML = "Wins: " + wins + " Losses " + losses;

                //reload page--
                startOver();

            }

            //if user has guessed all of the letters
            if (text.join("") === computerGuess) {

                setTimeout(win, 1000);

                //empty guessedLetters Array
                guessedLetters = ["_"];

                //reset guesses
                guesses = 10;

                //print current number of guesses
                document.getElementById("guessElement").innerHTML = "Guesses Left: " + guesses;

                wins++;

                //display score
                document.getElementById("score").innerHTML = "Wins: " + wins + " Losses " + losses;

            }


            //print guessed letters
            var guessesSofar = "Your Guesses So Far: " + "<p>";

            for (var i = 1; i < guessedLetters.length; i++) {

                guessesSofar += " " + guessedLetters[i] + " ";

            }

            guessesSofar += "</p>";
            document.getElementById("guessesMade").innerHTML = guessesSofar;


        }


    }
