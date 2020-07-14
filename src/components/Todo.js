import React from 'react'
import {Checkbox, IconButton, ListItem, Typography} from '@material-ui/core'
import Close from "@material-ui/icons/Close"

function Todo({todo, toggleComplete, removeTodo}) {

    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (
        <ListItem style={{ display: "flex", justifyContent: 'space-around' }}>
            <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
            <Typography className='todo-body' variant='body1' style={{textDecoration: todo.completed ? "line-through" : null}}>{todo.task}</Typography>
            <IconButton onClick={handleRemoveClick}>
                <Close />
            </IconButton>
        </ListItem>
    )

}

export default Todo