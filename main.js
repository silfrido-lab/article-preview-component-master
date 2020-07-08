const boton = document.querySelector('#boton');
boton.addEventListener('click', function() {
    console.log('click');
    document.getElementById('redes').classList.toggle('active');
    document.getElementById('img').classList.toggle('active');
    document.getElementById('img-p').classList.toggle('active');
    document.getElementById('boton').classList.toggle('active');
});