import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
class Main extends Component {
  render() {
   const HomePage = () => {
      return(
          
          <Home 
        
          />
      );
    }

    return (
      <div>
        <Header />
        <div>
           <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
                  <Route path='/humble-hacks' component={() => <Home />} />
                  <Redirect to="/humble-hacks" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default withRouter(Main);