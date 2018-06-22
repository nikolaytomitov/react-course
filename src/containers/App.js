import React, { Component } from 'react';
import Header from '../components/Header/Header';
// import Footer from '../components/Footer/Footer';
import Orders from '../components/Orders/Orders';
import NewOrder from '../components/NewOrder/NewOrder';
import OrderDetail from '../components/OrderDetail/OrderDetail';

import classes from './App.css';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import wrapper from '../hoc/Wrapper2';
import axios from 'axios';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';


axios.defaults.baseURL = 'https://sudjuci.firebaseio.com/';

// (props, state, children)
class App extends Component {

  constructor(props) {
    super(props);
    console.log("App constructor");
    this.state = {
      isAdmin: true
    }
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
            <Switch>
              <Route exact path='/' component={Orders} />
              {this.state.isAdmin ?
                <Route exact path='/add-new' component={NewOrder} />
                :
                null}
              <Route exact path='/orders/:id' component={OrderDetail} />
              <Route render={() => <h2> Nqma takava stranica </h2>} />
            </Switch>
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
