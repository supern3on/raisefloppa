var stats = {
    hunger: 100,
    mood: 100
}
var money = [0, 3, true]
var alive = true;
var moodDB = true;
var food = {
    food: 0,
    bowl: false,
    foodDB: true
}
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
        money[1] = 3;
        stats.mood = --stats.mood;
        document.getElementById("mood").innerHTML = "Happiness: " + stats.mood;
    } 
    if (stats.mood <= 25 && alive == true) {
        money[1] = 2;
    }
}, 3000)

function clickFloppa() {
    if (money[2] == true && alive == true) {
        money[2] = false;
        money[0] = money[0] + money[1]
        document.getElementById("cash").innerHTML = "Money: " + money[0]
        setTimeout(function () {money[2] = true;}, 0400)
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
    if (food.foodDB == true && alive == true && money[0] - 50 >= 0) {
        food.food = ++food.food;
        money[0] = money[0] - 50;
        document.getElementById("floppafood").innerHTML = "You have: " + food.food;
        document.getElementById("cash").innerHTML = "Money: " + money[0];
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
