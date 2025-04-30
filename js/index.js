const buttons = document.querySelectorAll(".aplication-button");

buttons.forEach(clickedButton => {
    clickedButton.addEventListener('click', () => {
        buttons.forEach(button => {
            if (button !== clickedButton) {
                // Agrega la clase de animación para que salgan de la pantalla
                button.classList.add('buttons-out');

                // Escucha el final de la animación
                button.addEventListener('animationend', () => {
                    // Elimina el botón del DOM después de la animación
                    button.remove();
                }, { once: true }); // Se asegura de que el evento se ejecute solo una vez
            }
        });

        // Espera 100ms después de que los demás botones desaparezcan
        setTimeout(() => {
            // Agrega la clase de animación al botón seleccionado
            clickedButton.classList.add('buttons-out');

            // Escucha el final de la animación para eliminar el botón seleccionado
            clickedButton.addEventListener('animationend', () => {
                clickedButton.remove();
            }, { once: true });
        }, 100); // Espera 100ms
    });
});