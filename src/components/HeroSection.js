import React, { Component } from 'react'

export default class HeroSection extends Component {
  render() {
    return (
      //   <div id="hero" className="hero route bg-image" style={{ backgroundImage: "url(/sujanaprofile.JPG)" }}>
      //   <div className="overlay-itro"></div>
      //   <div className="hero-content display-table">
      //     <div className="table-cell">
      //       <div className="container">
             
      //         <h1 className="hero-title mb-4">I am Sujana Bhandari</h1>
      //         <p className="hero-subtitle"><span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div className="container imgContainer">
        <img src="sujanaprofile.JPG" class="img-fluid image-design" alt="Sujana"></img>
      </div>
      
    )
  }
}
