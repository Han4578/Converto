class Temperature {
    constructor() {
        this.input
        this.inputUnit = 'Fahrenheit'
        this.outputUnit = 'Celsius'
    }

    convertToKelvin() {
        if (isNaN(this.input)) return
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
        document.getElementById('output').value = output
    }
}
class Distance {
    constructor() {
        this.input
        this.inputUnit
        this.outputUnit = unitOutputValue
    }

    convertToKelvin() {
        if (isNaN(this.input)) return
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
        document.getElementById('output').value = output
    }
}

let measurementValue = document.getElementById('measurement')
let input = document.getElementById('input')
let unitInput = document.querySelectorAll('.unitInput')
let unitOutput = document.querySelectorAll('.unitOutput')
let swapButton = document.querySelector('.swap')
let selection = document.querySelectorAll('.selection')
let inputValue
let unitInputValue = document.querySelector('.active.unitInput').value
let unitOutputValue = document.querySelector('.active.unitOutput').value

const temperature = new Temperature() 
const distance = new Distance() 

input.addEventListener('input', e => {
    if (e.target.value.slice(e.target.value.distance - 1) == '') return;
    inputValue = e.target.value;
    convert()
})

unitInput.forEach(i => {
    i.addEventListener('input', e => {
        unitInputValue = e.target.value;
        convert()

    })

})

unitOutput.forEach(o => {
    o.addEventListener('input', e => {
        unitOutputValue = e.target.value;
        convert()

    })

})

swapButton.addEventListener('click', () => {
    let input = document.querySelector('.active.unitInput').value
    let output = document.querySelector('.active.unitOutput').value
    document.querySelector('.active.unitOutput').value = input
    document.querySelector('.active.unitInput').value = output
    unitOutputValue = input
    unitInputValue = output
    convert()
})

function convert() {
    switch (document.querySelector('#measurement').value) {
        case('temperature'):
        temperature.input = inputValue
        temperature.inputUnit = unitInputValue
        temperature.outputUnit = unitOutputValue
        temperature.convertToKelvin()
        break;
        case('distance'):
        distance.input = inputValue
        distance.inputUnit = unitInputValue
        distance.outputUnit = unitOutputValue
       // distance.convertToMeter()
        break;
        default:return
    }
}

