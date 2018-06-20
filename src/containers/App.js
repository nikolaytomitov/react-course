import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Orders from '../components/Orders/Orders';
import NewOrder from '../components/NewOrder/NewOrder';
import classes from './App.css';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import wrapper from '../hoc/Wrapper2';
import axios from 'axios';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';


axios.defaults.baseURL = 'https://sudjuci.firebaseio.com/';

// (props, state, children)
class App extends Component {

  constructor(props) {
    super(props);
    console.log("App constructor");
  }



  // increment = () => {
  //   this.setState((prevState, prevProps) => {
  //     return {
  //       x: prevState.x + 1
  //     }
  //   });
  //   this.setState((prevState, prevProps) => {
  //     return {
  //       x: prevState.x + 1
  //     }
  //   });
  //   this.setState((prevState, prevProps) => {
  //     return {
  //       x: prevState.x + 1
  //     }
  //   });
  // }



  shouldComponentUpdate(nextProps, nextState) {
    console.log('App shouldComponentUpdate')
    return true;
  }

  //returns ReactElement
  render() {
    console.log("App render");
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <nav>
            <ul>
              <li> <NavLink exact activeStyle={{ color: 'cyan' }} activeClassName={classes.active2} to='/'> Home</NavLink> </li>
              <li> <NavLink exact activeClassName={classes.active2} to={{ pathname: '/add-new', search: 'order', hash: "3432" }}> Add new </NavLink> </li>
            </ul>
          </nav>

          <ErrorBoundary >
            <Header boss='Jenata' kolko={5}>
              {this.props.title}
            </Header>
          </ErrorBoundary>


          <main>
            <Route exact path='/' component={Orders} />
            <Route exact path='/add-new' component={NewOrder} />
            <Route exact path='/orders/:id' component={NewOrder} />
          </main>

        </div>
      </BrowserRouter >
    )
  }

  componentDidUpdate() {
    console.log("App componentDidUpdate");
  }


}

export default wrapper(App);
