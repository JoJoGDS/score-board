let insert = document.getElementById('showGuest')
let insertHome = document.getElementById('showHome')
let count = 0

//On the Guest Side
function addOneGuest() {
    console.log(addOneGuest)
    count += 1
    insert.textContent = count
}

function addTwoGuest() {
    count += 2
    insert.textContent = count
}

function addThreeGuest() {
    count += 3
    insert.textContent = count
}

// On the Home Side Now
function addOneHome() {
    count += 1
    insertHome.textContent = count
}

function addTwoHome() {
    count += 2
    insertHome.textContent = count
}

function addThreeHome() {
    count += 3
    insertHome.textContent = count
}

