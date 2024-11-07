function sumArray(arr: number[]): number {
  let sum = 0;
  for (let el of arr) {
    sum += el;
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
