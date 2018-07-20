import React, { Component } from 'react';
import './Welcome.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


class Welcome extends Component {
  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4">

          <h2>Hello, this is a React practice page for James Mahan</h2>
          <div className="column">
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />,
          <FacebookLogin
            appId="205998870122239"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />,
);
          <a href='/login' className='button success'>Login</a>
          <a href='/signup' className='button secondary'>Signup</a>
        </div>
    </div>
    );
  }
}

export default Welcome;
