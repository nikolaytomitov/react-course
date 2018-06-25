import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions'
import Order from './Order';
import axios from 'axios';

class Orders extends Component {

    state = {
        x: 0
    }

    constructor(props) {
        super(props);
        console.log('Orders Constructor');
    }

    deleteOrder = (id) => {
        // console.log("Sega kupih tui s id " + id);
        // const newOrders = [...this.state.orders];
        // let index = newOrders.findIndex(order => order.id === id);
        // newOrders.splice(index, 1);

        // axios.delete('/sudjuci/' + id + ".json").then(data => {
        //     this.setState({
        //         orders: newOrders
        //     });
        // });
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

    render() {
        return this.props.orders.map((order) => (
            <Link to={'/' + order.id} key={order.id}>
                <Order
                    // photo={images(`./${order.photo}.jpg`)}
                    name={order.name}
                    // info={order.info}
                    price={order.price}
                    quantity={order.quantity}
                    handleDelete={() => this.props.deleteOrder(order.id)}
                    handleChange={(event) => this.changeQuantity(event, order.id)} />
            </Link>
        ))
    }

    componentDidUpdate() {
        console.log("@Orders@ componentDidUpdate");
    }
}

//redux state, ownProps
const mapStateToProps = (state, ownProps) => {
    return {
        orders: state.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteOrder: (id) => dispatch({ type: actionTypes.DELETE_PRODUCT, id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);