const allImages = document.getElementsByTagName('img'); 
console.log(allImages[1]);       
for(img of allImages){                  //converts all images into the same image.
    console.log(img.src);
    // img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"
}


const squareImages = document.getElementsByClassName('square');
for(let img of squareImages){  
    console.log(img)                                 
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"   //converts all images of the same class to the same image.
}