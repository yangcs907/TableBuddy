import React, { Component } from 'react';
//import { Navbar, Button } from 'react-bootstrap';
import './AppLogin.css';

const navButton = {
  color: "white",
  cursor: "pointer",
  fontFamily: "Didact Gothic, sans-serif",
  fontSize: "18px",
  padding: "10px"
}

const navButtonActive = {
  fontWeight: "bold",
  textDecoration: "underline"
}


class App extends Component {
  state = {
    currentPage: "about"
  };

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="navBar">
            <a
              style={navButton}
              onClick={this.goTo.bind(this, 'order')}
            >
              Order
            </a>
            <a
              style={navButton}
              onClick={this.goTo.bind(this, 'about')}
            >
              About
            </a>
            <a
              style={navButton}
              onClick={this.goTo.bind(this, 'manager')}
            >
              Manager
            </a>

      </div>
    );
  }
}

export default App;
