import React from "react";
import "./todo-list-item.css";

const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'tomato' : 'black'
    }

    return (
        <span className="item-wrapper">
            <span className="todo-list-item">
                <span className="todo-list-item-label" style={style}>
                    {label}
                </span>
                <span className="buttons">
                     <button type="button" className="item-delete-btn item-btn"><i className="fa fa-trash-o"></i></button>
                     <button type="button" className="item-important-btn item-btn"><i className="fa fa-exclamation"></i></button>
                </span>
            </span>
        </span>
    )


}


export default TodoListItem;