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
  let url = 'https://launchlibrary.net/1.2/launch/2017-01-01/2016-08-01'
  fetch(url).then((responseText) => {
     return responseText.json();
  })
  .then((response) => {
     this.setState({
       rockets: response.launches
     });
  });
}

  render() {
        console.log('new state?', this.state)
    return (
      <div>
    <Launch rockets={this.state.rockets}/>
      </div>
    );
  }
}
export default Rocket;
