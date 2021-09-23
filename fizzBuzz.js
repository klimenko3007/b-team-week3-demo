const form = document.querySelector("#arrayForm");
const fizzButton = document.querySelector('.fizz-button');
const fizzValueElement = document.querySelector('.fizz-result');
const arrayElement = document.querySelector('.array')
const array = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = Number(document.getElementById('fizz-value').value);
    array.push(inputValue)
    arrayElement.innerHTML = array.map(element => `<span>${element}</span>` )
})



fizzButton.addEventListener('click', (e) => {
    console.log(array)
    const fizzArray = fizzBuzz(array)
    console.log(fizzArray)
    fizzValueElement.innerHTML = fizzArray.join(', ')
})


const fizzBuzz = array => {
  if (array.length === 0) {
    return 'Please provide an array with at least one integer';
  }

  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0 || array[i] > 100) {
      return 'Sorry, the number is not between 1-100...';
    }
    if (array[i] % 1 !== 0) {
      return 'Sorry, we only accept integers...';
    }
    if (typeof array[i] === 'string') {
      return 'Sorry, we only accept numbers...';
    }

    if ((array[i] % 3 === 0 && array[i] % 5 === 0) || /15/.test(array[i])) {
      newArray.push('FizzBuzz');
    } else if (array[i] % 3 === 0 || /3/.test(array[i])) {
      newArray.push('Fizz');
    } else if (array[i] % 5 === 0 || /5/.test(array[i])) {
      newArray.push('Buzz');
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
