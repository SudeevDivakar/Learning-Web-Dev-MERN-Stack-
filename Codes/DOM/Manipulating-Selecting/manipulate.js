const input = document.querySelector('input[type = "text"]');
input.setAttribute('type','password');                      //Changes input type from text to password

let h2 = document.querySelector('h2');       //Changing styles
h2.setAttribute('class','purple');
let currentClasses = h2.getAttribute('class');
h2.setAttribute('class',`${currentClasses} border`);

const newImg = document.createElement('img');
newImg.src = 'https://b.fssta.com/uploads/application/soccer/headshots/53004.vresize.350.350.medium.20.png';
newImg.classList.add('square');
document.body.appendChild(newImg);

const newPara = document.createElement('h2');
newPara.innerHTML = '<i>I am new!</i>';
document.body.appendChild(newPara);

const newElement = document.createElement('h2');
newElement.append('Are Cool');
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend',newElement);