const number = [1, 2, 3, 4, 5, 6, 7, 8];
const part = number.slice(2, 5);
console.log(part);
console.log(number);

const removed = number.splice(3, 3);
console.log(removed);
console.log(number);

const joined = number.join("");
console.log(joined);