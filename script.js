var happiness = 5;
var hunger = 5;
var money = 0;
var moneyclick = 1;
var alive = true;

setInterval(function() {
    if (happiness > 0 && alive == true) {
        happiness = --happiness;
        document.getElementById("happiness").innerHTML = happiness;
    } else {
        console.log('no')
    }
}, 5000)
setInterval(function() {
    if (hunger > 0 && alive == true) {
        hunger = --hunger;
        document.getElementById("hunger").innerHTML = hunger;
    } else if (hunger == 0) {
        alive = false;
        happiness = 0
        document.getElementById("happiness").innerHTML = happiness;
    }
}, 3000)

function petfloppa() {
    if (happiness + 5 <= 100 && alive == true) {
        happiness = happiness + 5;
        document.getElementById("happiness").innerHTML = happiness;
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
