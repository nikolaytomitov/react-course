import React, { Component, Fragment } from 'react';
import Order from './Order';

const images = require.context('../../images');

class Orders extends Component {

    constructor(props) {
        super(props);
        console.log('Orders Constructor');
        this.state = {};
    }


    // static getDerivedStateFromProps(props, state) {
    //     console.log('@Orders@ getDerivedStateFromProps', props, state);
    //     return {};
    // }

    componentDidMount() {
        console.log('@Orders@ componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('@Orders@ shouldComponentUpdate')
        return true;
    }

    render() {
        console.log('@Orders@ render');
        return this.props.orders.map((order) => (
            <Fragment key={order.id}>
                <Order
                    // photo={images(`./${order.photo}.jpg`)}
                    name={order.name}
                    // info={order.info}
                    price={order.price}
                    quantity={order.quantity}
                    handleDelete={() => this.props.handleDelete(order.id)}
                    handleChange={(event) => this.props.handleChange(event, order.id)} />
            </Fragment>
        ))
    }

    componentDidUpdate() {
        console.log("@Orders@ componentDidUpdate");
    }
}

export default Orders;