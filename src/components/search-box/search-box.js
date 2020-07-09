import React, {Component} from "react";
import "./search-box.css";

class SearchBox extends Component{
    constructor() {
        super();
        this.state={
            term:''
        }
        this.onSearchChange=(e)=>{
          const term =  e.target.value;
          this.setState({term});
          this.props.onSearchChange(term);
        }
    }


    render(){
        return <input className="search-input"
                      type="text"
                      placeholder="type for search"
                        value={this.state.term}
                        onChange={this.onSearchChange}/>
    }
}



export default SearchBox;
