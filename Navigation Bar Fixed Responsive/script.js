const navToggle = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.sidebar');
const closeSideBar = document.querySelector('.close-btn');
const openModal = document.querySelector('.btn');
const closeModal = document.querySelector('.close-btn-modal');
const winModal = document.querySelector('.modal-overlay')

// local reviews data
const reviews = [{
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},
{
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://img.freepik.com/foto-gratis/mujer-hermosa-joven-mirando-camara-chica-moda-verano-casual-camiseta-blanca-pantalones-cortos-hembra-positiva-muestra-emociones-faciales-modelo-divertido-aislado-amarillo_158538-15796.jpg?t=st=1701865775~exp=1701866375~hmac=c641f74c7c48823b82d5923c093cdc622caee3ee19a9007f0103ead2abd743bd',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
},
{
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://img.freepik.com/foto-gratis/joven-dice-que-si-mostrando-pulgares-arriba-senal-aprobacion-elogie-buen-trabajo-sonriendo-aprobacion-pie-sobre-fondo-blanco_231208-14077.jpg?t=st=1701865297~exp=1701865897~hmac=a6df96aadabba0c030bbf30e67024cfad729dda6785bb647988790ab23790fbe',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
},
{
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://img.freepik.com/foto-gratis/sonriente-joven-caucasico-camisa-verde-apunta-arriba-sobre-fondo-blanco-aislado_141793-38574.jpg?t=st=1701865637~exp=1701866237~hmac=ec653a5c25061ac7b456aad32a0c3c603076e18b15e1f12cdbbfe05140d587c5',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
},
];

// select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item

let currentItem = 0;
let crntItem;
// load initial item

window.addEventListener('DOMContentLoaded', function () {
showPerson();
});

navToggle.addEventListener('click', function () {
    sidebar.classList.add('show-sidebar');
});

closeSideBar.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
});

openModal.addEventListener('click', function () {
    winModal.classList.add('open-modal');
});

closeModal.addEventListener('click', function () {
    winModal.classList.remove('open-modal');
});


// show person based on item function

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length) currentItem = 0;
    showPerson();
});

// show prev person

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < reviews.length) currentItem = 3;
    showPerson();
});

// show random person

randomBtn.addEventListener('click', function () {
    crntItem = currentItem;
    do {
        currentItem = Math.floor(Math.random() * (reviews.length - 1));
    } while (currentItem == crntItem);
    showPerson();
});