//1

const text1 = prompt("Введіть число");
const text2 = prompt("Введіть число");

if(text1 !== "" && text2 !== ""){
    alert("Обидва поля заповнені");
} else {
    alert("Не всі поля заповнені");
}


//2

const num1 = Number(prompt("Введіть число"));
const num2 = Number(prompt("Введіть число"));
const result = num1 + num2;

if (result > 10) {
    alert("Сума більша за 10");
} else {
    alert("Сума менша або дорівнює 10");
}


//3

const textJava = prompt("Введіть текст");

if (textJava.includes("JavaScript")){
    alert("Текст містить слово JavaScript");
} else {
    alert("Текст не містить слово JavaScript");
}



//4

const saveNumber = prompt("Введіть число");

if (saveNumber >= 10 && saveNumber <= 20) {
    alert("Число входить в діапазон від 10 до 20");
} else {
    alert("Число не входить в діапазон від 10 до 20");
}



//5

let number = prompt("Введіть свій номер телефону");
let email = prompt("Введіть свою електронну адресу");
let password = prompt("Введіть свій пароль");

if (number.length >= 3 && email.includes("@") && emaill.indexOf(".") && password.length >= 6) {
    alert("Перенаправлення на іншу сторінку");
} else {
    alert("Помилка: неправильне заповнення");
}