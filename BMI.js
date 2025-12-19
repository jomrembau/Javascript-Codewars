function bmiCalculator(weight,height) {
    var bmi =  Math.floor(weight / (height * height))
    return bmi
}

console.log(bmiCalculator(85,1.7));
