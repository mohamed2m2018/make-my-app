import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="main-part">
          <div className="footer-list-wrapper">
            <h3 className="footer-heading">Make My App</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#" className="footer-list-link">
                  support@make-my-app.com
                </a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-list-link">
                  New york
                </a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-list-link">
                  Tel:92163442
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-list-wrapper">
            <h3 className="footer-heading">Explore</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#" className="footer-list-link">
                  Home
                </a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-list-link">
                  why us
                </a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-list-link">
                  login
                </a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-list-link">
                  register
                </a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-list-link">
                  request app
                </a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-list-link">
                  chat
                </a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3 className="footer-heading">contact</h3>
            <p> Sign up for offers and discounts</p>
            <form className="footer-form">
              <input className="footer-input" placeholder="your email" />
              <button className="footer-btn">Sign Up</button>
            </form>
          </div>
        </div>
        <div className="creator-part">
          <div className="copyright-text">
            <p>copyright &copy; 2019 Make-My-App. All Rights Reserved. </p>
          </div>

          <div className="text-right">
            <p>
              We serve you with
              <FontAwesomeIcon icon={faHeart} />
              by <span>Make-My-App</span>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
