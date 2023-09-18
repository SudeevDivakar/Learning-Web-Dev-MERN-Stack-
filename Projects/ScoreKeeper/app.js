// To make code smaller, we can create two object literals(one for player1 and one for player2) and then assign buttons and other elements to each 
// of them. We can then write functions where we pass in these object literals and access the required elements.


let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let resetbtn = document.querySelector('#reset');
let changed = document.querySelector('#maxpoint')
let form = document.querySelector('form');
let player1 = document.querySelector('#p1');
let player2 = document.querySelector('#p2');
let winner = 0;

form.addEventListener('submit',function(evt){
    evt.preventDefault();
});

btn1.addEventListener('click',function (evt){
    let max = form.elements.maxpoint.value;
    player1.innerHTML = `${parseInt(player1.innerHTML) + 1}`;
    if(player1.innerHTML === max){
        winner = 1;
        player1.classList.add('green');
        player2.classList.add('red');
        btn1.disabled = true;
        btn2.disabled = true;
    }
    evt.stopPropagation();
});

btn2.addEventListener('click',function(evt){
    let max = form.elements.maxpoint.value;
    player2.innerHTML = `${parseInt(player2.innerHTML) + 1}`
    if(player2.innerHTML === max){
        winner = 2;
        player1.classList.add('red');
        player2.classList.add('green');
        btn1.disabled = true;
        btn2.disabled = true;
    }
    evt.stopPropagation();
});

changed.addEventListener('change',function(evt){
    if(winner === 1){
        player1.classList.remove('green');
        player2.classList.remove('red');
    }
    else if(winner === 2){
        player1.classList.remove('red');
        player2.classList.remove('green');
    }
    player1.innerHTML = '0';
    player2.innerHTML = '0';
    btn1.disabled = false;
    btn2.disabled = false;
    evt.stopPropagation();
});


resetbtn.addEventListener('click',function(evt){
    if(winner === 1){
        player1.classList.remove('green');
        player2.classList.remove('red');
    }
    else if(winner === 2){
        player1.classList.remove('red');
        player2.classList.remove('green');
    }
    player1.innerHTML = '0';
    player2.innerHTML = '0';
    btn1.disabled = false;
    btn2.disabled = false;
    form.elements.maxpoint.value = '3';
    evt.stopPropagation();
})