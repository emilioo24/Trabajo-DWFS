const vares = require('./images_src');

function imgLogo() {
    document.getElementById('image').innerHTML = vares.img_logo;
}

function imgEmbarazada() {
    document.getElementById('image').innerHTML = vares.img_embarazada;
}

function imgPerfil() {
    document.getElementById('image').innerHTML = vares.img_perfil;
}

function imgPortada() {
    document.getElementById('image').innerHTML = vares.img_portada;
}

function imgPostura() {
    document.getElementById('image').innerHTML = vares.img_postura;
}

function imgFavicon() {
    document.getElementById('image').href = vares.img_favicon;
}