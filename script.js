console.log('github.com/supern3on/raisefloppa')
let bool = true;
var money = {
    cash: 0,
    db: true,
    clicked: 0,
    click: 1
}

var floppa = {
    hunger: 100,
    mood: 100,
    petdb: true,
    alive: true
}

var foodbowl = true;

function clickFloppa() {
    if(floppa.alive == true && money.db == true) {
        money.db = false;
        money.clicked += money.click;
        if(bool == true) {
            bool = false;
            var newbtn = document.createElement('button');
            var newbr = document.createElement('br');
            newbtn.innerHTML = 'Collect Cash'
            document.getElementById('main').appendChild(newbtn)
            document.getElementById('main').appendChild(newbr)
            document.getElementById('main').insertBefore(newbtn, document.getElementById('floppatitle'))
            document.getElementById('main').insertBefore(newbr, document.getElementById('floppatitle'))
            newbtn.onclick = function() {
                money.cash += money.clicked;
                money.clicked = 0;
                newbtn.remove()
                newbr.remove()
                document.getElementById('cash').innerHTML = `Money: ${money.cash}`;
                bool = true;
            }
        }
        setTimeout(function() {money.db = true}, 0300)
        console.log('click')
    }
}

function petFloppa() {
    if(floppa.alive == true && floppa.petdb == true && floppa.mood + 5 <= 100) {
        if(floppa.mood <= 25 && floppa.mood + 5 >= 25) {
            document.getElementById('floppaimg').setAttribute('src', 'https://raw.githubusercontent.com/supern3on/raisefloppa/main/img/floppahappy.PNG')
            document.getElementById('floppaimg').setAttribute('alt', 'Floppa is happy')
            document.getElementById('floppaimg').setAttribute('title', 'Floppa is happy')
        }
        console.log('pet')
        floppa.petdb = false;
        floppa.mood = floppa.mood + 5;
        document.getElementById('mood').innerHTML = `Happiness: ${floppa.mood}`
        setTimeout(function() {floppa.petdb = true}, 3000)
    } else if(floppa.alive == true && floppa.petdb == true) {
        console.log('pet')
        floppa.petdb = false;
        floppa.mood = 100;
        document.getElementById('mood').innerHTML = `Happiness: ${floppa.mood}`
        setTimeout(function() {floppa.petdb = true}, 3000)
    }
}

class shopItem {
    constructor(name, cost) {
        this.name = name
        this.cost = cost
        this.amount = 0
    }
    buy() {
        if(money.cash >= this.cost && floppa.alive == true) {
            this.amount = ++this.amount;
            money.cash = money.cash - this.cost;
            console.log(`Bought ${this.name} for ${this.cost}`)
            document.getElementById('cash').innerHTML = `Money: ${money.cash}`
            if(this.name == 'Scratching Post') {
                document.getElementById('scratchbuybtn').style.display = 'none';
                document.getElementById('scratchinv').innerHTML = `Scratching Post ($75) - ${this.amount}`
            }
            if(this.name == 'Food') {
                document.getElementById('foodinv').innerHTML = `Floppa Food ($50) - ${this.amount}`
            }
        }
    }
    use() {
        if(this.amount >= 1) {
            if(this.name == 'Food' && foodbowl == false) {
                this.amount = --this.amount;
                foodbowl = true;
                document.getElementById('floppabowl').innerHTML = 'Full'
                console.log(`Filled bowl (${this.amount})`)
                document.getElementById('foodinv').innerHTML = `Floppa Food ($50) - ${this.amount}`
            }
            if(this.name == 'Scratching Post') {
                money.cash = money.cash + 30;
                console.log('Floppa used scratching post and gave you $30');
                document.getElementById('cash').innerHTML = `Money: ${money.cash}`
            }
        }
    }
}

var food = new shopItem('Food', 50)
var scratch = new shopItem('Scratching Post', 75)

setInterval(function() {
    if(floppa.alive == true) {
        if(floppa.hunger <= 35 && foodbowl == true) {
            setTimeout(function(){scratch.use()}, 17000)
            foodbowl = false;
            document.getElementById('floppabowl').innerHTML = 'Empty'
            floppa.hunger = 100;
            document.getElementById('hunger').innerHTML = `Hunger: ${floppa.hunger}`
            console.log('Floppa ate')
        }
        if(floppa.hunger > 0) {
            floppa.hunger = --floppa.hunger;
            document.getElementById('hunger').innerHTML = `Hunger: ${floppa.hunger}`
        } else if(floppa.hunger == 0) {
            floppa.alive = false;
            document.getElementById('main').innerHTML = ''
            var newelem = document.createElement('p')
            newelem.innerHTML = 'your floppa died'
            document.getElementById('main').appendChild(newelem)
            var newbtn = document.createElement('button')
            newbtn.innerHTML = 'Restart'
            document.getElementById('main').appendChild(newbtn)
            newbtn.onclick = () => {
                localStorage.clear()
                document.location.reload()
                return false;
            }
        }
    }
}, 1000)

setInterval(function() {
    if(floppa.alive == true) {
        if(floppa.mood > 0) {
            floppa.mood = --floppa.mood;
            document.getElementById('mood').innerHTML = `Happiness: ${floppa.mood}`
        }
        if(floppa.mood <= 25) {
            if(money.click > 1) {
                money.click = money.click / 2;
            }
            document.getElementById('floppaimg').setAttribute('src', 'https://raw.githubusercontent.com/supern3on/raisefloppa/main/img/floppamad.PNG')
            document.getElementById('floppaimg').setAttribute('alt', 'Floppa is angry')
            document.getElementById('floppaimg').setAttribute('title', 'Floppa is angry')
        }
    }
}, 5000)

// tips
var i = 0;

i = Math.floor(Math.random() * 3)

if(document.getElementById('tip')) {
    if(i == 0) {
        document.getElementById('tip').innerHTML = 'Tip: Fill the bowl with Floppa Food to feed Floppa'
    }
    if(i == 1) {
        document.getElementById('tip').innerHTML = 'Tip: Click Floppa for money'
    }
    if(i == 2) {
        i == 0;
        document.getElementById('tip').innerHTML = "Tip: Keep floppa's happiness to more than 25"
    }
}

setInterval(function() {
    i = Math.floor(Math.random() * 3)
    if(document.getElementById('tip')) {
        if(i == 0) {
            document.getElementById('tip').innerHTML = 'Tip: Fill the bowl with Floppa Food to feed Floppa'
        }
        if(i == 1) {
            document.getElementById('tip').innerHTML = 'Tip: Click Floppa for money'
        }
        if(i == 2) {
            i == 0;
            document.getElementById('tip').innerHTML = "Tip: Keep floppa's happiness to more than 25"
        }
    }
}, 6000)

if(localStorage.getItem('floppa') && localStorage.getItem('cash') && localStorage.getItem('bowl') && localStorage.getItem('food') && localStorage.getItem('scratch')) {
    floppa = JSON.parse(localStorage.getItem('floppa'))
    money = JSON.parse(localStorage.getItem('cash'))
    foodbowl = JSON.parse(localStorage.getItem('bowl'))
    food = JSON.parse(localStorage.getItem('food'))
    scratch = JSON.parse(localStorage.getItem('scratch'))
    if(money.clicked > 0 && bool == true) {
        bool = false;
        var newbtn = document.createElement('button')
        newbtn.innerHTML = 'Collect Cash'
        var newbr = document.createElement('br')
        document.getElementById('main').appendChild(newbtn)
        document.getElementById('main').appendChild(newbr)
        document.getElementById('main').insertBefore(newbtn, document.getElementById('floppatitle'))
        document.getElementById('main').insertBefore(newbr, document.getElementById('floppatitle'))
        newbtn.onclick = function() {
            newbtn.remove()
            newbr.remove()
            money.cash += money.clicked;
            money.clicked = 0;
            bool = true;
            document.getElementById('cash').innerHTML = `Money: ${money.cash}`
        }
    }
    Object.assign(food, {buy: function() {
        if(money.cash >= food.cost && floppa.alive == true) {
            food.amount = ++food.amount;
            money.cash = money.cash - food.cost;
            console.log(`Bought ${food.name} for ${food.cost}`)
            document.getElementById('cash').innerHTML = `Money: ${money.cash}`
            document.getElementById('foodinv').innerHTML = `Floppa Food ($50) - ${food.amount}`
        }
    }})
    Object.assign(scratch, {buy: function() {
        if(money.cash >= scratch.cost && floppa.alive == true) {
            scratch.amount = ++scratch.amount;
            money.cash = money.cash - scratch.cost;
            console.log(`Bought ${scratch.name} for ${scratch.cost}`)
            document.getElementById('cash').innerHTML = `Money: ${money.cash}`
            document.getElementById('scratchbuybtn').style.display = 'none';
            document.getElementById('scratchinv').innerHTML = `Scratching Post ($75) - ${scratch.amount}`
        }
    }})
    Object.assign(food, {use: function() {
        if(food.amount >= 1) {
            this.amount = --this.amount;
                foodbowl = true;
                document.getElementById('floppabowl').innerHTML = 'Full'
                console.log(`Filled bowl (${this.amount})`)
                document.getElementById('foodinv').innerHTML = `Floppa Food ($50) - ${this.amount}`
        }
    }})
    Object.assign(scratch, {use: function() {
        money.cash = money.cash + 30;
        console.log('Floppa used scratching post and gave you $30');
        document.getElementById('cash').innerHTML = `Money: ${money.cash}`
    }})
}

document.getElementById('hunger').innerHTML = `Hunger: ${floppa.hunger}`
document.getElementById('mood').innerHTML = `Happiness: ${floppa.mood}`
document.getElementById('cash').innerHTML = `Money: ${money.cash}`

function saveProgress() {
    localStorage.setItem('floppa', JSON.stringify(floppa))
    localStorage.setItem('cash', JSON.stringify(money))
    localStorage.setItem('bowl', JSON.stringify(foodbowl))
    localStorage.setItem('food', JSON.stringify(food))
    localStorage.setItem('scratch', JSON.stringify(scratch))
    console.log('Saved')
}

function deleteProgress() {
    if(confirm('Delete Progress? This will reset everything.') == true) {
        localStorage.clear()
        document.location.reload()
        return false;
    }
}
document.getElementById('foodinv').innerHTML = `Floppa Food ($50) - ${food.amount}`
document.getElementById('scratchinv').innerHTML = `Scratching Post ($75) - ${scratch.amount}`
document.getElementById('cash').innerHTML = `Money: ${money.cash}`
if(scratch.amount >= 1) {
    document.getElementById('scratchbuybtn').style.display = 'none';
}
