const temperature = {
    convertToKelvin() {
        if (isNaN(inputValue) || inputValue == '') return
        let input = parseFloat(inputValue);
        let output
        switch (unitInputValue) {
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
    },

    convertToOutput(input) {
        let output
        switch (unitOutputValue) {
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
    },

    updateDisplay(output) {
        outputValue.value = output
    }
}
const distance = {
    convertToMeter() {
        if (isNaN(inputValue)) return
        let input = parseFloat(inputValue);
        let output
        switch (unitInputValue) {
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
                output = input * 1609.344
                break;
            case 'Yard':
                output = input * 0.9144
                break;
            case 'Foot':
                output = input * 0.3048
                break;
            case 'Inch':
                output = input * 0.0254
                break;
            default:
                return
        }
        this.convertToOutput(output)
    },

    convertToOutput(input) {
        let output
        switch (unitOutputValue) {
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
                output = input / 1609.344
                break;
            case 'Yard':
                output = input / 0.9144
                break;
            case 'Foot':
                output = input / 0.3048
                break;
            case 'Inch':
                output = input / 0.0254
                break;
            default:
                return
        }
        this.updateDisplay(output)
    },

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
            temperature.convertToKelvin()
            break;
        case ('distance'):
            distance.convertToMeter()
            break;
        default:
            return
    }
}