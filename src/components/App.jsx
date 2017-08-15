import React, {Component} from 'react';
import Navbar from './Navbar.jsx'
import Rocket from './Rocket.jsx'

class App extends Component {
  render() {
    return (
      <div className="app-container">
      <Navbar />
      <Rocket />
      </div>
    );
  }
}
export default App;
