import React, { Component } from 'react';
//import { Navbar, Button } from 'react-bootstrap';
import './AppLogin.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
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
      <div>
            <button
              bsStyle="primary"
              className="btn btn-margin"
              onClick={this.goTo.bind(this, 'order')}
            >
              Order
            </button>
            <button
              bsStyle="primary"
              className="btn btn-margin"
              onClick={this.goTo.bind(this, 'about')}
            >
              About Us
            </button>
            <button
              bsStyle="primary"
              className="btn btn-margin"
              onClick={this.goTo.bind(this, 'manager')}
            >
              Manager
            </button>
            {
              !isAuthenticated() && (
                  <button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </button>
                )
            }
            {
              isAuthenticated() && (
                  <button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </button>
                )
            }
      </div>
    );
  }
}

export default App;
