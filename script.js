const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');
const clear = document.getElementById('clear');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});

clear.addEventListener('click', () => {
    display.value = '';
});
