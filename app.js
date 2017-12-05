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

//calculate BMI
function calculateBmi(){
  let bmiH = parseFloat(resultH.value);
  let bmiW = parseFloat(resultW.value);
  let bmiResult = bmiW/(bmiH/100);
  bmiResult /= (bmiH/100);
  bmi.innerText = bmiResult.toPrecision(3);
  return bmiResult;
}

//Update BMI status
function updateContent(r){
  const toCheck = r.toPrecision(3);
  const status = document.getElementById('bmi-status');
  if(toCheck <= 18.5){
    status.textContent = "Underweight!";
  }
  else if(toCheck > 18.5 && toCheck < 25){
    status.textContent = "Normal body weight!";
  }
  else if(toCheck > 25 && toCheck < 30){
    status.textContent = "Overweight!";
  }
  else{
    status.textContent = "Obese!";
  }
}
//Calculate result after click on 'calculate' button
calculate.addEventListener('click', function(e){
  e.preventDefault();
  let result = calculateBmi();
  updateContent(result);
});