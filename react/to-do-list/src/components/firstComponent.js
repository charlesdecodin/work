/* import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '', items: [] };
    }
    getChange = (event) => {
        this.setState({
            text: event.target.value
        });


    }
    submit = (event) => {
        event.preventDefault();
        this.setState({
            text: '',
            items: [...this.state.items, { text: this.state.text }]
        })

    }
    createItem = () => {
        return this.state.items.map((item, index) => {
            return (
                <div key={index}>
                    <span>{item.text}</span>
                    <span
                        onClick={() => this.deleteItem(index)}
                    > | X</span>
                </div>

            )
        })
    }
    deleteItem = (index) => {
        console.log(this.state.items)
        const todoItems = this.state.items;
        todoItems.splice(index, 1);
        this.setState({
            items: todoItems
        })

    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submit}>
                    <h2>A faire</h2>
                    <label htmlFor="text">
                        Que dois-tu faire
               </label>
                    <input
                        type="text"
                        name="text"
                        onChange={this.getChange}
                        value={this.state.text}
                    />
                    <button >
                        Add
                </button>
                </form>
                {this.createItem()}
            </React.Fragment>
        )
    }

} */





