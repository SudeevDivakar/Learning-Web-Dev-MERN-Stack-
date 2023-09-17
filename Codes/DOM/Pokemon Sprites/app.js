// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
let container1 = document.querySelector('#container1');
container1.classList.add('pokemon');
for(let i = 1 ; i < 152 ; i++){
    let pokemon = document.createElement('div');
    let img = document.createElement('img');
    let label = document.createElement('span');
    label.innerText = `#${i}`;
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    pokemon.appendChild(img);
    pokemon.appendChild(label);
    container1.appendChild(pokemon);
}



let container2 = document.querySelector('#container2');
container2.classList.add('pokemon');
for(let i = 152 ; i < 252 ; i++){
    let pokemon = document.createElement('div');
    let img = document.createElement('img');
    let label = document.createElement('span');
    label.innerText = `#${i}`;
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    pokemon.appendChild(img);
    pokemon.appendChild(label);
    container2.appendChild(pokemon);
}



let container3 = document.querySelector('#container3');
container3.classList.add('pokemon');
for(let i = 252 ; i < 387 ; i++){
    let pokemon = document.createElement('div');
    let img = document.createElement('img');
    let label = document.createElement('span');
    label.innerText = `#${i}`;
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    pokemon.appendChild(img);
    pokemon.appendChild(label);
    container3.appendChild(pokemon);
}



let container4 = document.querySelector('#container4');
container4.classList.add('pokemon');
for(let i = 387 ; i < 494 ; i++){
    let pokemon = document.createElement('div');
    let img = document.createElement('img');
    let label = document.createElement('span');
    label.innerText = `#${i}`;
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    pokemon.appendChild(img);
    pokemon.appendChild(label);
    container4.appendChild(pokemon);
}


let container5 = document.querySelector('#container5');
container5.classList.add('pokemon');
for(let i = 494 ; i < 650 ; i++){
    let pokemon = document.createElement('div');
    let img = document.createElement('img');
    let label = document.createElement('span');
    label.innerText = `#${i}`;
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    pokemon.appendChild(img);
    pokemon.appendChild(label);
    container5.appendChild(pokemon);
}