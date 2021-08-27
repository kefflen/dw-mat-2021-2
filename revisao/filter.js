let nums = [2, 5, 6, 9, 14, 19, 22, 27, 31, 34, 39]

const pares = nums.filter(num => num%2 == 0)

console.log({pares})
nums = [7, 8, 0, 2, 5, 4, 8, 2, 1]

const founded = nums.find(num => num>0 && num<5)
console.log({founded})

