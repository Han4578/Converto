class Temperature {
    constructor() {
        this.input
        this.inputUnit = 'Fahrenheit'
        this.outputUnit = 'Celsius'
    }

    convertToKelvin() {
        if (isNaN(this.input) || this.input == '') return
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
                if (this.inputUnit == 'Fahrenheit') {
                    output = this.input
                    break
                }
                output = (input - 273.15) * 9 / 5 + 32
                break;
            default:
                return
        }
        this.updateDisplay(output)
    }

    updateDisplay(output) {
        outputValue.value = output
    }
}
class Distance {
    constructor() {
        this.input
        this.inputUnit = 'Meter'
        this.outputUnit = 'Yard'
    }

    convertToMeter() {
        if (isNaN(this.input)) return
        let input = parseFloat(this.input);
        let output
        switch (this.inputUnit) {
            case 'Kilometer':
                output = input * 1000
                break;
            case 'Meter':
                output = input

                break;
            case 'Centimeter':
                output = input / 100
                break;
            case 'Millimeter':
                output = input / 1000
                break;
            case 'Mile':
                output = input * 1609
                break;
            case 'Yard':
                output = input / 1.094
                break;
            case 'Foot':
                output = input / 3.281
                break;
            case 'Inch':
                output = input / 39.37
                break;
            default:
                return
        }
        this.convertToOutput(output)
    }

    convertToOutput(input) {
        let output
        switch (this.outputUnit) {
            case 'Kilometer':
                output = input / 1000
                break;
            case 'Meter':
                output = input

                break;
            case 'Centimeter':
                output = input * 100
                break;
            case 'Millimeter':
                output = input * 1000
                break;
            case 'Mile':
                output = input / 1609
                break;
            case 'Yard':
                output = input * 1.094
                break;
            case 'Foot':
                output = input * 3.281
                break;
            case 'Inch':
                output = input * 39.37
                break;
            default:
                return
        }
        this.updateDisplay(output)
    }

    updateDisplay(output) {
        outputValue.value = output
    }
}

let physicalQuantity = document.getElementById('physicalQuantity')
let input = document.getElementById('input')
let inputValue
let unitInput = document.querySelectorAll('.unitInput')
let unitInputValue = 'Fahrenheit'
let unitOutput = document.querySelectorAll('.unitOutput')
let unitOutputValue = 'Celsius'
let outputValue = document.getElementById('output')
let swapButton = document.querySelector('.swap')
let clearButton = document.querySelector('.clear')
let selection = document.querySelectorAll('.selection')

const temperature = new Temperature()
const distance = new Distance()

physicalQuantity.addEventListener('input', e => {
    let activeClass
    switch (e.target.value) {
        case 'temperature':
            activeClass = '.temperature'
            break;

        case 'distance':
            activeClass = '.distance'
            break;
        default:
            return
    }

    document.querySelectorAll('.active').forEach(i => {
        i.classList.remove('active')
    })

    document.querySelectorAll(activeClass).forEach(i => {
        i.classList.add('active')
    })

    unitInputValue = document.querySelector('.active.unitInput').value
    unitOutputValue = document.querySelector('.active.unitOutput').value

    clear()
})

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

clearButton.addEventListener('click', clear)

function clear() {
    input.value = inputValue = output.value = ''
}

function convert() {
    switch (physicalQuantity.value) {
        case ('temperature'):
            temperature.input = inputValue
            temperature.inputUnit = unitInputValue
            temperature.outputUnit = unitOutputValue
            temperature.convertToKelvin()
            break;
        case ('distance'):
            distance.input = inputValue
            distance.inputUnit = unitInputValue
            distance.outputUnit = unitOutputValue
            distance.convertToMeter()
            break;
        default:
            return
    }
}