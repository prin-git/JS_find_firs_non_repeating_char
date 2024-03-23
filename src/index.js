import "./styles.css";
/*
//Option 1:
// for any string, find the first non-repeating character
// for example 'llama' -> m
// for 'hello' -> 'h'
// for 'ababc' -> 'c'

// Option 2:
// Determine if a string is a palindrome (a string spelled the
// same forwards and backwards.
// for example: 'kayak' => true
// 'radar' => true
// 'lisabonetatenobasil' => true
// 'abc' => false
 */
let findChar = (str) => {
  let arr = Array.from(str);

  let x = arr.filter((item, index) => arr.indexOf(item) !== index);
  let y = arr.find((i) => !x.includes(i));
  return y;
};
console.log(findChar("llama"));
console.log(findChar("hello"));
console.log(findChar("henna"));
console.log(findChar("ook"));
