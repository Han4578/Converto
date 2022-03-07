class Temperature{
    constructor(input,inputUnit,outputUnit){
        this.input = input
        this.inputUnit = inputUnit
        this.outputUnit = outputUnit
    }

    celciusConvert() {
        let input = parseFloat(this.input)
        let output
        switch(this.outputUnit){
            case 'Celcius':
                output = input
                break;
            case 'Kelvin':
                output = input + 273.15
                break;
            case 'Fahrenheit':
                output = (input*9/5) + 32
                break;
            default:return
        }
        
    }
}

let measurementValue = document.getElementById('measurement').value
let tempInput = document.getElementById('tempInput').value
let tempUnitInput = document.getElementById('tempUnitInput').value
let tempUnitOutput = document.getElementById('tempUnitOutput').value

const temperature = new Temperature(tempInput,tempUnitInput,tempUnitOutput)


