import { useState, useEffect } from "react";
import { List, Box , Typography} from '@mui/material';
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import { v4 as uuid } from 'uuid';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if (!data) return [];
    return data;

}

export default function ToDoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const removeTodo = (id) => {
        setTodos((oldTodos) => {
            return oldTodos.filter((i) => i.id !== id);
        });
    }

    const toggleToDo = (id) => {
        setTodos((oldTodos) => {
            return oldTodos.map((i) => {
                if (i.id === id) {
                    return { ...i, completed: !(i.completed) }
                }
                else {
                    return i
                }
            })
        })
    }

    const addToDo = (text) => {
        setTodos((oldTodos) => {
            return [...oldTodos, { text: text, id: uuid(), completed: false }]
        })
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection:'column',
            alignItems: 'center',
            marginTop: 10
        }}>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(todo => {
                    return <ToDoItem todo={todo} key={todo.id} removeToDo={removeTodo} toggleToDo={toggleToDo} />
                })}
                <ToDoForm add={addToDo}></ToDoForm>
            </List>
        </Box>
    );
}


