import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
  
    <div className="callout primary">
      <div className="row column">
        <h1>{this.props.name}</h1>
          <p className="lead">Lorem ipsom bullshit bullshit bullshit.</p>
      </div>
    </div>

    );
  }
}

export default Header;
