function animation(obj, target) {

    obj.timer = setInterval(function () {
        // let step = (target - obj.offsetLeft) / 10;
        if (obj.offsetLeft >= target) {
            clearInterval(timer);
        } else {
            obj.style.left = obj.offsetLeft + 10 + 'px';
        }
    }, 30);
}

let forms = document.querySelector('form');

animation(forms, 1000);