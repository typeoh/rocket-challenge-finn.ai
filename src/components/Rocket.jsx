import React, { Component } from 'react';
import Launch from './Launch.jsx'

class Rocket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rockets: null
    };
  }
componentDidMount(){
  let url = 'https://launchlibrary.net/1.2/agency/5'
  fetch(url).then((responseText) => {
     return responseText.json();
  })
  .then((response) => {
     this.setState({
       rockets: response
     });
  });
}

  render() {
        console.log('new state?', this.state)
    return (
      <div>
    <Launch />
      </div>
    );
  }
}
export default Rocket;
