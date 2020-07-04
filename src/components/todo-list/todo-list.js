import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'

const Todolist = ({todos})=>{

    const items = todos.map((item) => {
        const{ id , ...itemProps} = item
        return(
            <li key={item.id} className="list-group-item">
                <TodoListItem {...itemProps}/>
            </li>
        )
    })


return(
    <ul className="todo-list">
        {items}
    </ul>
)
}

export  default Todolist;