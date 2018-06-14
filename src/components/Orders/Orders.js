import React from 'react';
import Order from './Order';

const images = require.context('../../images');

const orders = (props) => {
    return props.orders.map((order) => (
        <Order
            key={order.id}
            photo={images(`./${order.photo}.jpg`)}
            name={order.name}
            info={order.info}
            price={order.price}
            quantity={order.quantity}
            handleDelete={() => props.handleDelete(order.id)}
            handleChange={(event) => props.handleChange(event, order.id)} />
    ))
}

export default orders;