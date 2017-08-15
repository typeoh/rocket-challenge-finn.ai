import React, { Component } from 'react';

class Launch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestLaunch: [],
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
                    <img className="rocket-image" src={launch.rocket.imageURL} alt="Image"></img>
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{launch.name}</strong> <small>{launch.location.name}</small>
                      <span><small>{launch.windowstart}</small></span>
                      <span>
                        <small>{launch.rocket.agencies[0].name}</small>
                      </span>
                    </p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <span>
                      <small><a className="link is-active" href={launch.rocket.wikiURL}>For More Info</a></small>
                      </span>
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
