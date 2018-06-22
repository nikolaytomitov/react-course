import React, { Component } from 'react';
import classes from './NewOrder.css';
import Input from '../Input/Input';
import axios from 'axios';

export default class NewOrder extends Component {
    state = {
        name: {
            label: 'Name',
            options: {
                placeholder: 'Enter name',
                type: 'text'
            },
            value: ''
        },
        price: {
            label: 'Price',
            options: {
                placeholder: 'Enter price',
                type: 'number'
            },
            value: 0
        },
        quantity: {
            label: 'Quantity',
            options: {
                placeholder: 'Enter quantity',
                type: 'number'
            },
            value: 0
        }
    }

    addSudjuk = (order) => {
        axios.post('/sudjuci.json', order)
            .then(response => {
                this.props.history.goBack();
            });
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className={classes.NewOrder}>
                <Input label='Name' name='name' value={this.state.name} placeholder="Enter name" type='text' changeHandler={this.changeHandler} />
                <Input label='Quantity' name='quantity' value={this.state.quantity} type='number' changeHandler={this.changeHandler} />
                <Input label='Price' name='price' value={this.state.price} type='number' changeHandler={this.changeHandler} />

                <button onClick={() => this.addSudjuk({ ...this.state })}> Add new order </button>
            </ div>
        );
    }
}