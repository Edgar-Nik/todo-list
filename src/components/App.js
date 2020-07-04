import React from "react";
import Todolist from "./todo-list/todo-list";
import AppHeader from "./app-header/app-header";
import SearchBox from "./search-box/search-box";
import ItemFilter from "./item-filter/item-filter";
import "./app.css"

const todoData = [
    {label:'make react app', important:true,id:1},
    {label:'drink beer', important:false, id:2},
    {label:'do some stuff...', important:false, id:3}
]

const TodoApp = () => {
    return (
        <div className='app-wrap'>
            <AppHeader toDo={2} done={1} />
            <div className="search-wrap">
                <SearchBox />
                <ItemFilter />
            </div>

            <Todolist todos = {todoData}/>
        </div>
    )
}

export default TodoApp;