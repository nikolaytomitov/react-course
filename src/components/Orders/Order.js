import React from 'react';

//stateful
// class Order extends Component {
//     render() {
//         return (
//             <div>
//                 <h3> {this.props.name} </h3>
//                 <img src={this.props.photo} />
//                 <p> {this.props.info} </p>
//                 <p> Price : <strong> {this.props.price} </strong>
//                 </p>
//             </div>
//         );
//     }
// }

//stateless
const order = (props) => {
    return (
        <div>
            <img width="50px" src={props.photo} alt="Kartinka" />
            <span> {props.name} </span>

            <span> {props.info} </span>
            <span> Price : <strong> {props.price} </strong> </span>
            <input type="number" value={props.quantity}
                onChange={props.handleChange} />
            <button onClick={props.handleDelete}> delete </button>
        </div>
    );
}


export default order;