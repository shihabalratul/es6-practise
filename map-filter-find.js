const num = [3, 5, 2, 4, 1];

const result = num.map(x => x * x);
console.log(result);

const bigger = num.filter(x => x > 2);
console.log(bigger);

const isThere = num.find(x => x > 3);
console.log(isThere);