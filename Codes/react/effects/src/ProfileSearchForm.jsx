import { useState } from "react";

export default function ProfileSearchForm({search}){
    const [name,setName] = useState('');
    function handleChange(evt) {
        setName((lol) => evt.target.value);
    }
    function handleSubmit(evt){
        evt.preventDefault();
        search(name);
        setName(''); 
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} />
            <button>Search</button>
        </form>
    )
}

