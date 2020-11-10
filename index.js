/* 
// Задание: (Команды)
1) создаёте пустой массив
2) Потом бесконечно начинает работать окно ввода текста
3) Вы задаете команду.Например: добавить элемен, Иван
Пример: add, Иван
4) Обрабатываете команду "add" и добавляете в массив строку Иван
5) Цикл повторяется.Задаете другую команду(удалить элемент, Иван)
Пример: del, Иван
6) Обрабатываете команда, цикл повторяется.Все результаты добавления и удаления выводятся командой "alert(arr)" как массив.
7) Когда получаете команду "stop" то окно ввода текста больше не появлятся.После остановки в console выводится конечный массив.
-->

 

let arr = [];

// let userMess = prompt('Введите команду (add,del,stop) и имя');


    for (let i = 0; userMess !== "stop"; i++) {
        var userMess = prompt('Введите команду (add,del,stop) и имя');
        if (userMess[i].toLowerCase() == 'add') {
            arr.push(userMess);
            alert(arr);
        } else if (userMess[i].toLowerCase() == 'del') {
            arr.splice(userMess,1);
            alert(arr);
        }
        alert(arr);
    }

*/



// Задание: (Подсчет гласных)


let message = prompt('Введите строку');
let count = 0;

function vowels(message) {
    for (let i = 0; i < message.length; i++) {
        if (message[i].toLowerCase() == 'а' || message[i].toLowerCase() == 'у' || message[i].toLowerCase() == 'о' || message[i].toLowerCase() == 'ы' || message[i].toLowerCase() == 'и' || message[i].toLowerCase() == 'э' || message[i].toLowerCase() == 'я' || message[i].toLowerCase() == 'ю' || message[i].toLowerCase() == 'ё' || message[i].toLowerCase() == 'е') {
            count += 1;
        } else if (message[i].toLowerCase() == 'a' || message[i].toLowerCase() == 'i' || message[i].toLowerCase() == 'o' || message[i].toLowerCase() == 'e' || message[i].toLowerCase() == 'u') {
            count += 1;
        }

    }
    return count;
}


alert(`В вашем сообщении ${vowels(message)} гласных.`);
console.log(`Ваша сообщение: "${message}". Гласных: ${vowels(message) / 2}.`);

 
