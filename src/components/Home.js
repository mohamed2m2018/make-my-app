import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import Header from './Header';
import AboutUs from './AboutUs';
import MotivationalMedia from './MotivationalMedia';
import Footer from './Footer';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.whyUsRef = React.createRef();
    this.homeRef=React.createRef();
  }


  state = {
    navState: false,
  };
  render() {
    const { navState } = this.state;
    const {whyUsRef,homeRef}=this;
    const openNavigation = () => {
      this.setState({ navState: !navState });
    };
    return (
      <React.Fragment>
        <Sidebar onMenuClicked={openNavigation} />
        <Navigation navState={navState} refs={{whyUsRef,homeRef}} />
        <Header homeRef={homeRef} />
        <AboutUs whyUsRef={whyUsRef} />
        <MotivationalMedia/>
        <Footer/>
      </React.Fragment>
    );
  }
}
