Debounce II
Medium

Note: This is an advanced version of Debounce, you should complete that first before attempting this question.

Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called.

You almost certainly have encountered debouncing in your daily lives before (e.g. when entering an elevator). Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

Implement a debounce function which accepts a callback function and a wait duration. Calling debounce() returns a function which has debounced invocations of the callback function following the behavior described above.

Additionally, the debounce-ed function comes with two extra methods:

cancel() method to cancel pending invocations
flush() method to immediately invoke any delayed invocations

cancel() 方法取消挂起的调用
flush() 方法立即调用任何延迟的调用
注意： 这是 Debounce 的高级版本，在尝试此问题之前，您应该先完成该问题。
Debouncing 是一种用于控制我们允许一个函数在一段时间内执行多少次的技术。当一个 JavaScript 函数被 debounced 且等待时间为 X 毫秒时，它必须等待自上次调用 debounced 函数以来经过 X 毫秒。
您几乎肯定在日常生活中遇到过 debouncing（例如，在进入电梯时）。只有在 X 持续时间没有按下“开门”按钮（未调用 debounced 函数）后，电梯门才会真正关闭（回调函数被执行）。
实现一个 debounce 函数，该函数接受一个回调函数和一个 wait 持续时间。调用 debounce() 返回一个函数，该函数具有按照上述行为的 debounced 回调函数的调用。
此外，debounce-ed 函数还附带了两个额外的方法：

Examples

let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: Cancel the delayed increment.
debouncedIncrement.cancel();

// t = 100: increment() was not invoked and i is still 0.
Flushing to instantly call the debounced function.


let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.
// t = 51:
debouncedIncrement.flush(); // i is now 1 because flush causes() the callback to be immediately invoked.

// t = 100: i is already 1. The callback has been called before
// and won't be called again.
Note: Due to the use of delays in the tests for this question, tests can take a while to complete execution.




/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timer = null;
  let lastArgs;
  let lastThis;

  function invoke(){
    timer = null;
    func.apply(lastThis,lastArgs);
  }

  function debounce(...args){
    lastArgs = args;
    lastThis = this;
    if(timer) clearTimeout(timer);

    timer = setTimeout(()=>{
      invoke();
    }.wait)
  }

  debounce.cancel = function(){
    if(timer){
      clearTimeout(timer);
      timer = null;
    }
  };

  debounce.flush = function(){
    if(!timer) return;  //没有pending 的就啥也不做
    clearTimeout(timer);
    invoke();           // 立即执行，并清空timer
  };

  return debounce;
}