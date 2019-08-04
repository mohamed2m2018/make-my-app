import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import '../Navigation.css';
export default class Navigation extends Component {
  scroll = (toWhichSection) => {
    // e.preventDefault();
    let ref;
    switch (toWhichSection) {
      case 'whyUs':
        let { whyUsRef } = this.props.refs;
        ref = whyUsRef;
        break;

      case 'home':
        let { homeRef } = this.props.refs;
        ref = homeRef;
        break;
    }
    ref = ref.current;
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { navState } = this.props;
    return (
      <nav className={navState ? 'navigation-after-click' : 'navigation'}>
        <div className="navigation-header">
          <h1 className="navigation-heading">Make My App</h1>
          <form className="navigation-search">
            <input
              type="text"
              className="navigation-search-input"
              placeholder="Search"
            />
            <button className="navigation-search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link
              onClick={() => this.scroll('home')}
              className="navigation-link"
              to="#"
            >
              Home
            </Link>
          </li>

          <li className="navigation-item">
            <Link
              onClick={() => this.scroll('whyUs')}
              className="navigation-link"
              to="#"
            >
              Why us?
            </Link>
          </li>
          <li className="navigation-item">
            <a href="google.com" className="navigation-link">
              Login
            </a>
          </li>
          <li className="navigation-item">
            <NavLink to="/" className="navigation-link">
              Register
            </NavLink>
          </li>
          <li className="navigation-item">
            <a href="google.com" className="navigation-link">
              Chat
            </a>
          </li>
          <li className="navigation-item">
            <a href="google.com" className="navigation-link">
              Request App
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
