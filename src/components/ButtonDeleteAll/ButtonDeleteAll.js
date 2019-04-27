import React, { Component } from 'react';
import "./ButtonDeleteAll.css"

class ButtonDeleteAll extends Component{

    render (){
        console.log(this.props);
        return(
            <div className="deleteAll">
                <div>Delete all</div>
                <i className="fas fa-trash-alt"
                   onClick={() => (this.props.deleteAll())}
                />
            </div>
        )
    }
}

export default ButtonDeleteAll;

