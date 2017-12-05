let height = document.getElementById('height');
let width = document.getElementById('width');
let btn = document.getElementById('calculate');
let resultH = document.getElementById('resultH');
let resultW = document.getElementById('resultW');
const calculate = document.getElementById('calculate');
let bmi = document.getElementById('bmi');
height.addEventListener('input', function(){
  resultH.value = this.value;
});
width.addEventListener('input', function(){
  resultW.value = this.value;
});
calculate.addEventListener('click', function(e){
  e.preventDefault();
  let bmiH = parseFloat(resultH.value);
  let bmiW = parseFloat(resultW.value);
  let bmiResult = bmiW/(bmiH/100);
  bmiResult /= (bmiH/100);
  bmi.innerText = bmiResult.toPrecision(3);
});