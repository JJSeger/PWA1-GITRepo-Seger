//Judd Seger
//02-19-15
//Week #3 :: { Homework } - ANALYZE Duel #3


//self-executing function
(function(){
    console.log("FIGHT!!!");
//players
    var player1 = {
        name: "kabal",
        damage: 20,
        health: 100
    };
    var player2 = {
        name: "kratos",
        damage: 20,
        health: 100
    };
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
    btn.onclick = function(e){
        console.log("inside the fight function");
// alert(player1.name + ":" + player1.health + " *START* " + player2.name + ":" + player2.health);
        var minDamage1 = player1.damage * .5;
        var minDamage2 = player2.damage * .5;
        var f1 = Math.floor(Math.random() * (player1.damage - minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random() * (player2.damage - minDamage2) + minDamage2);
//console.log(f1);
//console.log(f2);
//inflict damage
        player1.health -= f1;
        player2.health -= f2;
//console.log(player1Health);
//console.log(player2Health);
        console.log(player1.name + ":" + player1.health + " " + player2.name + ":" + player2.health);
        var results = winnerCheck();
        console.log(results);
        if(results==="no winner"){
            round++;
            kabal.innerHTML = player1.name + ":" + player1.health;
            kratos.innerHTML = player2.name + ":" + player2.health;
            rnd.innerHTML = " *ROUND " + round + " OVER* ";
// alert(player1.name + ":" + player1.health + " *ROUND " + round + " OVER* " + player2.name + ":" + player2.health);
        }else{
// alert(results);
            scores.innerHTML = results;
            btn.innerHTML = "DONE!"
        };
        e.preventDefault();
        return false;
    };
    function winnerCheck(){
        console.log("in winnerCheck Fn");
        if (player1.health < 1 && player2.health < 1){
            result = "You Both Die";
        }else if(player1.health < 1){
            result = player2.name + " WINS!!!";
        }else if(player2.health < 1){
            result = player1.name + " WINS!!!";
        }else{
            result="no winner";
        };
        return result;
    };
    /******************The fight begins************************/
    console.log("program starts");
})();