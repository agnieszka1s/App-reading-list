import React, { Component } from 'react';

class Placeholder extends Component{

    render (){
        return (
            <input className="placeholder"
               onKeyPress={this.props.handleKeyPress}
               type="text"
               placeholder="Type item here..."
               value={this.props.newItem}
               onChange={event =>
                   this.props.updateInput("newItem", event.target.value)}
             />
        )
    }
}

export default Placeholder;