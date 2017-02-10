function map(arr, cb) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const newItem = cb(arr[i]);

    newArr.push(newItem);
  }

  return newArr;
}

const numbers = [1, 2, 3, 4, 5, 6];
const squared = (num) => num * num;

newNums = map(numbers, squared);

console.log(newNums);
