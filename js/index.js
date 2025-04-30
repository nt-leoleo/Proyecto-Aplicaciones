function buttonsOut(clickedButton) {
    // Selecciona todos los botones
    const buttons = document.querySelectorAll('.aplication-button');

    // Recorre todos los botones
    buttons.forEach(button => {
        if (button !== clickedButton) {
            // Aplica la clase de animación a los botones que no fueron presionados
            button.classList.add('buttons-out');

            // Elimina la clase después de que termine la animación
            button.addEventListener('animationend', () => {
                button.classList.remove('buttons-out');
            }, { once: true });
        }
    });
}
function calculadora() {
    // Espera 1 segundo (1000 ms) antes de ejecutar el código
    setTimeout(() => {
        // Selecciona todos los botones
        const buttons = document.querySelectorAll('.aplication-button');

        // Recorre todos los botones
        buttons.forEach(button => {
            // Si el botón no es el que tiene la clase "Calculadora", lo oculta
            if (!button.textContent.includes('Calculadora')) {
                button.style.display = 'none'; // Oculta el botón
            }
        });
    }, 800); // Cambia 1000 por el tiempo en milisegundos que desees
}