// Script de la página.

let card = {

    img: "ArteYDiseno/gafas.jpg",

    title: "Gafas",

    subtitle: "€ 499"

};


let card1 = {

    img: "ArteYDiseno/grifo.jpg",

    title: "Grifo",

    subtitle: "€"

};


let card2 = {

    img: "ArteYDiseno/jarra.jpg",

    title: "Jarra",

    subtitle: "€"

};


let card3 = {

    img: "ArteYDiseno/mesa.jpg",

    title: "Mesa",

    subtitle: "€"

};

let card4 = {

    img: "ArteYDiseno/silla.jpg",

    title: "Silla",

    subtitle: "€"

};

let card5 = {

    img: "ArteYDiseno/rifle.jpg",

    title: "Rifle",

    subtitle: "€"

};


let cards = [card, card1, card2, card3, card4, card5];


let div = document.getElementById('cards');


let content = '';

for (let i = 0; i < cards.length; i++) {

    content += '<div class="card col-lg-4 col-md-6 col-sm-12 col-xs">'

    +
    '<img class="img-fluid" style="max-width:300px;" class="rounded" src="' + cards[i].img + '">'

    +
    '<h1 class="text-center">' + cards[i].title + '</h3>'

    +
    '<p class="text-center">' + cards[i].subtitle + '</p>'

    +
    "</div>";

}

div.innerHTML = '<div class="row">' + content + '</div>';