var hunger = 100;
var happiness = 100;
var money = 0;
var moneyclick = 4;
var alive = true;
var petdb = true;
var moneydb = true;
var floppafood = 0;
var FfoodDB = true;
var bowlwithfood = true;
var zerofoodbutTrue = true; 
/* hunger */
setInterval(function() {
    if (alive == true && hunger <= 25 && zerofoodbutTrue == true || alive == true && bowlwithfood == true && hunger <= 25) {
        hunger = 100;
        document.getElementById("hunger").innerHTML = "Hunger: " + hunger;
        bowlwithfood = false;
        if (zerofoodbutTrue == true) {zerofoodbutTrue = false} 
        else if (zerofoodbutTrue == false) {floppafood = --floppafood;}
        document.getElementById("fFoodtext").innerHTML = floppafood;
        document.getElementById("bowl").innerHTML = "Empty (to fill bowl buy floppa food)"
    } else if (alive == true && hunger - 1 >= 0) {
        hunger = --hunger;
        document.getElementById("hunger").innerHTML = "Hunger: " + hunger;
    } else if (hunger == 0 && alive == true) {
        alive = false;
        console.log('floppa is ded :(')
        document.getElementById("bruh").innerHTML = "your floppa died bruh";
        document.getElementById("money").innerHTML = "you have no money because u are evil >:("
    }
}, 1250)
/* happiness */
setInterval(function() {
    if (alive == true && happiness - 1 >= 0) {
        happiness = --happiness;
        document.getElementById("happiness").innerHTML = "Happiness: " + happiness;
    } else if (happiness <= 25 && alive == true) {
        moneyclick == 1;
        document.getElementById("bruh").innerHTML = "floppa is angry >:("
    }
}, 2500)

function petFloppa() {
    if (alive == true && happiness + 5 <= 100 && petdb == true) {
        happiness = happiness + 5;
        document.getElementById("happiness").innerHTML = "Happiness: " + happiness;
        petdb = false;
        setTimeout(function() {petdb = true;}, 2500)
    } else if (happiness + 5 > 100 && alive == true && petdb == true) {
        happiness = 100;
        document.getElementById("happiness").innerHTML = "Happiness: " + happiness;
        petdb = false;
        setTimeout(function() {petdb = true;}, 2500)
    }
}

function clickFloppa() {
    if (alive == true && moneydb == true) {
        money = money + moneyclick;
        moneydb = false;
        document.getElementById("money").innerHTML = "Money: " + money;
        setTimeout(function() {moneydb = true;}, 0500)
    } else {console.log('no')}
}

function purchaseFood() {
    if (alive == true && bowlwithfood == false && FfoodDB == true && money - 50 >= 0) {
        money = money - 50;
        document.getElementById("money").innerHTML = "Money: " + money;
        floppafood = ++floppafood;
        document.getElementById("fFoodtext").innerHTML = "You have: " + floppafood;
        FfoodDB = false;
        setTimeout(function() {FfoodDB = true;}, 0500)
    }
}
function fillBowl() {
    if (alive == true && floppafood >= 1 && bowlwithfood == false) {
        bowlwithfood == true;
        document.getElementById("bowl").innerHTML = "Has food";
        floppafood = --floppafood;
    }
}
