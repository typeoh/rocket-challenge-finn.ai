import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar">
        <div className="navbar-brand">
            <img src="http://imgur.com/PzRyZhD.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
        </div>
        <div className="navbar-logo">
            <img src="http://imgur.com/JLCR9n7.png" ></img>
        </div>
      </nav>
      </div>
    );
  }
}
export default Navbar;
