//Напишите функцию, которая принимает массив и, 
//разворачивая массив в обратном порядке, 
//возвращает новый массив (не используя .reverse())

function reverseArray(yourArray) {
    console.log(yourArray);
    let newArray = [];
    count = yourArray.length-1;
    for (let i = 0; i < yourArray.length; i++) {
        newArray[i] = yourArray[count];
        count--;
    }
    console.log(newArray);
}

let numbers = [1, 2, 3, 4, 5];
reverseArray(numbers);
numbers = ['a', 'b', 'c', 'd', 'e'];
reverseArray(numbers);
