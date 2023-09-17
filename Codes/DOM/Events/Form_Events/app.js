const form = document.querySelector('form');
const list = document.querySelector('#cats');

form.addEventListener('submit',function(evt){
    evt.preventDefault();
    let input = document.querySelector('#catname');
    let newCat = document.createElement('li');
    newCat.append(input.value);
    list.appendChild(newCat);
    input.value = '';
});