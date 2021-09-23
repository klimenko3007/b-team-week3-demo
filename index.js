// intro
// three katas
// hardest part: trying to solve katas
// most fun: roman thing(second solution) ...

document.addEventListener('click', e => {
  if(e.target.classList.contains('kata-button')) {
    const value = document.querySelector('#kata-value').value;
    const number = Number(value)
    if(Number.isNaN(number)) {
        const getPrime = primeNumber(value);
        const resultElement = document.querySelector('.prime-result');
        resultElement.innerHTML = getPrime;
    } else {
        const getPrime = primeNumber(number);
        const resultElement = document.querySelector('.prime-result');
        resultElement.innerHTML = getPrime;
    }
  }
})



const primeNumber = number => {
    const primeResult = document.querySelector('.prime-result')
    let num = number;
    if (typeof num !== 'number') return 'Sorry, we only accept numbers...';
    if (num < 0) return 'Sorry, we only accept positive numbers';
  
    const array = [];
    while (num % 2 === 0) {
      array.push(2);
      num /= 2;
    }
  
    for (let i = 3; i < num; i++) {
      while (num % i === 0) {
        array.push(i);
        num /= i;
      }
    }
  
    if (num > 1) {
      array.push(num);
    }
    return array.join(', ');
  };
  
