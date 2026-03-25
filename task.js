// Задача 1. Повторяющийся паттерн с разделителем
const pattern = "0000: :0000: :0000: :0000: :0000"


// Написать функцию parseRepeatedPattern(str), которая возвращает объект:

// {
//   value: "0000",
//   separator: " ",
//   repeatCount: 4
// }


function parseRepeatedPattern(str) {

    const p1 = str.indexOf(":", 0)
    const p2 = str.indexOf(":", p1 + 1)
    console.log(p1);
    console.log(p2);
    
    return {
        value: "0000",
        separator: " ",
        repeatCount: 4
    }
}

parseRepeatedPattern(pattern)

const arr = [1, 2, 3, 4, 5, 'hello', 'world', 222]
const p1 = arr.slice(3, 6)

console.log(arr);
console.log(p1);
