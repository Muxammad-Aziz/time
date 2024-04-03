// программа учитывает время

let time1 = new Date('April 02, 2024 17:37:00 +0500');
const hours = new Date().getHours()
let message

if(hours < 12) {
     message = 'Доброе утро'
} else message = 'Добрый день'
if (hours > 16) message = 'Добрый вечер'

alert(message)
console.log(
    message
)
