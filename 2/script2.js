const randomizer = maxNumber => Math.floor(Math.random() * maxNumber);
const askNumberFirst = () => +prompt('Введи число от 0 до 10');
const askNumber = () => +prompt('Попробуй еще разок');

const guessNumberFirst = () => {
  let randomNumber = randomizer(10), answer = askNumberFirst();
  
  return answer === randomNumber;
}

const startToGuess = () => {
  let result = guessNumberFirst();

  if (result) {
    alert ('Поздравляю, твое число - ');
  } else {
    for (let randomNumber = randomizer(10), answer = askNumber(); answer !== null && answer !== randomNumber;) {
      answer = askNumber();

      alert ('На этот раз угадал!')
    }
  }
}

startToGuess();










const randomizer = maxNumber => Math.floor(Math.random() * maxNumber);

const askFirstNumber = () => +prompt('Введи число от 0 до 10');

const askOtherNumber = () => +prompt('Попробуй еще раз');




const guessFirstNumber = () => {
  let randomNumber = randomizer(10), answer = askFirstNumber();
  
  return answer === randomNumber;
}

const guessOtherNumber = () => {
  let randomNumber = randomizer(10), answer = askOtherNumber();

  for (; answer !== null && answer !== randomNumber;) {
    answer = askOtherNumber()
  }

  return answer === randomNumber;
}




const startGame = () => {
  let result = guessFirstNumber();

  if (result) {
    alert('Надо же, угадал с первого раза!')
  } else {
    result = guessOtherNumber();

    if (result) {
      alert('Наконец ты выйграл!')
    }
  }
}

startGame ();