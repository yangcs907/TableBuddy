import React, { Component } from 'react';
import './About.css';

class App extends Component {
  render() {
    return (

      <div className="aboutContainer">

          <h1><i class="fas fa-utensils"></i>&nbsp;Table Buddy</h1>
          <p>Welcome to Table Buddy</p>
          <p>The convenient way to browse a restaurant's selections</p>
          <p>Also allows managers to customize their menu, view orders,
            and fulfill them
          </p>
          <div className="by">
            <p>by <a href="https://chrisyangportfolio.herokuapp.com/">cy</a></p>
          </div>

      </div>

    );
  }
}

export default App;
