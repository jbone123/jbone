// 参数有效括号问题  vue解析模板就用到这个

var isValid = function(s) {
  let map = {
    "(": -1,
    ")": 1,
    "[": -2,
    "]": 2,
    "{": -3,
    "}": 3
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (map[element] < 0) {
      stack.push(element); //
      console.log(stack, "stack");
    } else {
      let last = stack.pop();
      console.log(last, "last");
      if (map[last] + map[element] != 0) return false;
    }
  }
  if (stack.length > 0) return false;
  return true;
};
isValid("(5+6)");
