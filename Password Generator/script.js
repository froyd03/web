const rangeInput = document.querySelector('.txtrnge');

rangeInput.addEventListener('input', function() {
  document.querySelector('#label').textContent = rangeInput.value;
});
 
function generate(){
  let p_length = document.querySelector('.txtrnge').value;
  let isLower = document.querySelector('#lowercase').checked;
  let isUpper = document.querySelector('#uppercase').checked;
  let isNumbers = document.querySelector('#number').checked;
  let isSymbol = document.querySelector('#symbol').checked;  
  
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = lowerCase.toUpperCase();
  const numbers = "0987654321";
  const symbols = "*-_/"
  
  let arr = [];
    if(isLower){
      arr.push(lowerCase);
    }
    if (isUpper) {
      arr.push(upperCase);
    }
    if (isNumbers) {
      arr.push(numbers);
    }
    if (isSymbol) {
      arr.push(symbols);
    }
  
  let generated = " ";
  for (let i = 0; i < p_length; ++i) {
      let j = Math.floor(Math.random() * ((arr.length-1) - 0 + 1)) + 0;  
      let k = Math.floor(Math.random() * ((arr[j].length-1) - 0 + 1)) + 0;
      
      generated += arr[j][k];
  }
  
  document.querySelector('.text').value = generated;
}