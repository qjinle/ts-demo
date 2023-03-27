const symbol = Symbol("id");
const obj = { [symbol]: 101, username: "jinle" };
const id = obj[symbol]
console.log(id)