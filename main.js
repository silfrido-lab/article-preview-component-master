const boton = document.querySelector('#boton');
boton.addEventListener('click', function() {
    console.log('click');
    document.getElementById('redes').classList.toggle('active');
});