import React, { Component } from 'react';
import './Welcome.css';
import GoogleLogin from 'react-google-login';

class Welcome extends Component {
  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4">

          <h2>Hello, this is a React practice page for James Mahan</h2>
          <div className="column">
          <a href='/login' className='button success'>Login</a>
          <a href='/signup' className='button secondary'>Signup</a>
        </div>
    </div>
    );
  }
}

export default Welcome;
