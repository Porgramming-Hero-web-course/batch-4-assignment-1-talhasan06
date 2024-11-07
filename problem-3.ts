function countWordOccurrences(snt: string, word: string): number {
  const words = snt.toLowerCase().split(" ");
  let count = 0;
  words.map((e) => {
    if (e.includes(word)) {
      count += 1;
    }
  });
  return count;
}
console.log(countWordOccurrences("I love Typescript", "typescript"));
