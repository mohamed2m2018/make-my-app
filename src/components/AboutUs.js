import React, { Component } from 'react';
import '../Aboutus.css';
import reacNativeLogo from '../images/react-native.jpg';

export default class AboutUs extends Component {
  render() {
    return (
      <section className="about-us">
        <div className="about-us-content">
          <h1 className="about-us-heading">Why Us?</h1>
          <div className="underline">
            <div className="small-underline" />
            <div className="big-underline" />
          </div>
          <h3 className="sub-heading">Get A Cross Platform Mobile App</h3>
          <img src={reacNativeLogo} className='image' width="320"></img>
          <p className="about-us-paragraph">
            With us you can turn your idea into a cross platform mobile App,
            which runs on both android and ios. 
            You won't be bothered with
            publishing it on App  store or Play store, we will do it for you.
            <br />
            <br/>
            With us you pay in milestones.You check first the milstone is
            working, and everything is all right before paying any cent to us.
          </p>
          <button className="about-us-button">Read more</button>
        </div>
      </section>
    );
  }
}
