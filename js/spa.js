const routes = {
    '#home': '<h2>Bienvenido a la pagina de Inicio</h2><p>Este es el contenido de la pagina principal</p>',
    '#about': '<h2>Acerca de</h2><p>Somos una empresa innovadora.</p>',
    '#contact': '<h2>COntacto</h2><p>Puedes contactarnos en ejemplo@empresa.com</p>'
};

function router(){
    const hash = window.location.hash;
    const content = document.getElementById('content');

    content.innerHTML = routes[hash] || '<h2>Pagina no encontrada</h2><p>La pagina que buscas no existe.</p>';
}

window.addEventListener('haschange', router);
window.addEventListener('load', router);