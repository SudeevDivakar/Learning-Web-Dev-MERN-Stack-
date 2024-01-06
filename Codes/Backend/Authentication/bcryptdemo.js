const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(10);   // Over here 10 is the number of salt rounds which basically dictates the difficulty(amount of time taken to compute a hash)
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if(result){
        console.log("Logged in! Successful match");
    }
    else{
        console.log('Incorrect');
    }
}

// hashPassword('monkey');
login('monkey', '$2b$10$OlqLvkOAp39oV7emwSdBP.HJc.cG7LlUjsUgLRYOaOwE3.MRQNfGq');