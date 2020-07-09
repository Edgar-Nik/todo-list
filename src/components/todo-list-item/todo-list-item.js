import React from "react";
import "./todo-list-item.css";


const TodoListItem = ({label,onDeleted,isImportant,isDone,done,important})=>{

   

    let classNames = 'todo-list-item';
        if(done){
            classNames += ' done';
        }
        if(important){
            classNames += ' important';
        }

        return (
            <span className="item-wrapper">
            <span className={classNames}>
                <span className="todo-list-item-label"
                 
                      onClick={isDone}
                >
                    {label}
                </span>
                <span className="buttons">
                     <button type="button" className="item-delete-btn item-btn"
                             onClick={onDeleted}
                     ><i className="fa fa-trash-o"></i></button>

                     <button type="button" className="item-important-btn item-btn"
                             onClick={isImportant}
                     ><i className="fa fa-exclamation"></i></button>
                </span>
            </span>
        </span>
        )

}


export default TodoListItem;