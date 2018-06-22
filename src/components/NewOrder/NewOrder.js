import React, { Component } from 'react';
import classes from './NewOrder.css';
import Input from '../Input/Input';
import axios from 'axios';

export default class NewOrder extends Component {
    state = {
        formData: {
            name: {
                label: 'Name',
                componentType: 'input',
                options: {
                    placeholder: 'Enter name',
                    type: 'text'
                },
                constraints: {
                    required: true
                },
                value: '',
                isOK: false
            },
            price: {
                label: 'Price',
                componentType: 'input',
                options: {
                    placeholder: 'Enter price',
                    type: 'number'
                },
                constraints: {
                    required: true
                },
                value: 0,
                isOK: false
            },
            quantity: {
                label: 'Quantity',
                componentType: 'input',
                options: {
                    placeholder: 'Enter quantity',
                    type: 'number'
                },
                constraints: {
                    required: true,
                    minValue: 5
                },
                value: 0,
                isOK: false
            },
            opisanie: {
                label: 'Opisanie',
                componentType: 'textarea',
                options: {
                    placeholder: 'Eto tuk sa instrukciite ot jenata',
                },
                constraints: {},
                value: '',
                isOK: false
            },
            otKvoMeso: {
                label: 'Izberi si',
                componentType: 'select',
                options: {
                    selectOptions: [
                        { title: 'konsko', value: '3' },
                        { title: 'magareshko', value: '5' },
                        { title: 'kuchesko', value: '13' },
                        { title: 'teleshko', value: '21' },
                        { title: 'svinq - mini prase', value: '4' },
                    ]
                },
                constraints: {},
                value: '13',
                isOK: true
            },
        }
    }

    addSudjuk = () => {
        let order = {};
        Object.keys(this.state.formData)
            .forEach(key => order[key] = this.state.formData[key].value);
        axios.post('/sudjuci.json', order)
            .then(response => {
                this.props.history.replace('/');
            });
    }

    validate(newField) {
        newField.isOK = true;

        if (newField.constraints.required) {
            newField.isOK = newField.isOK && newField.value.trim().length > 0;
        }

        if (newField.constraints.minValue) {
            newField.isOK = newField.isOK && (+newField.value > newField.constraints.minValue);
        }
    }

    isFormValid = () => {
        return Object.keys(this.state.formData)
            .every(key => this.state.formData[key].isOK);
    }

    changeHandler = (key, event) => {
        const newFormData = { ...this.state.formData };
        const newField = { ...newFormData[key] };
        newField.value = event.target.value;
        newFormData[key] = newField;

        this.validate(newField);

        this.setState({
            formData: newFormData
        });
    }

    render() {
        return (
            <div className={classes.NewOrder}>
                {
                    Object.keys(this.state.formData).map((key) => {
                        return (
                            <Input
                                key={key}
                                changeHandler={(event) => this.changeHandler(key, event)}
                                {...this.state.formData[key]}
                            />
                        );
                    })
                }

                <button disabled={!this.isFormValid()} onClick={() => this.addSudjuk()}> Add new order </button>
            </ div>
        );
    }
}