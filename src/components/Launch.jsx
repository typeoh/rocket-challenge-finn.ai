import React, { Component } from 'react';

class Launch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestLaunch: []
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('did props come by?', nextProps.rockets)
    this.setState({
      latestLaunch: nextProps.rockets
    })
  }



  render() {
    const launches = this.state.latestLaunch

    // const launches = this.props.rockets
    console.log('did you set state?', this.state)
    return (
      <div>
        {launches.map((launch) => {
          return <div className="column">
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image"></img>
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{launch.name}</strong> <small>{launch.location.name}</small> 
                      <span><small>{launch.windowstart}</small></span>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </span>
                    </p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a className="level-item">
                        <span className="icon is-small"><i className="fa fa-reply"></i></span>
                      </a>
                      <a className="level-item">
                        <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                      </a>
                      <a className="level-item">
                        <span className="icon is-small"><i className="fa fa-heart"></i></span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
        })
        }
        }}
</div>
    );
}
}
export default Launch;
