import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'

const Todolist = ({todos, onDeleted, isImportant, isDone})=>{

    const items = todos.map((item) => {
        const{ id , ...itemProps} = item
        return(
            <li key={item.id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={()=> onDeleted(id) }
                    isImportant={()=>isImportant(id)}
                    isDone={()=>isDone(id)}
                />
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