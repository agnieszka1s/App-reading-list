import React, { Component } from 'react';

class ItemsList extends Component{

    render (){
        console.log(this.props);
        return(
            <ul>
                {this.props.list.map(item => {
                    return(
                        <div>
                            <li className="val" key={item.id} style={{
                                textDecoration: item.checked ? 'line-through' : 'none',
                            }}><p>{item.value}</p>
                                <i className ="fas fa-trash"
                                   onClick={() => this.props.deleteItem(item.id)}><span className="deleteItemSpan">Delete item</span></i>
                                <i className ="fas fa-book"
                                   onClick={() => {
                                       this.props.checkHandler(item.id);
                                   }}><span className="finishedSpan">Finished</span>
                                </i>
                                <i className="demo-icon icon-emo-thumbsup"
                                   style={{
                                       display: item.checked ? 'inline' : 'none',
                                   }}/>
                            </li>
                        </div>)
                })}
            </ul>
        )
    }
}

export default ItemsList;