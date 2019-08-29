// call appyly bind区别？
//    改变this指向问题  call和bind传递参数一个个传递的，而apply传递的是一个数组
// call和apply是立即执行函数  而bind需要手动调用执行

Function.prototype.myCall = function(context) {
  console.log(this, "this");
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
