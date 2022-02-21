const obj = {
    name: "小余",
    age: 20,
    personInfo: {
        name: "xxx",
        age: 100,
    }
}

//下来看看Object上面的方法,这是一个浅克隆

function copy(obj) {
    const returnObj = {};
    // for (let in obj) {
    //     returnObj.age = obj.age;
    //     returnObj.name = obj.name;
    //     returnObj.personInfo = obj.personInfo;
    // }
    let obj1 = { name: "小余" };
    let obj2 = { age: "20" };
    let obj3 = { personInfo: "name,age" };
    Object.assign(obj1, obj2, obj3);
    return returnObj;
    console.log(returnObj);
}
copy(obj)