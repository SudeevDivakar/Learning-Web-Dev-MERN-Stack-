const button = document.querySelector('#change');
const h1 = document.querySelector('h1');
button.addEventListener('click',() => {
    let newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

function makeRandColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256); 
    return `rgb(${r},${g},${b})`;
}