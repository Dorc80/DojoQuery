let count = 0;

$DojoQuery('#btn').click(function() {
    document.querySelector('#parrafo').innerText = 'Has hecho click en el boton ' + ++count;
});

$DojoQuery('#btn').pasarcursor(function() {
    this.classList.add('red');
}, function() {
    this.classList.remove('red');
});