function removeDuplicates(arr: number[]): number[] {
  const newArr = [...new Set(arr)];
  return newArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
