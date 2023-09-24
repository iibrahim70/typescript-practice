// 1. if a number is less than 5 print "The number is way too small", if the number is greater than 5 print "The number is way too big", if the number is equal to 5 then print "The number is 5"

const numOne = (num: number) => {
  if (num < 5) return "The number is way too small";
  if (num > 5) return "The number is way too big";
  return "The number is 5";
};
console.log(numOne(5));

// 2. write a program that checks if a number is even or odd. if the number is even print "The number is even", otherwise print "The number is odd"

const numTwo = (num: number) => {
  if (num % 2 === 0) return "The number is even";
  return "The number is odd";
};
console.log(numTwo(5));
