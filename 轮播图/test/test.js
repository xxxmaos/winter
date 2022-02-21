let left = document.querySelector("#left")
let right = document.querySelector("#right")
let ul = document.querySelector("ul")
let lis = document.querySelector("li")
let classes = ["slide", "slide", "slide"]

function rightClick() {
    let lastClass = classes.pop()
    classes.unshift(lastClass)
    for (let i = 0; i < lis.length; i++) {
        lis[i].className = classes[i]
    }
}

function leftClick() {
    let firstClass = classes.shift()
    classes.push(firstClass)
    for (let i = 0; i < lis.length; i++) {
        lis[i].className = classes[i]
    }
}

left.onclick = leftClick
right.onclick = rightClick

timer = setInterval(rightClick, 2000)

ul.onmouseenter = function () {
    clearInterval(timer)
}

ul.onmouseleave = function () {
    timer
}

