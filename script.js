let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        let expression = display.value;

        if (expression.includes('^')) {
            const parts = expression.split('^');
            display.value = Math.pow(eval(parts[0]), eval(parts[1]));
        } else if (expression.includes('√')) {
            const number = expression.split('√')[1];
            display.value = Math.sqrt(eval(number));
        } else {
            display.value = eval(expression);
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Přidání klávesových událostí
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Pokud je stisknuta klávesa "Enter"
    if (key === 'Enter') {
        calculate();
    }
    // Pokud je stisknuta klávesa "Escape"
    else if (key === 'Escape') {
        clearDisplay();
    }
    // Pokud je stisknuta klávesa "Backspace"
    else if (key === 'Backspace') {
        deleteLast();
    }
    // Přidání čísel a operací
    else if ('0123456789+-*/^√.'.includes(key)) {
        appendToDisplay(key);
    }
});

