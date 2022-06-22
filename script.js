
            this.amount = ++this.amount;
            money.cash = money.cash - this.cost;
            console.log(`Bought ${this.name} for ${this.cost}`)
            document.getElementById('cash').innerHTML = `Money: ${money.cash}`
            if(this.name == 'Scratching Post') {
                document.getElementById('scratchbuybtn').style.display = 'none';
                document.getElementById('scratchinv').innerHTML = `Scratching Post ($75) - ${this.amount}`
            }
            if(this.name == 'Cool Hat') {
                money.click = money.click * 2;
                document.getElementById('coolhatbtn').style.display = 'none';
                document.getElementById('coolhatinv').innerHTML = `Cool Hat ($250) - ${this.amount}`
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
var coolhat = new shopItem('Cool Hat', 250)

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
                floppa.alive == true;
                localStorage.removeItem('floppa')
                floppa.hunger = 100
                floppa.mood = 100
                floppa.alive = true
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
            document.getElementById('floppahappyimg').setAttribute('src', 'https://raw.githubusercontent.com/supern3on/raisefloppa/main/img/floppamad.PNG')
            document.getElementById('floppahappyimg').setAttribute('alt', 'Floppa is angry')
            document.getElementById('floppahappyimg').setAttribute('title', 'Floppa is angry')
 
        money.click = money.click * 2;
        document.getElementById('scratchbuybtn').style.display = 'none';
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
    Object.assign(coolhat, {buy: function() {
        if(money.cash >= coolhat.cost && floppa.alive == true) {
            coolhat.amount = ++coolhat.amount;
            money.cash = money.cash - coolhat.cost;
            console.log(`Bought ${coolhat.name} for ${coolhat.cost}`)
            document.getElementById('cash').innerHTML = `Money: ${money.cash}`
            document.getElementById('coolhatbtn').style.display = 'none';
            document.getElementById('coolhatinv').innerHTML = `Cool Hat ($250) - ${coolhat.amount}`
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
    localStorage.setItem('coolhat', JSON.stringify(coolhat))
    console.log('Saved')
}

function deleteProgress() {
    if(confirm('Delete Progress? This will reset everything.') == true) {
        localStorage.clear()
        document.location.reload()
    }
}
document.getElementById('foodinv').innerHTML = `Floppa Food ($50) - ${food.amount}`
document.getElementById('coolhatinv').innerHTML = `Cool Hat ($250) - ${coolhat.amount}`
document.getElementById('scratchinv').innerHTML = `Scratching Post ($75) - ${scratch.amount}`
