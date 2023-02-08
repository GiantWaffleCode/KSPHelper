import { Kerbol } from './kerbol.js';

//Make list of Planets of system

var planetList = []

Object.keys(Kerbol.Planets).forEach(function(key) {
    planetList.push(Kerbol.Planets[key])
});

let planetUL = document.getElementById('myPlanetList');

planetList.forEach((item)=>{
    let li = document.createElement('li');
    li.innerText = item.name;
    planetUL.appendChild(li);
});

//When body is selected make list of moons of body

function generateMoonList() {
    var selectedList = document.getElementById('myPlanetList');
    var selectedPlanet = selectedList.getElementsByClassName('active')[0];
    //console.log(selectedPlanet.outerText); //This is the text of the Planet

    planetList.forEach((planet)=>{
        if (planet.name == selectedPlanet.outerText) {
            //console.log('Selected Planet is...');
            //console.log(planet.name);
 
            var moonList = [];

            let moonUL = document.getElementById('myMoonList');

            moonUL.innerHTML = ''; //clear List

            if (planet.moons == null) { //guard clause for no moons
                let li = document.createElement('li');
                li.innerText = 'None';
                moonUL.appendChild(li);
                return;
            };

            Object.keys(planet.moons).forEach(function(key) { //make moonList
                moonList.push(planet.moons[key]);
            });

            console.log(moonList);

            moonList.forEach((item)=>{ //create list of moons
                let li = document.createElement('li');
                li.innerText = item.name;
                moonUL.appendChild(li);
            }); 

            //TODO: ADD event listener for click
        };
    });
};

function updateUL(listItem) {
    listItem.addEventListener('click', () => {
        const { select, caret, menu, options, selected} = genQuery(dropdown);
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(option => {
            option.classList.remove('active');
        });
        option.classList.add('active');
    });
};

function genQuery(obj) { //generate queries
    const select = obj.querySelector('.select');
    const caret = obj.querySelector('.caret');
    const menu = obj.querySelector('.menu');
    const options = obj.querySelectorAll('.menu li');
    const selected = obj.querySelector('.selected');

    return { select, caret, menu, options, selected }; //return obj of queries
};


const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const { select, caret, menu, options, selected} = genQuery(dropdown);
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');   
    });
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
            console.log(option);
            generateMoonList();
        });
    });
});
