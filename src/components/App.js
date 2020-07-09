import React, {Component} from "react";
import Todolist from "./todo-list/todo-list";
import AppHeader from "./app-header/app-header";
import SearchBox from "./search-box/search-box";
import ItemFilter from "./item-filter/item-filter";
import ItemAddForm from "./item-add-form/item-add-form";
import "./app.css"


class TodoApp extends Component{
    constructor(){
        super();
        this.maxId=100;
        this.createItem=(label)=>{
        return{
            label,
            important:false,
            id:this.maxId++,
            done:false
        }
    }
    this.state={
        todoData : [
        this.createItem("make react app"),
        this.createItem("esim e"),
        this.createItem("kofe"),
        ],
        term:''

    }

    this.addItem = (text) =>{
        const newItem= this.createItem(text);

        this.setState(({todoData})=>{
            const added = [...todoData, newItem]
            return {todoData:added}
        })
    }

    this.deleteItem = (id) => {
       this.setState(({todoData})=>{
          const idx = todoData.findIndex((el) => el.id===id);
          // todoData.splice(idx,1);
       
          const result = [...todoData.slice(0,idx), ...todoData.slice(idx+1)];
          return {todoData:result};
       })
    }


    this.toggleProperty=(arr, id, property)=>{
        const idx = arr.findIndex((el) => el.id===id);
            const oldElem = arr[idx];
            const newElem = {...oldElem,[property]:!oldElem[property]};
           return [...arr.slice(0,idx),
           newElem,
            ...arr.slice(idx+1)];





    }

    this.isImportant = (id) =>{
        this.setState(({todoData})=>{
          
            return {todoData:this.toggleProperty(todoData,id,"important")}
            })
    }
    this.isDone = (id)=>{
         this.setState(({todoData})=>{
             return {todoData:this.toggleProperty(todoData,id,"done")}
        
            })
    }
        this.search = (items, term)=>{
            if(term==='') return items;
             return    items.filter((item)=>  item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
       
        }
        this.onSearchChange=(term)=>{
            this.setState({term});
        }
     }
    

  

    render() {
        const {todoData,term}=this.state;
        const doneCount = todoData.filter((el)=>el.done===true).length;
        const todoCount = todoData.length - doneCount;
        const visibleItems = this.search(todoData,term)

        return (
            <div className='app-wrap'>
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="search-wrap">
                    <SearchBox
                        onSearchChange={this.onSearchChange}/>
                    <ItemFilter />
                </div>

                <Todolist
                  
                     todos = {visibleItems}

                    onDeleted={this.deleteItem}
                    isImportant={this.isImportant}
                    isDone={this.isDone}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        )
    }


}






export default TodoApp;