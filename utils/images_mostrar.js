const vares = require('./images_src');

function mostrarImages(images) {
    let imageHTML = '';
    images.forEach(element => {
        imageHTML += `<img src="${vares.img_logo}" alt="Lic. Florencia Calderón - Pelvis On - Rehabilitación de piso pélvico">`
    });
    
    document.getElementById('img-logo').innerHTML = imageHTML;
}