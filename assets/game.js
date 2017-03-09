    
//Decalaring Global Variables

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

   
var guesses = 20;
var guessedLetters = ["_"];
var gameElement = document.getElementById("game");
var guessElement = document.getElementById("yourGuesses");
var guessesmade = document.getElementById("guessesMade");
var compGuessedLetters = ["_"];
    
//iterator for arrays
var i = 1;

//list of words (African countries) for comouter to randomly choose
var word = ["Algeria", "Angola", "Benin", "Botswana", "Burundi", "Cameroon", 
"Djibouti", "Egypt", "Eritrea", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea",
"Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania",
"Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria"];

//computer randomly generated word.
var computerGuess = word[Math.floor(Math.random() * word.length)];

 
var text = [];

      for (i = 0; i < computerGuess.length; i++) {
            
       text.push(" _ ");
    }



//get game element. Add text to game element.
document.getElementById("game").innerHTML = text.join("");
  


//On key function, waits for user to type input 
document.onkeyup = function(event) {

    if(guesses > 0){
        
            //Determines which key was pressed
            var userGuess = event.key;

            //add guessed letter to the "guessedLetters" array.
             guessedLetters.push(userGuess);
            
            //variable to create array without the last pushed string
            var slicedArray = guessedLetters.slice(0, guessedLetters.length-1);
          

            //if user guessed a letter already      
            if (slicedArray.indexOf(userGuess) > 0){ 

                  //alert user 
                  alert("you have guessed this letter already")

                  //remove repeated guess from guessedLetters array
                  guessedLetters = guessedLetters.slice(0, guessedLetters.length-1);
                 
                 //increment guesses since last guess does not count
                  guesses++;
                          
            }
            
         
         for (var i=0; i<computerGuess.length; i++){
                        
              //If you have guessed a letter that is in the word
              if (userGuess.toUpperCase() === computerGuess[i].toUpperCase()){

                  //add letter at the approprate index
                  text[i] = computerGuess[i];
                            
                  //display correctly guessed letter(s)
                  document.getElementById("game").innerHTML = text.join("");
                
              }       
          }
    
    }

                    



   //if user guesses is more than zero.
    if(guesses > 0){

         //decrease guess by 1
         guesses --;

         //print current number of guesses
         document.getElementById("guessElement").innerHTML = "Guesses Left: " + guesses;
            

    }
         


    //If user is out of guesses...
    if(guesses===0) { 

         //alert user that they have lost game
         alert("You Lost");

         //reload page
         location.reload();
         
        }


    //if user has guessed all of the letters
    if(text.join("") === computerGuess){

        //alert user that they have won game
       setTimeout(alert("The country is " + computerGuess +"! You Won!"), 5000);

        //display correctly guessed letter(s)
       document.getElementById("game").innerHTML = text.join("");
  
        //reload page
        location.reload();
        }



        //print guessed letters
        var guessesSofar = "Your Guesses So Far: " + "<p>";

        for (i = 1; i < guessedLetters.length; i++) {
            
             guessesSofar += " " + guessedLetters[i] + " ";
            
             }

              guessesSofar += "</p>";
             document.getElementById("guessesMade").innerHTML = guessesSofar;

     
    
}


        
