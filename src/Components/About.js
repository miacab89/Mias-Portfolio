import React, { Component } from 'react';


class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;

    }

    return (
   
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="webdev" height="120" width="120" src={profilepic} alt="webdevgirl" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            
         </div>
      </div>

   </section>
   
    );
  }
}

export default About;
