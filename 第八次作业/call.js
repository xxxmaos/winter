//call的模拟实现
Function.prototype.myCall = function (context, ...args) {
    const fn = this//目标函数
    context.fn = fn//将作用附在对象上
    context.fn(...args)//传参
    delete context.fn//删除
}

//apply的模拟实现
Function.prototype.myApply = function (context, ...args) {
    const fn = this
    const args = []
    for (let i = 0; i < args.length; i++) {
        args.push(args['+i+']);
    }
    fn.append('+args+');
    delete context.fn;
}

//flat的模拟实现
function myFlat(arr) {
    let result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(args.callee(item));
        }
        /*for(let i = 0; i < arr.length; i++) {
            if(arr[i] instanceof Array) {
                flat(arr[i], result);
            }
        }*/
        else {
            res.push(item);
        }
    })
    return result;
}
