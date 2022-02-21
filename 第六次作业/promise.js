let btn = document.querySelector('.btn');
let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green'); ('.blue');
let balls = document.querySelectorAll('.ball');
// const balls = document.querySelectorAll('.ball')

// btn.addEventListener('click', function () {

//     let distance = 0
//     let timer = setInterval(function () {
//         if (ball.offsetLeft > 100) {
//             clearInterval(timer);
//         }
//         else {
//             //distance++
//             // balls.style.transform = 'translate(' + distance + 'px)'
//             setInterval(function () {
//                 red.style.left = red.offsetLeft + 1 + 'px';
//                 setInterval(function () {
//                     yellow.style.left = yellow.offsetLeft + 1 + 'px';
//                     setInterval(function () {
//                         green.style.left = green.offsetLeft + 1 + 'px';

//                     }, 60)
//                 }, 120);
//             }, 180);


//         }
//     });

// })

// function ballMove(ball, position) {
//     let timer = setTimeout(function () {
//         let distance = 0
//         ball.style.transform = 'translate(0)'
//         if (distance > position) {
//             clearInterval(timer);
//         }
//         else {
//             setInterval(function () {
//                 red.style.transform = 'translate(' + distance + 'px)';
//                 setInterval(function () {
//                     yellow.style.transform = 'translate(' + distance + 'px)';
//                     setInterval(function () {
//                         green.style.transform = 'translate(' + distance + 'px)';
//                     }, 60);
//                 }, 120);
//             }, 180);
//         }
//     })
// }


//promise
// const ballMove = (ball, position) => {
//     let distance = 0
//     ball.style.transform = 'translate(0)'
//     return new Promise(resolve => setInterval(() => {
//         // if (distance > position) {
//         //     resolve()
//         // } else {
//         //     ball.style.transform = 'translate(' + distance + 'px)';
//         //     distance++
//         // }
//         distance > position ? resolve() : ball.style.transform = 'translate(' + distance++ + 'px)';
//     }, 20))
// }

// btn.addEventListener('click', function (e) {
//     ballMove(red, 100).then(() => ballMove(blue, 100)).then(() => ballMove(green, 100))
// })
// btn.addEventListener('click', async function () {
//     await ballMove(balls[0], 100)
//     await ballMove(balls[1], 100)
//     ballMove(balls[2], 100)
// })

//await 
let ballMove = function (time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}

for (const ball of balls) {
    ball.classList.add("move")
    await ballMove(1000);
}