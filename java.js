// Seleccionamos el ícono y el menú
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Escuchamos el evento de clic en el ícono
menuIcon.addEventListener('click', () => {
    // Alternamos la clase "active" para mostrar/ocultar el menú
    navbar.classList.toggle('active');
});
