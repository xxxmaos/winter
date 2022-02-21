let leftBtn = document.querySelector('.left');
let rightBtn = document.querySelector('.right');
let slides = document.querySelectorAll('.slide-item');
let slide_index = document.querySelector('.ul-slide-index');
let slide_max = document.querySelector('.ul-slide-max');

let index = 0;
let time = 0;

let goIndex = function () {
    for (let i = 0; i < slides.length; i++) {
        slides[index].className = 'slide-item';
    }
    slides[index].className = 'slide-item active';
    slide_index[i] = index + 1;
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

leftBtn.addEventListener("click", function () {
    prev();
})
rightBtn.addEventListener("click", function () {
    next();
})

setInterval(function () {
    time++;
    if (time == 50) {
        next();
        time = 0;
    }
}, 100)