Function.prototype.call
Easy

The Function.prototype.call() method calls the function with a given this value and arguments provided individually.

Source: Function.prototype.call() - JavaScript | MDN

Implement your own Function.prototype.call without calling the native call method. To avoid overwriting the actual Function.prototype.call, implement the function as Function.prototype.myCall.

Examples

function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

multiplyAge.myCall(mary); // 21
multiplyAge.myCall(john, 2); // 84



/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {

  //如果thisArg为null或者undefined时用全局对象
  thisArg = (thisArg === null || thisArg === undefined) ? globalThis : Object(thisArg);
  //把当前函数挂在thisArg上，起一个临时的名字
  const fnKey = Symbol('fn'); //避免和对象原有属性重名
  thisArg[fnKey] = this; //this代表当前函数
  //用指定的this和参数调用这个函数
  const result = thisArg[fnKey](...argArray);
  //把临时属性删除
  delete thisArg[fnKey];
  //返回函数执行结果
  return result;
};









