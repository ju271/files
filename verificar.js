document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('captcha-slider');
    const message = document.getElementById('captcha-message');
    const submitButton = document.getElementById('submit-button');

    slider.addEventListener('input', function() {
        if (slider.value == 100) {
            message.textContent = 'Verificação concluída!';
            message.style.color = 'green';
            submitButton.disabled = false;
            submitButton.classList.add('enabled');

            // Redirecionar para uma nova página após 1 segundo
            setTimeout(function() {
                window.location.href = 'nova_pagina.html'; // Substitua 'nova_pagina.html' pela URL desejada
            }, 1000);
        } else {
            message.textContent = 'Por favor, arraste o controle deslizante até o final.';
            message.style.color = 'red';
            submitButton.disabled = true;
            submitButton.classList.remove('enabled');
        }
    });

    document.getElementById('captcha-form').addEventListener('submit', function(e) {
        if (slider.value != 100) {
            e.preventDefault();
            alert('Por favor, conclua o reCAPTCHA.');
        }
    });
});
