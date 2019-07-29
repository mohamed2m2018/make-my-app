import React, { Component } from 'react';
import '../Header.css';
import logo from '../images/logo.png';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="brand">
          <div className="logo">
            <img src={logo} width="30" />
          </div>
          <div className="site-heading">Make My App</div>
        </div>

        <div className="banner">
          <h1 className="banner-heading">Achieve your dreams now! </h1>
          <p className="banner-paragraph">
          Do what is right
          </p>
          <button className='banner-button'>Request App</button>
        </div>
      </header>
    );
  }
}
