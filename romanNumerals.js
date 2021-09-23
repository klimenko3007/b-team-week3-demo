document.addEventListener('click', e => {
  if(e.target.classList.contains('roman-button')) {
    const value = document.querySelector('#roman-value').value;
    const number = Number(value)
    console.log(value, number);
    if(Number.isNaN(number)) {
        const getRoman = romanConverter(value);
        const resultElement = document.querySelector('.roman-result');
        resultElement.innerHTML = getRoman;
    } else {
        const getRoman = romanConverter(number);
        const resultElement = document.querySelector('.roman-result');
        resultElement.innerHTML = getRoman;
    }
  }
})

const romanDigits = [
  ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
  ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  ['M', 'MM', 'MMM']
];

const romanConverter = num => {
  if (typeof num === 'string') {
    return 'We only accept integers';
  }
  if (num <= 0) {
    return 'We only accept positive numbers';
  }
  if (num % 1 !== 0) {
    return 'We only accept integers';
  }

  if (num > 3000) {
    return 'We only accept numbers below 3000';
  }
  const numArray = Array.from(num.toString()).map(n => Number(n));

  let libIndex = numArray.length - 1;
  const answerArray = numArray.map(n => {
    if (n !== 0) {
      const value = romanDigits[libIndex][n - 1];
      libIndex -= 1;
      return value;
    }
    libIndex -= 1;
    return '';
  }).join('');

  return answerArray;
};
