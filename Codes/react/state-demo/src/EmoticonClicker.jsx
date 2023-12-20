import {v4 as uuid} from 'uuid';
import { useState } from "react";

const emojis = ['😊', '😂', '😍', '😎', '🤩', '🥳', '😜', '😇', '🤔', '🙄', '😏', '🤯', '😴', '🤪', '🥺', '😢', '😭', '🤬', '🤮', '🤕'];
export default function EmoticonClicker(){
    const [emoticons, setEmoticon] = useState([{id: uuid(),emoji:'😊'}]);
    function makeHeart(){
        setEmoticon((oldEmoticons) => {
            return oldEmoticons.map((i) => {
                return {id: i.id, emoji: '❤️'};
            });
        })
    }
    function deleteEmoticon(iden){
        setEmoticon((oldEmoticons) => {
            const newEmoticons = oldEmoticons.filter((e) => e.id !== iden);          //using filter method to create a copy of the array not containing the element with the unique id.
            return newEmoticons;
        });
    }
    function addEmoticon(){
        setEmoticon((oldEmoticons) => {
            return [...oldEmoticons, {id: uuid(),emoji: emojis[Math.floor(Math.random() * emojis.length)]}]    //adding elements to a react useState array(create a copy)
        });
    }
    return(
        <div>
            {emoticons.map((emoticon) => <span onClick={() => deleteEmoticon(emoticon.id) } key={emoticon.id} style={{fontSize: '4rem'}}>{emoticon.emoji}</span>)}
            <button onClick={addEmoticon}>Add Emoji</button>
            <button onClick={makeHeart}>Make all emojis hearts</button>
        </div>
    );
}

