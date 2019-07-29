import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import Header from './Header';

export default class Home extends Component {
  state = {
    navState: false,
  };
  render() {
    const {navState}=this.state;
    const openNavigation = () => {
      this.setState({ navState: !navState });
    };
    return (
      <React.Fragment>
        <Sidebar onMenuClicked={openNavigation} />
        <Navigation navState={navState} />
        <Header/>
      </React.Fragment>
    );
  }
}
