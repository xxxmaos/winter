let slides = document.querySelectorAll('.slides ul li');
console.log(slides);
let dots = document.querySelectorAll('.dots ul li')
let box = document.querySelector('.slides')
let leftBtn = document.querySelector('.left');
let rightBtn = document.querySelector('.right');

let num = 0;

function clear() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].removeAttribute('class');
        // console.log(dots[i]);
        dots[i].removeAttribute('class');
    }
}

function run() {
    clear();
    num++;
    if (num >= slides.length) {
        num = 0;
    }
    //设置指定图片显示
    slides[num].classList.add('slide')
    dots[num].setAttribute('class', 'dot');
}

let time = setInterval(run, 3000);

box.onmouseover = function () {
    clearInterval(time);
}

box.onmouseout = function () {
    time = setInterval(run, 3000);
}

rightBtn.onclick = function () {
    clear();
    if (num == 4) {
        num = 0;
        slides[num].setAttribute('class', 'slide');
    } else {
        num++;
        slides[num].setAttribute('class', 'slide');
        dots[num].setAttribute('class', 'dot');
    }
}

leftBtn.onclick = function () {
    clear();
    if (num == 4) {
        num = 0;
        slides[num].setAttribute('class', 'slide');
    } else {
        num++;
        slides[num].setAttribute('class', 'slide');
        dots[num].setAttribute('class', 'dot');
    }
}