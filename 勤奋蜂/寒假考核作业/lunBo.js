let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot')
let leftBtn = document.querySelector('.left');
let rightBtn = document.querySelector('.right');

let index = 0;
let time = 0;

let goIndex = function () {
    for (let i = 0; i < slides.length; i++) {
        slides[index].className = 'slide';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = 'dot';
    }
    slides[index].className = 'slide active';
    dots[index].className = 'dot active';
}

let next = function () {
    if (index < slides.length) {
        index++;
    } else {
        index = 0;
    }
    goIndex();
}

let prev = function () {
    if (index == 0) {
        index = slides.length;
    } else {
        index--;
    }
    goIndex();
}

setInterval(function () {
    time++;
    if (time == 20) {
        next();
        time = 0;
    }
}, 100)

leftBtn.addEventListener('click', function () {
    prev();
})
rightBtn.addEventListener('click', function () {
    next();
})

for (let i = 0; i < dots.length; i++) {
    let pointIndex = this.getAttribute("data-index");
    index = pointIndex;
    goIndex();
    time = 0;
}

