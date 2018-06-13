import React, { Component } from 'react';
import Order from './Order';
import './App.css';

// (props, state, children)
class App extends Component {

  state = {
    orders: [
      {
        id: '3w423',
        photo: 'turshiq',
        name: "turshiq",
        info: "ot kiselata",
        price: 4,
        quantity: 2
      },
      {
        id: '2342',
        photo: 'domat',
        name: "Domati",
        info: "rozovi, na promociq",
        price: 3,
        quantity: 1
      },
      {
        id: '463456',
        photo: 'morkov',
        name: "Morkovi",
        info: "ot dolen but bio",
        price: 2,
        quantity: 20
      }
    ],
    x: 0
  }

  deleteOrder = (id) => {
    console.log("Sega kupih tui s id " + id);
    const newOrders = [...this.state.orders];
    let index = newOrders.findIndex(order => order.id === id);
    newOrders.splice(index, 1);

    this.setState({
      orders: newOrders
    });
  }

  increment = () => {
    this.setState((prevState, prevProps) => {
      return {
        x: prevState.x + 1
      }
    });
    this.setState((prevState, prevProps) => {
      return {
        x: prevState.x + 1
      }
    });
    this.setState((prevState, prevProps) => {
      return {
        x: prevState.x + 1
      }
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

  //returns ReactElement - (props, children)
  render() {
    let images = require.context('./images');
    let total = this.state.orders.reduce((sum, order) =>
      sum + (+order.quantity * +order.price), 0);


    let nadpis = null;
    if (this.state.orders.length == 0) {
      nadpis = <h4> Vsichko nakupi, jenata shte e dovolna </h4>;
    }


    return (
      <div className='App'>
        <h1> Pazar, eto spisyka ot jenata: </h1>
        {
          this.state.orders.map((order) => (
            <Order
              key={order.id}
              photo={images(`./${order.photo}.jpg`)}
              name={order.name}
              info={order.info}
              price={order.price}
              quantity={order.quantity}
              handleDelete={() => this.deleteOrder(order.id)}
              handleChange={(event) => this.changeQuantity(event, order.id)} />
          ))
        }

        <footer>
          {nadpis}

          <span>Smetkata ti e: {total}</span>
        </footer>
      </div>
    )
  }
}

export default App;
