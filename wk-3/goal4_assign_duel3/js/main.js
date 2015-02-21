//Judd Seger
//02-19-15
//Week #3 :: { Homework } - ANALYZE Duel #3


//Duel Fight Game


// self-executing function                          //Comment Line
(function() {                                            //This line names the function

    console.log("FIGHT!!!");                            //This line displays fight on the browser console

    //fighters defined
    var fighter1_txt = document.getElementById("kr").getElementById("p");
    var fighter2_txt = document.getElementById("ka").getElementById("p");

    var round_txt = document.getElementById("h5");
    var button = document.getElementById("fight_btn");

    //Click Event
    button.addEventListener("click", fight, false);


    //both payers object arrays
    var fighters = [{
        name: "Kabal",
        damage: 20,
        health: 100
    },
        {
            name: "Kabal",
            damage: 20,
            health: 100
        }];


    //initializing round
    var round = 1;

    // initialing DOM innerHTML text for top of HTML page
    round_txt.innerhtml = "Click FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML = fighters[0].name + ":     " + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":     " + fighters[1].health;






//FIGHT function

function fight() {                                               // This is the fight function

        fighter1_txt.innerHTML = fighters[0].name + ":     " + fighters [0].health;
        fighter2_txt.innerHTML = fighters[1].name + ":     " + fighters [1].health;

        //figures out the damage
        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);    //declares variable f1 - Math.floor is then used to convert this floating point
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);                                                                               // number to an integer between 0 and - 1


        //inflict damage                                       //Comment Line
        fighters [0].health -= f1;       //Ths line subtracts the value of fighters[0] from f1 and assigns the value to fighters[0].health
        fighters [1].health -= f2;        //Ths line subtracts the value of fighters[1] from f2 and assigns the value to fighters[1].health

        console.log(fighters[0].health, fighters[1].health);

        //check for victor                                                           //Comment Line
        var result = winnerCheck();                                 //This line assigns the value of the function winnerCheck to the variable result
        console.log(result);                                        //This line prints the value of the variable result to the console


        round_txt.innerHTML = "ROUND #" + "Results:";
        round++;

        if (result === "no winner")                                   //This is an if else statement that checks to see if the result of the game is no winner

        {
            fighter1_txt.innerHTML = fighters[0].name + ":     " + fighters[0].health;
            fighter2_txt.innerHTML = fighters[1].name + ":     " + fighters[1].health;


        }
        else {
            fighter1_txt.innerHTML = result;
            fighter2_txt.innerHTML = "";
            document.getElementById(".buttonblue").innerHTML = 'DONE!!';
        }
        ;

    fight();


    winnerCheck();






    function winnerCheck() {                                         //This is the function winnerCheck
    var result = "no winner";                                     //This line assigns the value of "no winner" to the local variable result
    if (fighters[0].health < 1 && fighters[1].health < 1)                 //nested if else statement that checks to see if the value of fighter[0].health
    // and fighters[1].health are less than 1
    {                                                           //curly brace
        result = "You Both Die";                                // gives the value of "You both Die" to the variable result if the prior check comes back true
    }
    else if (fighters[0].health < 1) {                             //second part of the nested if else statement that checks to see if the value of playerOneHealth is less than 1
        result = fighters[1].name + " WINS!!!";                        // assigns the value of fighterOne and the word "WINS" to the variable result if the prior check comes back true
    }
    else if (fighters[1].health < 1)                         //third part of the nested if else statement that checks to see if the value of playerTwoHealth is less than 1

    {                                                           // curly brace
        result = fighters[0].name + " WINS!!!";                       //assigns the value of fighters[1] and the word "WINS" to the local variable result if the prior check comes back true
    }                                                          //curly brace and semicolon
    return result;// returns the value of the local variable result


     // Calls the fight function

     //Calls th winnerCheck function

});
};









