import React, { Component } from 'react';

//stateful
class Order extends Component {
    constructor(props) {
        super(props);
        console.log('$Order$ Constructor');
    }


    render() {
        console.log('$Order$ Render');
        return (
            <div>
                <img width="50px" src={this.props.photo} alt="Kartinka" />
                <span> {this.props.name} </span>

                <span> {this.props.info} </span>
                <span> Price : <strong> {this.props.price} </strong> </span>
                <input type="number" value={this.props.quantity}
                    onChange={this.props.handleChange} />
                <button onClick={this.props.handleDelete}> delete </button>
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('$Order$ shouldComponentUpdate');
        return (nextProps.quantity !== this.props.quantity);
    }

    componentDidMount() {
        console.log('$Order$ CompnentDidMount');
    }

    componentDidUpdate() {
        console.log("$Order$ componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("$Order$ componentWillUnmount");
    }
}

//stateless
// const order = (props) => {
//     return (
//         <div>
//             <img width="50px" src={props.photo} alt="Kartinka" />
//             <span> {props.name} </span>

//             <span> {props.info} </span>
//             <span> Price : <strong> {props.price} </strong> </span>
//             <input type="number" value={props.quantity}
//                 onChange={props.handleChange} />
//             <button onClick={props.handleDelete}> delete </button>
//         </div>
//     );
// }


export default Order;