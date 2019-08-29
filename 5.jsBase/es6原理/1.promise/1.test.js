let Promise = require("./promise");
let p = new Promise((resolve, reject) => {
  console.log("executor");
  resolve("赚钱啦");
  reject("不赚钱啦");
}).then(
  res => {
    console.log("成功啦", res);
  },
  err => {
    console.log("失败", err);
  }
);
