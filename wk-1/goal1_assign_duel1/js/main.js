//Judd Seger
//02-07-15
//Week #1 :: { Homework } - ANALYZE Duel #1


/**
 * Duel Fight Game - FINISHED                             //Comment Line
 * Date: 4/09/13                                              //Comment Line

 Assignment 1                                                 //Comment Line
 Part 1/3 of series                                               //Comment Line
 */

// self-executing function                          //Comment Line
(function(){            `                                //This line names the function

    console.log("FIGHT!!!");                            //This line displays fight on the browser console

    //player name
    var playerOneName = "Spiderman";                        //this line assigns the value of Spiderman to the playerOneName variable
    var playerTwoName = "Batman";                           //this line assigns the value of Batman to the playerTwoName variable

    //player damage
    var player1Damage = 20;                                    //this line assigns the value of 20 to the player1Damage variable
    var player2Damage = 20;                                     //this line assigns the value of 20 to the player2Damage variable

    //player health                                          //Comment Line
    var playerOneHealth = 100;                                      //this line assigns the value of 100 to the playerOneHealth variable
    var playerTwoHealth = 100;                                      //this line assigns the value of 100 to the playerTwoHealth variable

    //initiate round                                         //Comment Line
    var round=0;                                                //this line assigns the value od0 to the round variable

    function fight(){                                               // This is the fight function
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);   //this line alerts the name assigned to playerOneName
                                                                                                    //and the value assigned to playerOneHealth- also displays *START*
                                                                                                    //and the value of playerTwoName with the value of playerTwoHealth






        for (var i = 0; i < 10; i++)                                // This is a for loop that controls the ten rounds-
                                                                    // the i variable is assigned a value of 0
                                                                    //and incremented until the value is greater than 10
        {
           //random formula is - Math.floor(Math.random() * (max - min) + min);                //Comment Line
            var minDamage1 = player1Damage * .5;                    //This line makes the value od minDamage1 equal to the value of player1Damage * .5
            var minDamage2 = player2Damage * .5;                    //This line makes the value od minDamage2 equal to the value of player2Damage * .5


            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);      //Math.floor is then used to convert this floating point
                                                                                           // number to an integer between 0 and - 1
                                                                                           // Math.random returns a floating-point number between 0 and 1
                                                                                           //the result is then multiplied by the result of player1Damage subtracted from
                                                                                            //minDamage1 then added to minDamage1

            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);       //Math.floor is then used to convert this floating point
                                                                                            // number to an integer between 0 and - 1
                                                                                            // Math.random returns a floating-point number between 0 and 1
                                                                                            //the result is then multiplied by the result of player1Damage subtracted from
                                                                                            //minDamage1 then added to minDamage1

              //inflict damage                                       //Comment Line
            playerOneHealth-=f1;       //Ths line subtracts the value of playerOneHealth from f1 and assigns the value to playerOneHealth
            playerTwoHealth-=f2;        //Ths line subtracts the value of playerTwoHealth from f2 and assigns the value to playerTwoHealth

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);  //This line prints to the console the value of playerOneName

            //check for victor                                                           //Comment Line
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

        };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
        return result;
    };

    /*******  The program gets started below *******/                                    //Comment Line
    fight();

})();

