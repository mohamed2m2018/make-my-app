import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Navigation from './Navigation';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <Navigation />
      </React.Fragment>
    );
  }
}
