class Temperature {
    constructor() {
        this.input
        this.inputUnit = 'Celsius'
        this.outputUnit = 'Celsius'
    }

    convertToKelvin() {
        if(isNaN(this.input)) return
        let input = parseFloat(this.input);
        let output
        switch (this.inputUnit) {
            case 'Celsius':
                output = input + 273.15
                break;
            case 'Kelvin':
                output = input
                
                break;
            case 'Fahrenheit':
                output = (input - 32) * 5 / 9 + 273.15
                break;
            default:
                return
        }
        this.convertToOutput(output)
    }
    
    convertToOutput(input) {
        let output
        switch (this.outputUnit) {
            case 'Celsius':
                output = input - 273.15
                break;
            case 'Kelvin':
                output = input
                break;
            case 'Fahrenheit':
                output = (input - 273.15) * 9 / 5 + 32
                break;
            default:
                return
        }
        this.updateDisplay(output)
    }

    updateDisplay(output) {
        document.getElementById('tempOutput').value = output
    }
}

let measurementValue = document.getElementById('measurement')
let tempInput = document.getElementById('tempInput')
let tempUnitInput = document.getElementById('tempUnitInput')
let tempUnitOutput = document.getElementById('tempUnitOutput')

const temperature = new Temperature()

tempInput.addEventListener('input', (e) => {
    if (e.target.value.slice(e.target.value.length - 1) == '') return
    temperature.input = e.target.value
    temperature.convertToKelvin()
})
tempUnitInput.addEventListener('input', (e) => {
    temperature.inputUnit = e.target.value
    temperature.convertToKelvin()

})
tempUnitOutput.addEventListener('input', (e) => {
    temperature.outputUnit = e.target.value
    temperature.convertToKelvin()
})
