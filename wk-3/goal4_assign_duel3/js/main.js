//Judd Seger
//02-19-15
//Week #3 :: { Homework } - ANALYZE Duel #3


//Duel Fight Game


// self-executing function                          //Comment Line
(function(){                                            //This line names the function

    console.log("FIGHT!!!");                            //This line displays fight on the browser console

    //players arrays
    var playerOneArray = ["Kabal",20,100];                        //This line creates an array called playerOneArray and creates an Index of three items
    var playerTwoArray= ["Kratos",20,100];                          //This line creates an array called playerTwoArray and creates an Index of three items


        //players names
    var fighterOne = playerOneArray[0];                     //this line creates a variable called fightOne and assigns it the value of the 0 index in the playerOneArray
    var fighterTwo = playerTwoArray [0];                   //this line creates a variable called fightTwo and assigns it the value of the 0 index in the playerTwoArray




    //player damage
    var player1Damage = playerOneArray[1];                                    //this line declares and assigns the value of 20 to the player1Damage global variable
    var player2Damage = playerTwoArray[1];                                     //this line declares and assigns the value of 20 to the player2Damage global variable

    //player health                                          //Comment Line
    var playerOneHealth = playerOneArray[2];                                      //this line declares and assigns the value of 100 to the playerOneHealth global variable
    var playerTwoHealth = playerTwoArray[2];                                      //this line declares and assigns the value of 100 to the playerTwoHealth global variable

    //initiate round                                         //Comment Line
    var round=0;                                                //this line declares and assigns the value of 0 to the global variable round

    function fight(){                                               // This is the fight function
        alert(fighterOne+":"+playerOneHealth +"  *START*  "+ fighterTwo+":"+ playerTwoHealth);   //This line alerts the value of the global variable fighterOne,
                                                                                                    //as well as a semi colon, the value of the global variable playerOneHealth
                                                                                                    //the words "*START*" , the value of the global variable fighterTwo, semicolon
                                                                                                    // and the value of the global variable playerTwoHealth






        for (var i = 0; i < 10; i++)                                // This is a for loop that controls the ten rounds-
            // the local variable "i" is assigned a value of 0
            //and incremented until the value is greater than 10
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);                //Comment Line
            var minDamage1 = player1Damage * .5;                    //This line declares and makes the value of the local variable minDamage1 equal to the value of the global variable player1Damage * .5
            var minDamage2 = player2Damage * .5;                    //This line declares and makes the value of the local variable minDamage2 equal to the value of the global variable player2Damage * .5


            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);      //declares variable f1 - Math.floor is then used to convert this floating point
                                                                                           // number to an integer between 0 and - 1
                                                                                           // Math.random returns a floating-point number between 0 and 1
                                                                                           //the result is then multiplied by the result of player1Damage subtracted from
            //minDamage1 then added to minDamage1

            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);       //declares variable f2 -Math.floor is then used to convert this floating point
                                                                                            // number to an integer between 0 and - 1
                                                                                            // Math.random returns a floating-point number between 0 and 1
                                                                                            //the result is then multiplied by the result of player2Damage subtracted from
                                                                                            //minDamage2 then added to minDamage2

            //inflict damage                                       //Comment Line
            playerOneHealth-=f1;       //Ths line subtracts the value of playerOneHealth from f1 and assigns the value to playerOneHealth
            playerTwoHealth-=f2;        //Ths line subtracts the value of playerTwoHealth from f2 and assigns the value to playerTwoHealth

            console.log(fighterOne+": "+playerOneHealth + " " + fighterTwo+":"+playerTwoHealth);  //This line prints to the console the value of fighterOne ":" playerOneHealth
                                                                                                   //then the value of fighterTwo semicolon and the value of playerTwoHealth

            //check for victor                                                           //Comment Line
            var result = winnerCheck();                                 //This line assigns the value of the function winnerCheck to the variable result
            console.log(result);                                        //This line prints the value of the variable result to the console
            if (result==="no winner")                                   //This is an if else statement that checks to see if the result of the game is no winner

            {                                                               //curly brace
                round++;                                                        //This  line increments the round variable
                alert(fighterOne+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+fighterTwo+":"+playerTwoHealth);     //This line alerts the value of fighterOne, semicolon,
                                                                                                                                // as well as the value of playerOneHealth, the word and symbol "*ROUND"
                                                                                                                                // and the value of the round variable, the word "OVER", the symbol
                                                                                                                                // "*"  the value of fighterTwo, semicolon, and the value of playerTwoHealth

            } else{                                                  //this is the else part of the if else statement
                alert(result);                                     //this line alerts the value of the variable result
                break;                                             // this line stops the if else statement
            };

        };
    };

    function winnerCheck(){                                         //This is the function winnerCheck
        var result="no winner";                                     //This line assigns the value of "no winner" to the local variable result
        if (playerOneHealth<1 && playerTwoHealth<1)                 //nested if else statement that checks to see if the value of playerOneHealth
        // and playerTwoHealth are less than 1
        {                                                           //curly brace
            result = "You Both Die";                                // gives the value of "You both Die" to the variable result if the prior check comes back true
        }
        else if(playerOneHealth<1){                             //second part of the nested if else statement that checks to see if the value of playerOneHealth is less than 1
            result =fighterOne+" WINS!!!"                        // assigns the value of fighterOne and the word "WINS" to the variable result if the prior check comes back true
        }
        else if (playerTwoHealth<1)                         //third part of the nested if else statement that checks to see if the value of playerTwoHealth is less than 1

        {                                                           // curly brace
            result = fighterTwo+" WINS!!!"                       //assigns the value of fighterTwo and the word "WINS" to the local variable result if the prior check comes back true
        };                                                          //curly brace and semicolon
        return result;                                              // returns the value of the local variable result
    };                                                               //curly brace and semicolon

    /*******  The program gets started below *******/                                    //Comment Line
    fight();                                    // Calls the fight function

})();                                               //Ends code

