let inputInner = document.querySelectorAll('.form-control');
let register = document.querySelector('button');
let form = document.querySelector('form');

let username = inputInner[0].value;
let password = inputInner[1].value;
let nickname = inputInner[2].value;

inputInner[0].addEventListener('input', () => {
    username = inputInner[0].value;
})
inputInner[1].addEventListener('input', () => {
    password = inputInner[1].value;
})
inputInner[2].addEventListener('input', () => {
    nickname = inputInner[2].value;
})

const valid = username !== "" && password !== "" && nickname !== "";

form.onsubmit = (e) => {
    e.preventDefault();
    if (valid) {
        fetch('http://180.76.185.37:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                nickname: nickname
            })
        }).then(res => {
            return res.json();
        }).then(json => {
            console.log(json);
            console.log("注册失败")
            alert("注册成功")
        })
    } else {
        console.log("注册失败")
        alert("注册失败")
    }
}
