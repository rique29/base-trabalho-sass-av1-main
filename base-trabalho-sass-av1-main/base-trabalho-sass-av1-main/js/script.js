document.addEventListener('DOMContent oaded', function() {
    var waitlistButton = document.getElementById('waitlistButton');

    waitlistButton.addEventListener('click ', function() {
        document.getElementById('mensagem').innerText = 'Obrigado por entrar na nossa lista de espera!';
    });
})