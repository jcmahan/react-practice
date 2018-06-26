import React, { Component } from "react";
import "./styles/foundation.min.css";
import './styles/custom.css';
import Routes from './routes';
import Header from "./components/header/Header";
import MobileHeader from './components/MobileHeader/MobileHeader';
import Footer from './components/footer/Footer';
// import Welcome from './components/Welcome/Welcome';
// import Main from './components/Main/Main';
// import Home from './components/Home/Home';


class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      appName : 'The Site of Mahan', 
      home: false
    }
  }
  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div className="off-canvas-content" data-off-canvas-content>
            <MobileHeader name={this.state.appName}/>
            <Header name={this.state.appName}/>
            <Routes name={this.state.appName}/>
              <hr />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
