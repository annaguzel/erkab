import React, { Component } from "react";
import { Link } from "react-router-dom";
import bus from "../images/bus.png";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import photo1 from "../images/photo1.png";
import photo2 from "../images/photo2.jpg";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <section className="showcase">
          <div className="container-fluid p-0 text-center">
            <h3 className="display-3 my-5">ErKab</h3>
            <div className="row no-gutters">
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={{ backgroundImage: `url(${image2})` }}
              ></div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Affordable and Reliable</h2>
              </div>
            </div>
            <div className="row no-gutters">
              <div
                className="col-lg-6 text-white showcase-img"
                style={{ backgroundImage: `url(${image1})` }}
              ></div>
              <div className="col-lg-6 my-auto showcase-text">
                <h2>Save at least 50% of your transportation cost.</h2>
              </div>
            </div>
            <div className="row no-gutters">
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={{ backgroundImage: `url(${image3})` }}
              ></div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Easy to Use</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials text-center bg-light">
          <div className="container">
            <h2 className="mb-5">Meet the Team</h2>
            <div className="row">
              <div className="col-lg-6">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src={photo2}
                    alt="anna"
                  />
                  <h5>Anna A.</h5>
                  <p className="font-weight-light mb-0">Full-Stack Developer</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src={photo1}
                    alt="olga"
                  />
                  <h5>Olga H.</h5>
                  <p className="font-weight-light mb-0">Full-Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutUs;
