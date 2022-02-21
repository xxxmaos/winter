const obj = {
    name: "小余",
    age: 20,
    personInfo: {
        name: "xxx",
        age: 100,
    }
}

//这是一个深克隆
const copyObj = JSON.parse(JSON.stringfy(obj))

//自己实现一个深克隆方法
let obj1 = { name: "小余" };
let obj2 = { age: "20" };
let obj3 = { personInfo: "name,age" };
function deepCopy(obj) {
    //your code
    function deepCopy(obj) {
        if (obj instanceof Array) {
            let n = [];
            for (let i = 0; i < obj.length; i++) {
                n[i] = deepCopy(obj[i])
            }
            return n;
        } else if (obj instanceof Object) {
            let n = {};
            for (let i in obj) {
                n[i] = deepCopy(obj[i])
            }
            return n;
        } else {
            return obj
        }
    }
}

const copyObj1 = deepCopy(obj)