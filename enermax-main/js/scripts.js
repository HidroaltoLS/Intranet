document.addEventListener('DOMContentLoaded', function() {
    let colorState = 0; // 0: rojo, 1: azul, 2: verde

    document.getElementById('toggle-image').addEventListener('click', function() {
        // Determinar el nuevo color y texto según el estado actual
        let newColor, newTextLeft, newTextRight, newImageSrc;
        if (colorState === 0) {
            newColor = 'blue';
            newTextLeft = 'HIDRO';
            newTextRight = 'ALTO';
            newImageSrc = 'images/Turbina_azul.png';
            colorState = 1;
        } else if (colorState === 1) {
            newColor = 'green';
            newTextLeft = 'HIDRO';
            newTextRight = 'RIENTE';
            newImageSrc = 'images/Turbina_verde.png';
            colorState = 2;
        } else {
            newColor = 'red';
            newTextLeft = 'ENER';
            newTextRight = 'MAX';
            newImageSrc = 'images/Turbina_roja.png';
            colorState = 0;
        }

        // Cambiar todos los elementos con color rojo, azul o verde al nuevo color
        document.querySelectorAll('.header-left, .header-right, .administracion, .biblioteca, .tecnico, .capacitacion, h2, .footer-left, .footer-right').forEach(function(element) {
            if (window.getComputedStyle(element).backgroundColor === 'rgb(255, 0, 0)' || window.getComputedStyle(element).backgroundColor === 'rgb(0, 0, 255)' || window.getComputedStyle(element).backgroundColor === 'rgb(0, 128, 0)') {
                element.style.backgroundColor = newColor;
            }
            if (window.getComputedStyle(element).color === 'rgb(255, 0, 0)' || window.getComputedStyle(element).color === 'rgb(0, 0, 255)' || window.getComputedStyle(element).color === 'rgb(0, 128, 0)') {
                element.style.color = newColor;
            }
        });

        // Cambiar el color del texto de los enlaces en footer-right
        document.querySelectorAll('.footer-right .links a').forEach(function(element) {
            if (window.getComputedStyle(element).color === 'rgb(255, 0, 0)' || window.getComputedStyle(element).color === 'rgb(0, 0, 255)' || window.getComputedStyle(element).color === 'rgb(0, 128, 0)') {
                element.style.color = newColor;
            }
        });

        // Cambiar el texto en header-left y header-right
        document.getElementById('enermax-title-left').textContent = newTextLeft;
        document.getElementById('enermax-title-right').textContent = newTextRight;

        // Cambiar el texto en footer-left y footer-right
        document.getElementById('ener').textContent = newTextLeft;
        const maxElement = document.getElementById('max');
        maxElement.textContent = newTextRight;
        maxElement.style.color = newColor;  // Cambiar el color del elemento max

        // Cambiar la fuente de la imagen
        document.getElementById('toggle-image').src = newImageSrc;

        // Crear o actualizar un elemento de estilo para pseudo-elementos
        let styleElement = document.getElementById('dynamic-styles');
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'dynamic-styles';
            document.head.appendChild(styleElement);
        }

        // Actualizar el elemento de estilo con nuevos estilos para pseudo-elementos
        styleElement.innerHTML = `
            li::before {
                background-color: ${newColor} !important;
            }
            li::after {
                background-color: ${newColor} !important;
            }
            main::after {
                background-color: ${newColor} !important;
            }
            main::before {
                background-color: ${newColor} !important;
            }
        `;
    });
});