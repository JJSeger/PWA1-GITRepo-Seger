//Judd Seger
//02-19-15
//Week #3 :: { Homework } - ANALYZE Duel #3


//Duel Fight Game


// self-executing function                          //Comment Line
(function() {                                            //This line names the function

    console.log("FIGHT!!!");                            //This line displays fight on the browser console
//both payers object arrays
    var fighters = [{
        name: "Kratos",
        damage: 20,
        health: 100
    },
        {
            name: "Kabal",
            damage: 20,
            health: 100
        }];



    //round
    var round = 0;

    var scores = document.getElementById('scores');
    var kabal = document.getElementById('kabal');
    var kratos = document.getElementById('kratos');
    var ftBtn = document.getElementById('fight_btn');

    var rnd = ftBtn.firstElementChild;
    var btn = ftBtn.lastElementChild;


    console.log(scores);
    console.log(kabal);
    console.log(kratos);
    console.log(ftBtn);
    console.log(rnd);

    kabal.innerHTML = player1.name + ":" + player1.health;

    kratos.innerHTML = player2.name + ":" + player2.health;


    btn.onClick = function(e){
    console.log("inside the fight function");




        // alert(player 1.name + ":" + player1.health + "*START*" + player2.name+ ":" + player2.health);

        var minDamage1 = player1.damage*.5;
        var minDamage2 = player2.damage*.5;


//figures out the damage
        var f1 = Math.floor(Math.random() * (player1.damage -  minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random() * (player2.damage -  minDamage2) + minDamage2);




