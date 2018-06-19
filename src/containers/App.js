import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Orders from '../components/Orders/Orders';
import classes from './App.css';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import wrapper from '../hoc/Wrapper2';
import axios from 'axios';


axios.defaults.baseURL = 'https://sudjuci.firebaseio.com/';

// (props, state, children)
class App extends Component {

  state = {
    orders: [],
    x: 0
  }

  constructor(props) {
    super(props);
    console.log("App constructor");
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

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App shouldComponentUpdate')
    return true;
  }

  //returns ReactElement - (props, children)
  render() {
    console.log("App render");
    return (
      <div className={classes.App}>
        <ErrorBoundary >
          <Header boss='Jenata' kolko={5}>
            {this.props.title}
          </Header>
        </ErrorBoundary>

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

  componentDidUpdate() {
    console.log("App componentDidUpdate");
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
      });
  }
}

export default wrapper(App);
