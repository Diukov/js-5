const notAPowFunction = (a, b) => {
  let result = 1;
  for (let counter = 0; counter < b; counter++) {
    result = result * a;
  }
  return result;
}

const functionResult = notAPowFunction(2, 6);

console.log(functionResult);