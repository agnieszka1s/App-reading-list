import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import ButtonDeleteAll from "./components/ButtonDeleteAll/ButtonDeleteAll";


class App extends Component {
    constructor(props){
        super(props);
        this.state={
            newItem:"",
            list:[]
        }
    }

    updateInput = (key, value) => {
        this.setState({
            [key]: value
        })
    };

    addItem = () => {
        //create item with unique id
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem
        };
        console.log(this.state.list);
        const list = this.state.list;
        console.log(list);

        //add new item to the list
        list.push(newItem);

        //update state with new list reset newItem input
        this.setState ({
            list,
            newItem: ""
        });
    };
    //on Enter
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.addItem();
        }
    };

    deleteAll = () => {
        //delete all items from the list
        this.setState({
            list: []
        })
    };

    deleteItem = id => {
        //copy current list of items
        const list = this.state.list;
        //filter out item being deleted
        const updatedList = list.filter(item => item.id !== id);
        this.setState({list: updatedList});
    };

    checkHandler = id => {
        this.setState ({
            list: this.state.list.map (item => {
                if (item.id === id) {
                    item.checked = !item.checked;
                }
                return item;
            }),
        });
    };

    render() {
        return (
            <div className="App">
                <Header/>
                <div className="addItem">
                    <input className="placeholder"
                           onKeyPress={this.handleKeyPress}
                           type="text"
                           placeholder="Type item here..."
                           value={this.state.newItem}
                           onChange={event =>
                               this.updateInput("newItem", event.target.value)}
                    />
                    <button className="addButton"
                            onClick={() => this.addItem()}
                    >Add</button>

                    <br/>
                    <ul>
                        {this.state.list.map(item => {
                            return(
                                <div>
                                    <li className="val" key={item.id} style={{
                                        textDecoration: item.checked ? 'line-through' : 'none',
                                    }}><p>{item.value}</p>
                                        <i className ="fas fa-trash"
                                           onClick={() => this.deleteItem(item.id)}><span className="deleteItemSpan">Delete item</span></i>
                                        <i className ="fas fa-book"
                                           onClick={() => {
                                               this.checkHandler(item.id);
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
                </div>
                <ButtonDeleteAll deleteAll={this.deleteAll} />


            </div>
        );
    }
}


export default App;