var happiness = 100;
var hunger = 100;
var money = 0;
var moneyclick = 1;

setInterval(function() {
    happiness = --happiness;
    document.getElementById("happiness").innerHTML = happiness;
}, 5000)
setInterval(function() {
    hunger = --hunger;
    document.getElementById("hunger").innerHTML = hunger;
}, 3000)

function petfloppa() {
    if (happiness + 5 <= 100) {
        happiness = happiness + 5;
        document.getElementById("happiness").innerHTML = happiness;
    } else {
        console.log("no")
    }
}
function moneyclik() {
    money = money + moneyclick;
    document.getElementById("money").innerHTML = money
}
