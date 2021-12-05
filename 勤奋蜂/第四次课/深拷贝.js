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
        const newObj = {};
        for (let i in obj) {

            if (typeof obj[i] === "object") {

                newObj[i] = deepCopy(obj[key]);
            }
            else {
                newObj[i] = obj[i];
            }
        }
        return newObj;
    }
}

const copyObj1 = deepCopy(obj)