// 树的遍历    先序 中序  后序

// 统计页面节点的数目
let eles = document.getElementsByTagName("*");
let res = {};

for (let index = 0; index < eles.length; index++) {
  const element = eles[index];
  console.log(element, "element");
  if (res[element]) {
    console.log(res[element], "1111"); //{[aa]}
    console.log(res, "res");
    res[element]++;
  } else {
    res[element] = 1;
  }
}
