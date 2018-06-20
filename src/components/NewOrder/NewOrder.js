import React, { Component } from 'react';
import classes from './NewOrder.css';
import axios from 'axios';

export default class NewOrder extends Component {
    state = {
        name: '',
        price: 0,
        quantity: 0
    }

    addSudjuk = (order) => {
        axios.post('/sudjuci.json', order)
            .then(response => {
                // order.id = response.data.name;
            });
    }

    render() {
        console.log(this.props);
        return (
            <div className={classes.NewOrder}>
                <label> Name: </label>
                <input type='text' onChange={(event) => this.setState({ name: event.target.value })} />
                <label> Price: </label>
                <input type='number' onChange={(event) => this.setState({ price: event.target.value })} />
                <label> Quantity: </label>
                <input type='number' onChange={(event) => this.setState({ quantity: event.target.value })} />

                <button onClick={() => this.addSudjuk({ ...this.state })}> Add new order </button>
            </ div>
        );
    }
}