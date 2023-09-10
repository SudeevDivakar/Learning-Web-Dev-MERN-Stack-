let maxLimit = parseInt(prompt("Enter a maximum number"));
while (!maxLimit){
    maxLimit = parseInt(prompt("Enter a valid maximum number"));
}

const numberToBeGuessed = Math.floor(Math.random() * (maxLimit)) + 1;

let guess_count = 0;
let guess = prompt("Enter your first guess");

while(parseInt(guess) !== numberToBeGuessed){
    if(guess === 'q'){
        console.log('YOU QUIT');
        break;
    }
    else if(!parseInt(guess)){
        guess = prompt("Enter a valid guess");
        continue;
    }
    else if(parseInt(guess) > numberToBeGuessed){
        guess = prompt("Too high. Guess Again");
        guess_count++;
        continue;
    }
    else if(parseInt(guess) < numberToBeGuessed){
        guess = prompt("Too low. Guess Again");
        guess_count++;
    }
}
if(guess !== 'q'){
    console.log("CONGRATS!!!!")
    console.log(`It took you ${guess_count+1} guesses`);
}
