import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="row">
        <div className="medium-12 columns">
          <h3>Contact Me!</h3>
            <a href="mailto:jcmahan@gmail.com" target="_top">Send Mail</a>
        </div>
    </div>
    );
  }
}

export default Footer;
