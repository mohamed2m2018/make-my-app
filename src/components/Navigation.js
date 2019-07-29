import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../Navigation.css';

export default class Navigation extends Component {
  render() {
    const {navState}=this.props;
    return (
      <nav className={navState?"navigation-after-click":"navigation"}>
        <div className="navigation-header">
          <h1 className="navigation-heading">Make My App</h1>
          <form className="navigation-search">
            <input
              type="text"
              className="navigation-search-input"
              placeholder="Search"
            />
            <button className="navigation-search-button" >
              <FontAwesomeIcon  icon={faSearch} />
            </button>
          </form>
        </div>
        <ul className="navigation-list">
          <li className="navigation-item">
            <a href="google.com" className="navigation-link">
              Home
            </a>
          </li>
          <li className="navigation-item">
            {' '}
            <a href="google.com" className="navigation-link">
              Login
            </a>
          </li>
          <li className="navigation-item">
            {' '}
            <a href="google.com" className="navigation-link">
              Register
            </a>
        </li>
          <li className="navigation-item">
            {' '}
            <a href="google.com" className="navigation-link">
              Chat
            </a>
          </li>
          <li className="navigation-item">
            {' '}
            <a href="google.com" className="navigation-link">
              Request App
            </a>
          </li>
          <li className="navigation-item">
            {' '}
            <a href="google.com" className="navigation-link">
              About us
            </a>
          </li>
        </ul>

        <div className="copyright">
          <p>&copy; 2019. Make-My-App. All Rights Reserved. </p>
        </div>
      </nav>
    );
  }
}
