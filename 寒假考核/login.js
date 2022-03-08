//切换动画
let item = document.querySelector(".item");
let it = item.querySelectorAll(".item li");

let content = document.querySelectorAll(".content");
let con = content[0].querySelectorAll(".content div");

for (let i = 0; i < it.length; i++) {
    it[i].onclick = function () {
        for (let j = 0; j < it.length; j++) {
            it[j].className = '';
            con[j].style.display = "none";
        }
        this.className = 'active';
        it[i].index = i;
        con[i].style.display = "block";
    }
}

//注册登录流程
let inputInner = document.querySelectorAll('.form-raw');
let loginBtn = document.querySelectorAll('.form-button');

let username = inputInner[0] ? inputInner[0].value : "";
let password = inputInner[1] ? inputInner[1].value : "";

//手机登录
inputInner[0].addEventListener('input', () => {
    username = inputInner[0].value;
})
inputInner[1].addEventListener('input', () => {
    password = inputInner[1].value;
})

//表单提交
loginBtn[0].onsubmit = function () {
    fetch('http://120.77.78.73:8000/users/register', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password,
        })
    }).then((res) => {
        return res.json()
    }).then(json => {
        console.log(json);
        if (json.state == 1) {//状态为1表示登录成功
            localStorage.setItem('token', json.token);
            window.location.href = "./main.html";
            alert("登陆成功")
            return phone;
        } else {
            alert("用户名或密码错误")
        }
    }).catch(err => {
        console.log(err);
    })
}
console.log(fetch)
//密码登录
let inputInners = document.querySelectorAll('.pass-raw');

let phoneNumber = inputInners[0] ? inputInners[0].value : "";
let codes = inputInners[1] ? inputInners[1].value : "";

inputInner[0].addEventListener('input', () => {
    phoneNumber = inputInner[0].value;
})
inputInner[1].addEventListener('input', () => {
    codes = inputInner[1].value;
})

loginBtn[1].onsubmit = function () {
    fetch('http://120.77.78.73:8000/users/register', {
        method: 'POST',
        body: JSON.stringify({
            phone: phone,
            code: code,
        })
    }).then((res) => {
        return res.json()
    }).then(json => {
        console.log(json);
        if (json.state == 1) {//状态为1表示登录成功
            localStorage.setItem('token', json.token);
            window.location.href = "./main.html";
            alert("登陆成功")
            return phone;
        } else {
            alert("用户名或密码错误")
        }
    }).catch(err => {
        console.log(err);
    })
}