import React, { Component } from 'react';
import "./ButtonAdd.css"

class ButtonAdd extends Component{

    render (){
        console.log(this.props);
        return(
            <button className="addButton"
                    onClick={() => this.props.addItem()}
            >Add</button>
        )}
}

export default ButtonAdd;