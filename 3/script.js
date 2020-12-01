const askString = prompt('Введи любой текст и я верну тебя назад в 2007й');

const toUpperCase = (string) => Array.from(string.toLowerCase()).map((el, index) => index%2 ? el.toUpperCase(): el).join().replace(/,/g,'');

console.log(toUpperCase(askString));