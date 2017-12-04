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
  bmiH = bmiH.toPrecision(2);
  bmiW = bmiW.toPrecision(2);
  bmi.innerText = bmiW/(bmiH/100);
});