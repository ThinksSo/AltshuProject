// Задание 4 — Выполнение упражнений
/* 1. Запросите у пользователя его возраст. 
   -  Проверьте, что при попытке привести данные, введенные пользователем, к числу, 
   интерпретатор не возвращает NaN. 
   -  Если данные не валидные, выведите в консоли сообщение об ошибке с сообщением, 
   что пользователь ввел НЕ число.
   -  Проверьте, что пользователь ввел значение не меньше 0 и не больше, допустим, 120. 
   В противном случае,  выведите в консоли сообщение предупреждения с сообщением 
   “Вы, верно, ещё не родились” или “Вы, сударь, вероятно, вампир”.
   -  Если пользователю больше или равно 0, но меньше 18, 
   то выведите браузерное оповещение с текстом «Доступ запрещен». 
   -  В противном случае выведите сообщение «Доступ разрешен».
   */

function checkAge() {
    let age = +prompt("Enter your age");
    while (isNaN(age) == true || age <= 0 || age > 120) {
        age = +prompt("Invalid value, please enter your age");
    }
    if (age >= 18) {
        console.log(age, "Access granted!");
    } else {
        console.error(`${age} 'Access denied`);
    }
}

checkAge();


// 2.  Перепишите if..else с использованием нескольких тернарных операторов.
/*
let message;
 
if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
*/

let login = prompt('Enter your login');
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';
console.log(message);


/* 3. Используя конструкцию if..else, напишите код, 
который получает число через prompt, а затем выводит в alert:
   -   1, если значение больше нуля,
   -   -1, если значение меньше нуля,
   -   0, если значение равно нулю
   -   Сообщение об ошибке, если данные невалидны 
*/
let num = +prompt('Enter a number');
if (num > 0) alert(1);
else if (num < 0) alert(-1);
else if (num == 0) alert(0);
else alert('ERROR');


// 4. Напишите функцию, которая принимает два числа и возвращает сумму этих чисел.
function sumTwoNumbers(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}

sumTwoNumbers(3, 5);


// 5. Перепишите свитч-конструкцию на if:

let browser = prompt('Name of browser');
if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}


//6. Напишите функцию, которая принимает два числа и возвращает наибольшее из чисел.
function compareTwoNumbers(a, b) {
    let result = (a > b) ? a : b
    console.log(`the larger number is ${result}`);
}

compareTwoNumbers(13, 25);


// 7. Напишите функцию, которая принимает два числа и возвращает разность этих чисел.
function difTwoNumbers(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
}

difTwoNumbers(23, 15);


// 8. Напишите функцию, которая будет принимать номер месяца (например, “02”) 
// и возвращать текстовое название данного месяца (например, “февраль”).

function getMonth(num) {
    num = Number(num);
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (num > 0 && num <= 12) {
        console.log(month[num - 1]);
    } else {
        alert('ERROR');
    }
}

getMonth(3);


/* 9.  Напишите функцию, которая будет вызываться прямо при открытии страницы. 
Функция должна запрашивать у пользователя логин и пароль. 
Если пользователь вводит логин “admin” и пароль “password”, 
выводить пользователю браузерное сообщение с текстом: “Добро пожаловать, создатель”. 
В противном случае, выводить “Ты не пройдешь!”.
*/

function userLogin() {
    login = prompt('Enter login');
    password = prompt('Enter password');
    if (login == 'admin' && password == 'password') alert ('Welcome!');
    else alert ('Access denied');
}

userLogin();
