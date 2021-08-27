const frutas = ["banana", "maçã", "pera", "uva", "melancia", "jabuticana"]

const frutas2 = []
for (let fruta of frutas) {
    frutas2.push(fruta.toUpperCase())
}

const frutas3 = frutas.map(fruta => fruta.toUpperCase())
console.log(frutas3)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const aoQuadrado = nums.map(num => num ** 2)

console.log({aoQuadrado})