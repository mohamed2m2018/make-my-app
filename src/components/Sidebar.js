import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import '../Sidebar.css';
export default class SideBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="side-bar">
          <div className="menu-icon">
            <div className="line line1" />
            <div className="line line2" />
            <div className="line line3" />
          </div>

          <ul className="social-icons-list">
            <li>
              <a href="http://google.com" className="social-link">
                <i>
                  <FontAwesomeIcon icon={faFacebook} />
                </i>
              </a>
            </li>
            <li>
              <a href="http://google.com" className="social-link">
                <i>
                  <FontAwesomeIcon icon={faTwitter} />
                </i>
              </a>
            </li>

            <li>
              <a href="http://google.com" className="social-link">
                <i>
                  <FontAwesomeIcon icon={faInstagram} />
                </i>
              </a>
            </li>
          </ul>
          <p className='year'>2019</p>
        </div>
      </div>
    );
  }
}
