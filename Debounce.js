
Debounce
Medium

Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called.

You almost certainly have encountered debouncing in your daily lives before (e.g. when entering an elevator). Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

Implement a debounce function which accepts a callback function and a wait duration. Calling debounce() returns a function which has debounced invocations of the callback function following the behavior described above.
防抖是一种用于控制我们允许函数随时间执行次数的技术。当一个 JavaScript 函数被防抖，且等待时间为 X 毫秒时，它必须等待，直到自上次调用防抖函数以来经过 X 毫秒。

您几乎肯定在日常生活中遇到过防抖（例如，当进入电梯时）。只有在 X 时间内没有按下“开门”按钮（未调用防抖函数）后，电梯门才会真正关闭（回调函数被执行）。

实现一个 debounce 函数，该函数接受一个回调函数和一个 wait 持续时间。调用 debounce() 返回一个函数，该函数具有防抖上述行为的回调函数的调用。
Examples

let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.

// t = 100: increment() was invoked and i is now 1.
debouncedIncrement() is called multiple times.


let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.
//  Call debouncedIncrement() again.
debouncedIncrement(); // i = 0

// t = 100: i is still 0 because it has only
//  been 50ms since the last debouncedIncrement() at t = 50.

// t = 150: Because 100ms have passed since
//  the last debouncedIncrement() at t = 50,
//  increment was invoked and i is now 1 .

/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timer = null;
  return function debounce(...args){
    if(timer){
      clearTimeout(timer);
    }

    timer = setTimeout(()=>{
      func.apply(this,args);
      },wait)
    };
  }


Follow up
Debounce with a cancel() method to cancel delayed invocations and a flush() method to immediately invoke them.
Implement throttle, which is similar to debounce but a little different.



export default function debounce(func, wait) {
  let timer = null;
  let lastArgs = null;
  let lastThis = null;

  function debounce(...args) {
    lastArgs = args;
    lastThis = this;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(lastThis, lastArgs);
      timer = null;
    }, wait);
  }

  debounce.cancel = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  debounce.flush = function () {
    if (timer) {
      clearTimeout(timer);
      func.apply(lastThis, lastArgs);
      timer = null;
    }
  };
  return debounce;
}





