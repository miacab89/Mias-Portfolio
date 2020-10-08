import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var demo = this.props.data.projects.url; 
      
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/' + projects.image;
        
        
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a>
                <img alt={projects.title} src={projectImage} />
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
                <div className="overlay">
                  <div className="portfolio-item-meta">
                  </div>
                </div>
              </a>
              <a href={demo} className="button">Demo</a>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns">

            <h1>Project Demos</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-eighths cf">
              {projects}
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Portfolio;
