import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Navigation from './Navigation';

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
      </React.Fragment>
    );
  }
}
