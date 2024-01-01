const mongoose = require('mongoose');

async function connect() {
    try {
        console.log('CONNECTION OPENED');
        return await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
    }
    catch {
        console.log('ERROR IN CONNECTION');
    }
}
(async () => {
    await connect();
})();


const userSchema = new mongoose.Schema({
    username: String,
    age: Number
});

const tweetSchema = new mongoose.Schema({
    text: String,
    likes: Number,
    user: { type: mongoose.Schema.Types.ObjectId , ref: 'User' }
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);


const makeTweets = async () => {
    const user = new User({ username: 'chickenfan99', age: 61 });
    const tweet1 = new Tweet({ text:'hi', likes: 0 });
    tweet1.user = user; 
    await user.save();
    await tweet1.save();
}

const findTweet = async () => {
    const t = await Tweet.findOne({}).populate('user')
    console.log(t); 
}

findTweet();

// makeTweets();