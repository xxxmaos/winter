let inputInner = document.querySelectorAll('input');
let auth = document.querySelector('.checkbox-login');
let login = document.querySelector('button');
let form = document.querySelector('form');

let admin = document.querySelector('.checkbox-login');
let checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('click', function () {
    admin.style.color = 'red';
})

let username = inputInner[0] ? inputInner[0].value : "";

let password = inputInner[1] ? inputInner[1].value : "";

let authBool = auth.checked ? 'admin' : 'user';

//输入账号和密码
inputInner[0].addEventListener('input', () => {
    username = inputInner[0].value;
})
inputInner[1].addEventListener('input', () => {
    password = inputInner[1].value;
})

auth[0].addEventListener('click', () => {
    authBool = auth.checked ? 'admin' : 'user';
})
//表单提交
form.onsubmit = function (e) {
    e.preventDefault();
    fetch('http://180.76.185.37:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            auth: authBool
        })
    }).then((res) => {
        return res.json()//返回promise对象
    }).then(json => {
        console.log(json);
        if (json.state == 1) {//状态为1表示登录成功
            localStorage.setItem('token', json.token);
            localStorage.setItem('auth', username = inputInner[0].value);
            window.location.href = "./mi-login.html"
            alert("登陆成功")
            return username;
        } else {
            alert("用户名或密码错误")
        }
    }).catch(rea => {
        console.log(rea);
    })
}

