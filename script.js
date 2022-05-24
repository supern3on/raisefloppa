var happiness = 100;
var hunger = 100;
var money = 0;
var moneyclick = 5;
var alive = true;
var floppafood = 0;

setInterval(function() {
    if (happiness < 26) {
        moneyclick = 2;
        document.getElementById("bruh").innerHTML = "Floppa is not happy";
    } else if (happiness > 0 && alive == true) {
        happiness = --happiness;
        document.getElementById("happiness").innerHTML = happiness;
        document.getElementById("bruh").innerHTML = "";
    } else {
        console.log('no')
    }
}, 5000)
setInterval(function() {
    if (hunger < 31 && alive == true && floppafood > 0) {
        hunger = 100;
        floppafood = --floppafood;
        document.getElementById("hunger").innerHTML = hunger;
        document.getElementById("floppafood").innerHTML = floppafood;

    } else if (hunger > 0 && alive == true) {
        hunger = --hunger;
        document.getElementById("hunger").innerHTML = hunger;
    } else if (hunger == 0) {
        alive = false;
        happiness = 0
        document.getElementById("happiness").innerHTML = happiness;
    }
}, 3000)



function petfloppa() {
    if (happiness + 5 < 101 && alive == true) {
        happiness = happiness + 5;
        document.getElementById("happiness").innerHTML = happiness;
        document.getElementById("bruh").innerHTML = "";
    } else {
        console.log("no")
    }
}
function moneyclik() {
    if (alive == true) {
        money = money + moneyclick;
        document.getElementById("money").innerHTML = money
    }
}
function purchaseFood() {
    if (money > -1 && money - 50 > -1 && alive == true) {
        money = money - 50;
        floppafood = floppafood + 1;
        document.getElementById("floppafood").innerHTML = floppafood;
        document.getElementById("money").innerHTML = money;
    } else {
        console.log("no")
    }
}
