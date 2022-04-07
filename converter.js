class Temperature {
    constructor() {
        this.input
        this.inputUnit = 'Celsius'
        this.outputUnit = 'Celsius'
    }

    convert() {
        console.log(this.input)
        switch (this.inputUnit) {
            case 'Celsius':
                this.celsiusConvert()
                break;
            case 'Kelvin':
                this.kelvinConvert()
                break;
            case 'Fahrenheit':
                this.fahrenheitConvert()
                break;
            default:
                return
        }
    }
    celsiusConvert() {
        let input = parseFloat(this.input)
        let output
        switch (this.outputUnit) {
            case 'Celsius':
                output = input
                break;
            case 'Kelvin':
                output = input + 273.15
                break;
            case 'Fahrenheit':
                output = (input * 9 / 5) + 32
                break;
            default:
                return
        }
        this.updateDisplay(output)
    }

    kelvinConvert() {
        let input = parseFloat(this.input)
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

    fahrenheitConvert() {
        let input = parseFloat(this.input)
        let output
        switch (this.outputUnit) {
            case 'Celsius':
                output = (input - 32) * 5 / 9
                break;
            case 'Kelvin':
                output = (input - 32) * 5 / 9 + 273.15
                break;
            case 'Fahrenheit':
                output = input
                break;
            default:
                return
        }
        this.updateDisplay(output)
    }

    updateDisplay(output) {
        document.getElementById('tempOutput').value = output
        console.log(output)
    }
}

let measurementValue = document.getElementById('measurement')
let tempInput = document.getElementById('tempInput')
let tempUnitInput = document.getElementById('tempUnitInput')
let tempUnitOutput = document.getElementById('tempUnitOutput')

const temperature = new Temperature()

tempInput.addEventListener('input', (e) => {
    temperature.input = e.target.value
})
tempUnitInput.addEventListener('onchange', (e) => {
    temperature.inputUnit = e.target.value
})
tempUnitOutput.addEventListener('onChange', (e) => {
    temperature.outputUnit = e.target.value
    console.log(e)
})