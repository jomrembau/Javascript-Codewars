function get_bmi(weight,height) {
    var bmi =  parseFloat(weight / (height * height)).toFixed(2);
    return bmi
}

get_bmi(88,1.7);
    
