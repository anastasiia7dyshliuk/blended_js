// const newAlert = alert("Заповніть всі поля"); - undefined //
// const login = prompt("Введіть логін"); - string або null //
// const newConfirm = confirm("Are you sure?"); - true або false //

// --- TASK 1 --- //
// const number = Number(prompt("Введіть число від 1 до 10"));
// if (number === 10) {
    // alert("Вірно")
//}
// else {
    // alert("Невірно")
//}
// number === 10 ? alert("Вірно") : alert("Невірно");


// --- TASK 2 --- //
// const min = Math.floor(Math.random() * 59);
// console.log(min);

// let quarter;

// if (min <= 15) {
//     quarter = "First"
// }
// else if (min <= 30) {
//     quarter = "Second"
// }
// else if (min <= 45) {
//     quarter = "Third"
// }
// else {
//     quarter = "Fourth"
// }

// alert(`The number is in the ${quarter} quarter`);


// --- TASK 3 --- //
// const num = Number(prompt("Введіть число від 1 до 4"));
// let result;

// switch (num) {
//     case 1:
//         result = "Winter";
//         break;
//     case 2:
//         result = "Spring";
//         break;
//     case 3:
//         result = "Summer";
//         break;
//     case 4:
//         result = "Autumn";
//         break;
//     default:
//         result = "Вибачте, але ви маєте ввести значення від 1 до 4";
// }

// console.log(result);


// --- TASK 4 --- //
// const minutes = Number(prompt("Введіть кількість хвилин"));

// const hours = Math.floor(minutes / 60);
// const min = minutes % 60;

// console.log(
//   `${String(hours).padStart(2, "0")}:${String(min).padStart(2, "0")}`,
// );


// --- TASK 5 --- //
// const login = prompt("Введіть login");

// if (login === "Адмін") {
//     const password = prompt("Введіть пароль");
//     password === "Я головний" ? alert("Добрий день!") : alert("Невірний пароль!");
// }
// else if (login === "" || login === null) {
//     alert("Скасовано")
// }
// else {
//     alert("Я вас не знаю")
// }


// --- TASK 6 --- //
// let i = 0;

// while (i <= 20) {
//     console.log(i);
//     i++;
// }


// --- TASK 7 --- //
// function getNumbers(min, max) { 
//     let sum = 0;
//     let i = max; 
//     while (i >= min) { 
//         console.log(i);

//         if (i % 2 === 0) { 
//             sum += i;
//         }
//         i--;
//     }
// return sum;
// }

// console.log(getNumbers(2, 8));
