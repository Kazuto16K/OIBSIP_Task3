function ConvertTemperature(){
    const temp = parseFloat(document.getElementById('inputValue').value);
    const output = document.getElementById('outputValue');

    const inputType = document.querySelector('input[name="inputUnit"]:checked').value;
    const outputType = document.querySelector('input[name="outputUnit"]:checked').value;

    let result;

    if(temp === ''){
        result ='NaN'
    }
    else{
        if(inputType === outputType){
            result = temp
            result = result + ' ' + inputType
        }
        else if(inputType === 'C' && outputType === 'F'){
            result = (temp * 9/5) + 32;
            result = result + ' °F'
        }
        else if(inputType === 'F' && outputType === 'C'){
            result = (temp - 32) * 5/9;
            result = result + ' °C'
        }
        else if(inputType === 'C' && outputType === 'K'){
            result = temp + 273.15
            result = result + ' K'
        }
        else if(inputType === 'F' && outputType === 'K'){
            result = (temp * 9/5) + 32;
            result += 273.14
            result = result + ' K'
        }
        else if(inputType == 'K' && outputType === 'C'){
            result = temp - 273.15
            result = result + ' °C'
        }
        else if(inputType == 'K' && outputType === 'F'){
            result = temp - 273.15
            result = (result - 32) * 5/9;
            result = result + ' °F'
        }
    }
    
    console.log(result)
    
    output.value = result
}