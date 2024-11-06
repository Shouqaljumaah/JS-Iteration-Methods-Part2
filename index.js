const transactions = [
  //   0     ,   1
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

const outPut1 = transactions.filter(function (num) {
  return num[0] === "income";
});
console.log(outPut1);

// console.log(transactions.indexOf("income"));

// console.log(transactions.indexOf("expense"));

// console.log(transactions.slice(2, 4));

const outPut2 = transactions.filter(function (num) {
  return num[0] === "expense";
});
console.log(outPut2);

const outPut3 = outPut1.reduce(function (total, num) {
  return total + num[1];
}, 0);
console.log(outPut3);

const outPut4 = outPut2.reduce(function (total, num) {
  return total + num[1];
}, 0);
console.log(outPut4);

const outPut5 = outPut3 - outPut4;

console.log(outPut5);
// const subtraction = (outPut1, outPut2) => {
//   return outPut1 - outPut2;
// };
// console.log(subtraction);
