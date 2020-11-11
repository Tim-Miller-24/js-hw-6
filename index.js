
// Задание: (Команды)


let arr = [];

do {
    var userMess = prompt('Введите команду (add,del,stop) и имя');
    let mess = userMess.split(", ");
    if (mess[0] == "add") {
        arr.push(mess[1]);
    } else if (mess[0] == "del") {
        for (const name in arr) {
            if (arr[name] === mess[1]) {
                arr.splice(name, 1);
            }
        }
    }
    alert(arr);
}
while (userMess !== "stop")

console.log(arr);





/* 

for (const key in arr) {
    if (arr[key] === 'Маша') {
            arr.splice(key,1)
    }


*/

/* for (let i = 0; userMess !== "stop"; i++) {
    let mess =
    var userMess = prompt('Введите команду (add,del,stop) и имя');
    if (userMess[i].toLowerCase() == 'add') {
        arr.push(userMess);
        alert(arr);
    } else if (userMess[i].toLowerCase() == 'del') {
        arr.splice(userMess,1);
        alert(arr);
    }
    alert(arr);
} */


/*

// Задание: (Подсчет гласных)


let message = prompt('Введите строку');


function vowels(message) {
    let count = 0;
    for (let i = 0; i < message.length; i++) {
        let mess = message.toLowerCase()
        if (mess[i] == 'а' || mess[i] == 'у' || mess[i] == 'о' || mess[i] == 'ы' || mess[i] == 'и' || mess[i] == 'э' || mess[i] == 'я' || mess[i] == 'ю' || mess[i] == 'ё' || mess[i] == 'е') {
            count += 1;
        } else if (mess[i] == 'a' || mess[i] == 'i' || mess[i] == 'o' || mess[i] == 'e' || mess[i] == 'u') {
            count += 1;
        }

    }
    return count;
}

alert(`В вашем сообщении ${vowels(message)} гласных.`);
console.log(`Ваше сообщение: "${message}". Гласных: ${vowels(message)}.`);

 */
