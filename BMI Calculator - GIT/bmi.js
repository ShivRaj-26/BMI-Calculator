var calculate = document.querySelector('.calculate');
var first = document.getElementById('first');
var second = document.getElementById('second');
first.style.display = 'block';
second.style.display = 'none';
calculate.addEventListener('click', findBMI);

function findBMI() {
    var height = +document.querySelector('#height').value;
    var weight = +document.querySelector('#weight').value;
    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        alert('Please fill all fields with valid numbers');
        return;
    }
    height = height / 100;
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2);
    first.style.display = 'none';
    second.style.display = 'block';
    showResult(bmi);
}

function showResult(bmi) {
    var height = +document.querySelector('#height').value;
    var weight = +document.querySelector('#weight').value;
    var bmiStatus;
    if (bmi < 18.5) {
        bmiStatus = 'Underweight';
    }
    else if (bmi < 25 && bmi < 24.9) {
        bmiStatus = 'Normal';
    }
    else if (bmi < 25 && bmi < 29.9) {
        bmiStatus = 'Pre-obesity';
    }
    else if (bmi < 30 && bmi < 34.9) {
        bmiStatus = 'Obesity class-I';
    }
    else if (bmi < 35 && bmi < 39.9) {
        bmiStatus = 'Obesity class-II';
    }
    else {
        bmiStatus = 'Obesity class-III'
    }
    document.getElementById("heights").innerHTML = `${height}`;
    document.getElementById("weights").innerHTML = `${weight}`;
    document.getElementById("bmiiii").innerHTML = `Your BMI is ${bmi} and you are ${bmiStatus}.`;
}

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("light")
})