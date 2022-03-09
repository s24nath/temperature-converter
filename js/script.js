let leftInput = document.getElementById("lft_inp"); // Getting left input box
let rightInput = document.getElementById("rht_inp"); // Getting right input box
let tempSelLft = document.getElementById("temp_select_lft"); // Getting left select box
let tempSelRht = document.getElementById("temp_select_rht"); // Getting right select box

// Creating the Formula for conversion
function convertTemperature(from,to,val) {
    let result;
    if(from === 'c') {
        if(to === 'f') { 
            result = (val * 9/5) + 32; // Celsius to Fahrenheit
        } else if(to === 'k') {
            result = val + 273.15; // Celsius to Kelvin
        } else {
            result = val;
        }
    } else if(from === 'f') { 
        if(to === 'c') {
            result = (val - 32) * 5/9; // Fahrenheit to Celsius
        } else if(to === 'k') {
            result = ((val - 32) * 5/9) + 273.15; // Fahrenheit to Kelvin 
        } else {
            result = val;
        }
    } else {
        if(to === 'c') {
            result = val - 273.15; // Kelvin to Celsius
        } else if(to === 'f') {
            result = ((val - 273.15) * 9/5) + 32; // Kelvin to Fahrenheit
        } else {
            result = val;
        }
    }
    return result;
}

// Triggers when typing in left input box
leftInput.addEventListener('input',function(){
    let currval = this.value; // Left Input Value
    let from = tempSelLft.value;  // Left Select Value
    let to = tempSelRht.value;  // Right Select Value
    rightInput.value = convertTemperature(from,to,currval);
});

// Triggers when typing in right input box
rightInput.addEventListener('input',function(){
    let currval = this.value; // Right Input Value
    let from = tempSelRht.value; // Right Select Value
    let to = tempSelLft.value; // Left Select Value
    leftInput.value = convertTemperature(from,to,currval);
});

// Triggers when there is a chenge in left select box
tempSelLft.addEventListener('change',function(){
    let currval = leftInput.value; // Left Input Value
    let leftTempVal = this.value; // Left Select Value
    let rhtTempVal = tempSelRht.value; // Right Select Value
    rightInput.value = convertTemperature(leftTempVal,rhtTempVal,currval);
});

// Triggers when there is a chenge in right select box
tempSelRht.addEventListener('change',function(){
    let currval = rightInput.value; // Right Input Value
    let leftTempVal = tempSelLft.value; // Left Select Value
    let rhtTempVal = this.value; // Right Select Value
    leftInput.value = convertTemperature(rhtTempVal,leftTempVal,currval);
});