const randomizer = maxNumber => Math.floor(Math.random() * maxNumber);

const askFirstNumber = () => +prompt('Введи число от 0 до 10');

const askOtherNumber = () => +prompt('Попробуй еще раз');

const guessFirstNumber = () => {
  let answer = askFirstNumber();
  
  return answer === randomNumber;
}

const guessOtherNumber = () => {
  let answer = askOtherNumber();

  while (answer !== null && answer !== randomNumber) {
    answer = askOtherNumber();
  }

  return answer === randomNumber;
}

const startGame = () => {
  let result = guessFirstNumber();

  if (result) {
    alert('Надо же, угадал с первого раза! Твое число - ' + randomNumber);
  } else {
    result = guessOtherNumber();

    if (result) {
      alert('Наконец ты выйграл! Загаданным числом было ' + randomNumber);
    }
  }
}

const randomNumber = randomizer(10);

startGame ();