var stats = {
    hunger: 100,
    mood: 100
}
var money = {
    click: 1,
    cash: 0,
    db: true
}
var alive = true;
var moodDB = true;
var food = {
    food: 0,
    bowl: true,
    foodDB: true
}
var coolhat = 0
setInterval(function() {
    if (stats.hunger <= 35 && food.bowl == true && alive == true) {
        food.bowl = false;
        stats.hunger = 100;
        document.getElementById("floppabowl").innerHTML = "empty";
        document.getElementById("hunger").innerHTML = "Hunger: " + stats.hunger;
    } else if (stats.hunger > 0 && alive == true) {
        stats.hunger = --stats.hunger;
        document.getElementById("hunger").innerHTML = "Hunger: " + stats.hunger;
    } else if (stats.hunger == 0 && alive == true) {
        alive = false;
    }
}, 1000)
setInterval(function() {
    if (stats.mood > 0 && alive == true) {
        if(coolhat==1){money.click=3}else{money.click=1}
        stats.mood = --stats.mood;
        document.getElementById("mood").innerHTML = "Happiness: " + stats.mood;
    } 
    if (stats.mood <= 25 && alive == true && money.click > 1) {
        money.click = 1;
    }
}, 3000)

function clickFloppa() {
    if (money.db == true && alive == true) {
        money.db = false;
        money.cash = money.cash + money.click
        document.getElementById("cash").innerHTML = "Money: " + money.cash
        setTimeout(function () {money.db = true;}, 0350)
    }
}

function petFloppa() {
    if (stats.mood + 5 <= 100 && alive == true && moodDB == true) {
        moodDB = false;
        stats.mood = stats.mood + 5;
        document.getElementById("mood").innerHTML = "Happiness: " + stats.mood;
        setTimeout(function() {moodDB = true}, 3000)
    } else if (stats.mood + 5 >= 101 && alive == true && moodDB == true) {
        moodDB = false;
        stats.mood = 100;
        document.getElementById("mood").innerHTML = "Happiness: " + stats.mood;
        setTimeout(function() {moodDB = true}, 3000)
    } else {}
}

function purchaseFood() {
    if (food.foodDB == true && alive == true && money.cash >= 50) {
        food.food = ++food.food;
        money.cash = money.cash - 50;
        document.getElementById("floppafood").innerHTML = "You have: " + food.food;
        document.getElementById("cash").innerHTML = "Money: " + money.cash;
        console.log(food.food)
    }
}

function fillBowl() {
    if (food.food > 0 && food.bowl == false && alive == true) {
        food.bowl = true;
        document.getElementById("floppabowl").innerHTML = "full";
        food.food = --food.food;
        document.getElementById("floppafood").innerHTML = "You have: " + food.food;
    } else {}
}

function purchaseHat() {
    if (coolhat == 0 && money.cash >= 250 && alive == true) {
        coolhat = 1;
        money.cash = money.cash - 250
        money.click = 3
        document.getElementById("coolhat").innerHTML = "You have: " + coolhat 
        document.getElementById("cash").innerHTML = "Money: " + money.cash
        document.getElementById("hatbtn").style = "display: none;"
    }
}
