import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Orders from '../components/Orders/Orders';
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
    return (
      <div className='App'>
        <Header boss='myja' />

        <Orders
          orders={this.state.orders}
          handleDelete={this.deleteOrder}
          handleChange={this.changeQuantity}
        />

        <Footer
          orders={this.state.orders} />
      </div>
    )
  }
}

export default App;
