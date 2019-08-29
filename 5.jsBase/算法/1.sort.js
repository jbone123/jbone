// 排序

// 1.通用函数
function checkArray(array) {
  if (!array) return;
}
function swap(array, left, right) {
  let rightValue = array[right];
  array[right] = array[left];
  array[left] = rightValue;
}

// 冒泡排序
function bubble(array) {
  checkArray(array);
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
bubble([6, 9, 0, 2]);

// 插入排序
function insertSort() {}
