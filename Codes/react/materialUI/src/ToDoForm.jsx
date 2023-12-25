import {ListItem, TextField, InputAdornment, IconButton} from "@mui/material";
import Create from "@mui/icons-material/Create";
import { useState } from "react";

export default function ToDoForm({add}) {
    const [text, setText] = useState('');
    const handleChange = (evt) => {
        setText(i => evt.target.value)
    }
    function addToDo(evt){
        evt.preventDefault();
        add(text);
        setText('');
    }
    return (
        <ListItem>
            <form onSubmit={addToDo}>
            <TextField id="newitem" value={text} label="New To Do Item" variant="outlined" onChange={handleChange} InputProps={{
                endAdornment:(
                    <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" type="submit" edge="end">
                            <Create />
                        </IconButton>
                    </InputAdornment>
                )
            }} />
            </form>
        </ListItem>
    )
}


