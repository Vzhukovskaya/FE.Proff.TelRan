// Написать программу, которая получает 2 числа и возвращает сумму.
// const num1 = +prompt("Enter first number");
// const num2 = +prompt("Enter second number");

// +prompt из строки в число
// console.log(num1 + num2);

//
//  console.log(`${num1} + ${num2} = ${num1 + num2}`); 
//  console.log(`${num1} - ${num2} = ${num1 - num2}`);
//  console.log(`${num1} * ${num2} = ${num1 * num2}`);

// используя условный оператор выполняйте деление только в случае, если value_2 не равен 0
// если пользователь пытается поделить на 0 выведите фразу "Делить на 0 нельзя"

// if (num2 !== 0) {
// console.log(`${num1} / ${num2} = ${num1 / num2}`);
// } else { 
//    console.log("Делить на ноль нельзя");
// }

// написать программу, которая получает два числа и выводит следующий результат:

// if (num1 > num2) {
//     console.log(`${num1} больше ${num2}`);
// } else if (num1 < num2) {
//     console.log(`${num2} больше ${num1}`);
// } else {
//     console.log("Они равны");
// }

// // вывести цифры от 0 до 9 с ппомошью цыкла:
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// // ... - "спред" оператор console.log(...arr) - 

// // вывести цифры от 9 до 0
// for (let i = 9; i >= 0; i--) {
//     console.log(i);
// }

// написать цикл, который выводит все числа из массива в консоль
const arr = [12, 4, 34, 55, 66, 12, 100]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0){
//     console.log(arr[i]);
//     }
// }

// написать цикл, который преобразует все отрицателдьные числа в положителные
// (-31 -> 32)
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0){
//         arr[i] = arr[i] * -1;
//     }     
// }
// console.log(arr);

// написать скрипт, который находит сумму всех чисел из массива:
let sum = 0; 
for (let i = 0; i < arr.length; i++) {
         sum = sum + arr[i];
         }
     
 console.log(sum);

const user = {
    name: "Valeriia"
 }
 console.log(user.name);