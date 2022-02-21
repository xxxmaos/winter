const button = document.querySelector("button")
const text = document.querySelector(".text")
const div = document.querySelector("div")

button.addEventListener("click", () => {
    const formData = new FormData();
    formData.append("message", text.value);
    fetch('https://anonym.ink:8000/homework/fufubot_test/', {
        method: 'POST',
        /*post和get的方法区别：
        GET向服务器获取指定的资源，参数是在GET请求的URL中发生的；
        而POST向服务器提交数据，参数是在POST请求的消息主体发生的*/

        body: formData,
    }).then((res) => {
        return res.text();
    }).then((content) => {
        console.log(content);
        //div.innerHTML = content
    })
})

/*const res = await fetch('https://anonym.ink:8000/homework/fufubot_test')
const text = await res.text();
text.forEach(content => {
    console.log(content);
    div.innerHTML = '<span>${content.}</span>'
})*/





