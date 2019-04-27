import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import ButtonDeleteAll from "./components/ButtonDeleteAll/ButtonDeleteAll";
import ItemsList from "./components/ItemsList/ItemsList";
import ButtonAdd from "./components/ButtonAdd/ButtonAdd";
import Placeholder from "./components/Placeholder/Placeholder";

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
                <div className="addBook">
                  <Placeholder handleKeyPress={this.handleKeyPress} newItem={this.state.newItem} updateInput={this.updateInput}/>
                  <ButtonAdd addItem={this.addItem}/>
                   <ItemsList list={this.state.list} deleteItem={this.deleteItem} checkHandler={this.checkHandler}/>
                </div>
                <ButtonDeleteAll deleteAll={this.deleteAll} />
            </div>
        );
    }
}


export default App;