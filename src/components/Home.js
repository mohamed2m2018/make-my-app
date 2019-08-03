import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import Header from './Header';
import AboutUs from './AboutUs';
import MotivationalMedia from './MotivationalMedia';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.aboutUsRef = React.createRef();
  }


  state = {
    navState: false,
  };
  render() {
    const { navState } = this.state;
    const openNavigation = () => {
      this.setState({ navState: !navState });
    };
    return (
      <React.Fragment>
        <Sidebar onMenuClicked={openNavigation} />
        <Navigation navState={navState} passRef={this.aboutUsRef.current} />
        <Header />
        <AboutUs ref={this.aboutUsRef} />
        <MotivationalMedia/>
      </React.Fragment>
    );
  }
}
