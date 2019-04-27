import React, { Component } from 'react';
import "./Header.css"

class Header extends Component{

    render (){
        return(
            <div className="appName">
                <i className="fas fa-book-open"><span className="iconSpan">Grab a coffee & enjoy your read<i className="fas fa-coffee"/></span></i>
                Reading List
                <i className="fas fa-book-open"><span className="iconSpan">Grab a coffee & enjoy your read<i className="fas fa-coffee"/></span></i>
            </div>
        )
    }
}

export default Header;

