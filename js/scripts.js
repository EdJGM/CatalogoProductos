/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.querySelectorAll('img').forEach(function (img) {
    // Crear los elementos div
    var divCol = document.createElement('div');
    var divCard = document.createElement('div');

    // Agregar las clases a los divs
    divCol.classList.add('col', 'mb-5');
    divCard.classList.add('card', 'h-100');

    // Agregar la clase a la imagen
    img.classList.add('card-img-top');

    // Agregar la imagen al div
    divCard.appendChild(img);
    divCol.appendChild(divCard);

    // Agregar el div al DOM
    document.querySelector('.row').appendChild(divCol);
});