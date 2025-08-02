import React, { Component } from 'react';

export default class CurrencyConverter extends Component {
    constructor() {
        super();
        this.state = {
        rupees: '',
        };
    }

    handleChange = (e) => {
        this.setState({ rupees: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { rupees } = this.state;
        const euro = (parseFloat(rupees) / 90).toFixed(2);
        alert(`Converting to Euro Amount is ${euro}`);
    };

    render() {
        return (
        <div>
            <h1 style={{color: 'green'}}>Currency Converter!!!</h1>
            <form onSubmit={this.handleSubmit}>
            <label>Amount: </label>
            <input
                type="number"
                value={this.state.rupees}
                onChange={this.handleChange}
                required
            />
            <br/>

            <label>Currency: </label>
            <textarea>Euro</textarea>

            <br/>
            <button type="submit">Submit</button>
            </form>
        </div>
        );
    }
}