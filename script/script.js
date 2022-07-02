const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-toggle div');
const animasiNav = document.querySelector('#animasiNavigasi');

const buttons = document.querySelectorAll('.btn');


menuToggle.addEventListener('click', function(){
    menu.classList.toggle('dua');
    animasiNav.classList.toggle('animasiNav');
});

for(const tombol of buttons){
    tombol.addEventListener('click', function(){
        menu.classList.toggle('dua');
        animasiNav.classList.toggle('animasiNav');
    })
}