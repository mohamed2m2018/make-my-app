import React, { Component } from 'react';
import '../MotivationalMedia.css';
import Youtube from 'react-youtube';

export default class MotivationalMedia extends Component {

    _onReady=(event)=>{
        event.target.pauseVideo();
    }
  render() {
    return (
      <section className="motivational-media">
        <div className="motivational-media-content">
          <h1 className="motivational-media-heading">Be the next Steve Jobs</h1>
          <div className='small-underline'/>
          <div className='big-underline'/>
          <div className="media">
            <Youtube className='video' 
              autoplay
              videoId="8rwsuXHA7RA"
              opts={{
                playerVars: {
                  // https://developers.google.com/youtube/player_parameters
                  autoplay: 1,
                  color:'white',
                },
              }}
            //   onReady={this._onReady}

            />
          </div>
        </div>
      </section>
    );
  }
}
