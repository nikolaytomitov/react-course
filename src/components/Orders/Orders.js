import React, { Component, Fragment } from 'react';
import Order from './Order';
import axios from 'axios';

class Orders extends Component {

    state = {
        orders: [],
        x: 0
    }

    constructor(props) {
        super(props);
        console.log('Orders Constructor');
    }

    deleteOrder = (id) => {
        console.log("Sega kupih tui s id " + id);
        const newOrders = [...this.state.orders];
        let index = newOrders.findIndex(order => order.id === id);
        newOrders.splice(index, 1);

        axios.delete('/sudjuci/' + id + ".json").then(data => {
            this.setState({
                orders: newOrders
            });
        });
    }

    changeQuantity = (event, id) => {
        const newQuantity = event.target.value;
        const newOrders = [...this.state.orders];
        let index = newOrders.findIndex(order => order.id === id);
        newOrders[index].quantity = newQuantity;

        this.setState({
            orders: newOrders
        });
    }


    componentDidMount() {
        console.log('@Orders@ componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('@Orders@ shouldComponentUpdate')
        return true;
    }

    render() {
        console.log('@Orders@ render');
        return this.state.orders.map((order) => (
            <Fragment key={order.id}>
                <Order
                    // photo={images(`./${order.photo}.jpg`)}
                    name={order.name}
                    // info={order.info}
                    price={order.price}
                    quantity={order.quantity}
                    handleDelete={() => this.deleteOrder(order.id)}
                    handleChange={(event) => this.changeQuantity(event, order.id)} />
            </Fragment>
        ))
    }

    componentDidUpdate() {
        console.log("@Orders@ componentDidUpdate");
    }

    componentDidMount() {
        console.log("App componentDidMount");
        axios.get('/sudjuci.json')
            .then((response) => {
                let sudjuci = Object.keys(response.data).map((key) => {
                    return { id: key, ...response.data[key] };
                })

                this.setState({
                    orders: sudjuci
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({ hasError: true })
            });
    }
}

export default Orders;