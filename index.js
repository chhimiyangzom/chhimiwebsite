document.query
function myDice(){

    var n = Math.random();
    console.log(n);
    n = n * 6;
    n = Math.floor (n)+1;
    //return n;
    roll.innerhtml = n;
    }
    //roll.innerhtml = myDice();