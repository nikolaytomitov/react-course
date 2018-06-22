import React, { Component } from 'react';
import axios from 'axios';


class OrderDetail extends Component {

    state = {}

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get('https://sudjuci.firebaseio.com/sudjuci/' + id + '.json')
            .then(response => {
                this.setState({ order: response.data });
            })
    }


    render() {
        if (!this.state.order)
            return (<p> Loading order...</p>);

        return (
            <div>
                <h3> Order Detail </h3>

                <p> {this.state.order.name} </p>
                <p> {this.state.order.price} </p>
                <p> {this.state.order.proizvoditel} </p>
            </div>
        )
    }
}

export default OrderDetail;