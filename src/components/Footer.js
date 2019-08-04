import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
          <div className='main-part'>
              <div className='footer-list-wrapper'>
                  <h3 className='Footer-heading'>Make My App</h3>
                  <ul className='footer-list'>
                      <li className='footer-list-item'>
                          <a href='#' className='footer-list-link'/>
                      </li>
                  </ul>
              </div>
          </div>
      </footer>
    );
  }
}
